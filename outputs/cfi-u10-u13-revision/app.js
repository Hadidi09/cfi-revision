(function () {
  "use strict";

  const DATA = window.CFI_REVISION_DATA;
  const LEGACY_STORAGE_KEY = "cfi-u10-u13-progress-v1";
  const STORAGE_KEY_PREFIX = "cfi-u10-u13-progress-v2";
  const PROFILES_KEY = "cfi-u10-u13-club-profiles-v1";
  const THEME_KEY = "cfi-u10-u13-theme";
  const app = document.querySelector("#app");
  const toast = document.querySelector("#toast");

  let profileStore = loadProfileStore();
  let activeProfile = currentProfile();
  let progress = loadProgress();
  let quizSession = null;
  let availableVoices = [];
  let audioQueue = null;

  function defaultProgress() {
    return {
      version: 1,
      startedAt: new Date().toISOString(),
      themes: {},
      missedQuestions: {},
      fullQuizAttempts: [],
      errorQuizAttempts: [],
      diagnosticAttempts: [],
      finalQuizAttempts: [],
      weakQuizAttempts: [],
      levelQuizAttempts: [],
      questionStats: {},
      lastRoute: null,
      activeQuiz: null,
      oralTraining: {},
      audioSettings: {
        voiceURI: "",
        rate: 0.92,
        pitch: 1
      }
    };
  }

  function makeId(prefix = "coach") {
    return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  }

  function progressKeyFor(profileId) {
    return `${STORAGE_KEY_PREFIX}:${profileId}`;
  }

  function newProfile(name = "Éducateur", club = "Club amateur", role = "U10-U13") {
    const now = new Date().toISOString();
    return {
      id: makeId(),
      name,
      club,
      role,
      createdAt: now,
      lastUsedAt: now
    };
  }

  function normalizeProfileStore(saved) {
    const profiles = Array.isArray(saved?.profiles) && saved.profiles.length
      ? saved.profiles.map((profile) => ({
          id: profile.id || makeId(),
          name: profile.name || "Éducateur",
          club: profile.club || "Club amateur",
          role: profile.role || "U10-U13",
          createdAt: profile.createdAt || new Date().toISOString(),
          lastUsedAt: profile.lastUsedAt || profile.createdAt || new Date().toISOString()
        }))
      : [newProfile()];

    const activeProfileId = profiles.some((profile) => profile.id === saved?.activeProfileId)
      ? saved.activeProfileId
      : profiles[0].id;

    return { version: 1, profiles, activeProfileId };
  }

  function loadProfileStore() {
    try {
      const saved = JSON.parse(localStorage.getItem(PROFILES_KEY));
      if (saved?.version === 1) {
        return normalizeProfileStore(saved);
      }
    } catch (error) {
      console.warn("Profils illisibles, création d'un profil local.", error);
    }

    const profile = newProfile();
    const store = { version: 1, profiles: [profile], activeProfileId: profile.id };
    try {
      const legacyProgress = localStorage.getItem(LEGACY_STORAGE_KEY);
      if (legacyProgress) {
        localStorage.setItem(progressKeyFor(profile.id), legacyProgress);
      }
      localStorage.setItem(PROFILES_KEY, JSON.stringify(store));
    } catch (error) {
      console.warn("Migration du profil non sauvegardée.", error);
    }
    return store;
  }

  function saveProfileStore() {
    try {
      localStorage.setItem(PROFILES_KEY, JSON.stringify(profileStore));
    } catch (error) {
      console.warn("Profils non sauvegardés.", error);
    }
  }

  function currentProfile() {
    let profile = profileStore.profiles.find((item) => item.id === profileStore.activeProfileId);
    if (!profile) {
      profile = profileStore.profiles[0] || newProfile();
      profileStore.profiles = [profile];
      profileStore.activeProfileId = profile.id;
      saveProfileStore();
    }
    return profile;
  }

  function loadProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(progressKeyFor(activeProfile.id)));
      if (saved && saved.version === 1 && saved.themes) {
        return normalizeProgress(saved);
      }
    } catch (error) {
      console.warn("Progression illisible, remise à zéro.", error);
    }
    return defaultProgress();
  }

  function normalizeProgress(saved) {
    const base = defaultProgress();
    return {
      ...base,
      ...saved,
      themes: saved.themes || {},
      missedQuestions: saved.missedQuestions || {},
      fullQuizAttempts: saved.fullQuizAttempts || [],
      errorQuizAttempts: saved.errorQuizAttempts || [],
      diagnosticAttempts: saved.diagnosticAttempts || [],
      finalQuizAttempts: saved.finalQuizAttempts || [],
      weakQuizAttempts: saved.weakQuizAttempts || [],
      levelQuizAttempts: saved.levelQuizAttempts || [],
      questionStats: saved.questionStats || {},
      lastRoute: saved.lastRoute || null,
      activeQuiz: saved.activeQuiz || null,
      oralTraining: saved.oralTraining || {},
      audioSettings: {
        voiceURI: saved.audioSettings?.voiceURI || "",
        rate: saved.audioSettings?.rate || 0.92,
        pitch: saved.audioSettings?.pitch || 1
      }
    };
  }

  function saveProgress() {
    try {
      activeProfile.lastUsedAt = new Date().toISOString();
      profileStore.activeProfileId = activeProfile.id;
      saveProfileStore();
      localStorage.setItem(progressKeyFor(activeProfile.id), JSON.stringify(progress));
    } catch (error) {
      console.warn("Progression non sauvegardée.", error);
    }
  }

  function switchProfile(profileId) {
    const nextProfile = profileStore.profiles.find((profile) => profile.id === profileId);
    if (!nextProfile || nextProfile.id === activeProfile.id) return;
    saveProgress();
    activeProfile = nextProfile;
    profileStore.activeProfileId = nextProfile.id;
    nextProfile.lastUsedAt = new Date().toISOString();
    saveProfileStore();
    progress = loadProgress();
    quizSession = null;
    window.speechSynthesis?.cancel();
    showToast(`Profil actif : ${activeProfile.name}`);
    setRoute("dashboard");
  }

  function createProfileFromForm() {
    const name = document.querySelector("[data-profile-name]")?.value.trim() || "Éducateur";
    const club = document.querySelector("[data-profile-club]")?.value.trim() || activeProfile.club || "Club amateur";
    const role = document.querySelector("[data-profile-role]")?.value.trim() || "U10-U13";
    const profile = newProfile(name, club, role);
    profileStore.profiles.push(profile);
    profileStore.activeProfileId = profile.id;
    saveProfileStore();
    activeProfile = profile;
    progress = defaultProgress();
    saveProgress();
    quizSession = null;
    showToast(`Profil créé : ${profile.name}`);
    setRoute("dashboard");
  }

  function storedTheme() {
    try {
      const savedTheme = localStorage.getItem(THEME_KEY);
      if (savedTheme === "dark" || savedTheme === "light") return savedTheme;
    } catch (error) {
      console.warn("Préférence de thème illisible.", error);
    }

    return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;

    const metaTheme = document.querySelector('meta[name="theme-color"]');
    metaTheme?.setAttribute("content", nextTheme === "dark" ? "#0f1718" : "#216869");

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      const dark = nextTheme === "dark";
      button.setAttribute("aria-pressed", String(dark));
      button.setAttribute("aria-label", dark ? "Activer le mode clair" : "Activer le mode sombre");
      button.title = dark ? "Activer le mode clair" : "Activer le mode sombre";
      const label = button.querySelector("[data-theme-label]");
      if (label) label.textContent = dark ? "Clair" : "Sombre";
    });
  }

  function toggleTheme() {
    const nextTheme = storedTheme() === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(THEME_KEY, nextTheme);
    } catch (error) {
      console.warn("Préférence de thème non sauvegardée.", error);
    }
    applyTheme(nextTheme);
    showToast(nextTheme === "dark" ? "Mode sombre activé." : "Mode clair activé.");
  }

  function themeState(themeId) {
    if (!progress.themes[themeId]) {
      progress.themes[themeId] = {
        read: false,
        oral: false,
        qcmAttempts: [],
        situations: {}
      };
    } else {
      progress.themes[themeId].qcmAttempts ||= [];
      progress.themes[themeId].situations ||= {};
    }
    return progress.themes[themeId];
  }

  function esc(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function pct(value) {
    return `${Math.round(value)}%`;
  }

  function list(items, className = "") {
    return `<ul class="${className}">${items.map((item) => `<li>${esc(item)}</li>`).join("")}</ul>`;
  }

  function byId(themeId) {
    return DATA.themes.find((theme) => theme.id === themeId) || DATA.themes[0];
  }

  function latestAttempt(themeId) {
    const attempts = themeState(themeId).qcmAttempts;
    return attempts.length ? attempts[attempts.length - 1] : null;
  }

  function bestAttempt(themeId) {
    const attempts = themeState(themeId).qcmAttempts;
    return attempts.reduce((best, attempt) => {
      if (!best) return attempt;
      return attempt.score / attempt.total > best.score / best.total ? attempt : best;
    }, null);
  }

  function scorePercent(attempt) {
    return attempt ? (attempt.score / attempt.total) * 100 : 0;
  }

  function revealedSituations(theme) {
    const state = themeState(theme.id);
    return theme.situations.filter((situation) => state.situations[situation.id]?.revealed).length;
  }

  function themeProgress(theme) {
    const state = themeState(theme.id);
    const best = bestAttempt(theme.id);
    const situationsDone = theme.situations.length
      ? revealedSituations(theme) / theme.situations.length
      : 0;
    const readPart = state.read ? 25 : 0;
    const oralPart = state.oral ? 10 : 0;
    const qcmPart = best ? Math.min(scorePercent(best), 100) * 0.45 : 0;
    const situationPart = situationsDone * 20;
    return Math.min(100, readPart + oralPart + qcmPart + situationPart);
  }

  function isThemeCompleted(theme) {
    const state = themeState(theme.id);
    const best = bestAttempt(theme.id);
    return (
      state.read &&
      best &&
      scorePercent(best) >= DATA.passScore &&
      revealedSituations(theme) === theme.situations.length
    );
  }

  function globalStats() {
    const completed = DATA.themes.filter(isThemeCompleted).length;
    const attempts = DATA.themes.map((theme) => latestAttempt(theme.id)).filter(Boolean);
    const average = attempts.length
      ? attempts.reduce((sum, attempt) => sum + scorePercent(attempt), 0) / attempts.length
      : null;
    const review = DATA.themes.filter((theme) => !isThemeCompleted(theme)).length;
    const globalProgress =
      DATA.themes.reduce((sum, theme) => sum + themeProgress(theme), 0) / DATA.themes.length;
    return { completed, average, review, globalProgress };
  }

  function allAttemptRecords() {
    const themeAttempts = DATA.themes.flatMap((theme) =>
      themeState(theme.id).qcmAttempts.map((attempt) => ({
        ...attempt,
        type: "theme",
        label: theme.shortTitle,
        themeId: theme.id
      }))
    );
    const fullAttempts = (progress.fullQuizAttempts || []).map((attempt) => ({
      ...attempt,
      type: "full",
      label: "QCM complet"
    }));
    const diagnosticAttempts = (progress.diagnosticAttempts || []).map((attempt) => ({
      ...attempt,
      type: "diagnostic",
      label: "Diagnostic initial"
    }));
    const finalAttempts = (progress.finalQuizAttempts || []).map((attempt) => ({
      ...attempt,
      type: "final",
      label: "QCM blanc final"
    }));
    const weakAttempts = (progress.weakQuizAttempts || []).map((attempt) => ({
      ...attempt,
      type: "weak",
      label: "Points faibles"
    }));
    const levelAttempts = (progress.levelQuizAttempts || []).map((attempt) => ({
      ...attempt,
      type: attempt.mode || "level",
      label:
        attempt.mode === "certification"
          ? "Quiz certification"
          : attempt.mode === "easy"
            ? "Quiz facile"
            : attempt.mode === "medium"
              ? "Quiz moyen"
              : attempt.mode === "hard"
                ? "Quiz difficile"
                : "Quiz par niveau"
    }));
    const errorAttempts = (progress.errorQuizAttempts || []).map((attempt) => ({
      ...attempt,
      type: "errors",
      label: "Questions ratées"
    }));

    return [...themeAttempts, ...fullAttempts, ...diagnosticAttempts, ...finalAttempts, ...weakAttempts, ...levelAttempts, ...errorAttempts].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }

  function averageAllAttempts() {
    const attempts = allAttemptRecords();
    if (!attempts.length) return null;
    return attempts.reduce((sum, attempt) => sum + scorePercent(attempt), 0) / attempts.length;
  }

  function lastSessionLabel() {
    const last = allAttemptRecords()[0];
    if (!last) return "Aucune session";
    const date = new Date(last.date);
    const dateText = Number.isNaN(date.getTime())
      ? ""
      : date.toLocaleDateString("fr-FR", { day: "2-digit", month: "2-digit" });
    return `${last.label} ${pct(scorePercent(last))}${dateText ? ` · ${dateText}` : ""}`;
  }

  function bestThemes(limit = 3) {
    return DATA.themes
      .map((theme) => ({ theme, score: bestAttempt(theme.id) ? scorePercent(bestAttempt(theme.id)) : null }))
      .filter((item) => item.score !== null)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  function weakThemes(limit = 5) {
    return DATA.themes
      .map((theme) => {
        const best = bestAttempt(theme.id);
        return {
          theme,
          score: best ? scorePercent(best) : null,
          progress: themeProgress(theme)
        };
      })
      .filter((item) => item.score === null || item.score < DATA.passScore || item.progress < 85)
      .sort((a, b) => {
        const aScore = a.score ?? -1;
        const bScore = b.score ?? -1;
        return aScore - bScore;
      })
      .slice(0, limit);
  }

  function masteryLevel(theme) {
    const best = bestAttempt(theme.id);
    const score = best ? scorePercent(best) : null;
    const value = themeProgress(theme);
    if (score !== null && score >= 85 && value >= 85) return "Prêt certification";
    if (score !== null && score >= DATA.passScore) return "Solide";
    if (value >= 35 || score !== null) return "En progrès";
    return "Débutant";
  }

  function estimatedRevisionTime() {
    const weakCount = weakThemes(DATA.themes.length).length;
    const unreadCount = DATA.themes.filter((theme) => !themeState(theme.id).read).length;
    const minutes = 20 + weakCount * 12 + unreadCount * 8 + missedQuestionItems().length * 2;
    if (minutes < 60) return `${minutes} min`;
    const hours = Math.floor(minutes / 60);
    const rest = minutes % 60;
    return rest ? `${hours}h${String(rest).padStart(2, "0")}` : `${hours}h`;
  }

  function encouragementMessage() {
    const stats = globalStats();
    if (stats.globalProgress >= 85) return "Très solide : garde le rythme et finis par un QCM blanc.";
    if (missedQuestionItems().length) return "Bon axe de travail : reprends les erreurs, elles te donnent le plan.";
    if (!latestDiagnosticAttempt()) return "Commence par un diagnostic court pour savoir où appuyer.";
    return "Avance par blocs courts : fiche, QCM, correction, puis une situation terrain.";
  }

  function questionDifficulty(question, questionIndex = 0) {
    if (question.difficulty) return question.difficulty;
    if (/situation|parent|moquer|discrimin|refuse|dispute|critique|monopolise|difficult/i.test(question.question)) {
      return "hard";
    }
    return questionIndex % 3 === 0 ? "easy" : questionIndex % 3 === 1 ? "medium" : "hard";
  }

  function withShuffledOptions(question) {
    const options = question.options.map((text, originalIndex) => ({ text, originalIndex }));
    const mixed = shuffled(options);
    const correctOriginalIndexes = Array.isArray(question.answerIndexes)
      ? question.answerIndexes
      : [question.answerIndex];
    const nextQuestion = {
      ...question,
      options: mixed.map((item) => item.text),
      difficulty: questionDifficulty(question)
    };
    const nextAnswerIndexes = mixed
      .map((item, index) => (correctOriginalIndexes.includes(item.originalIndex) ? index : null))
      .filter((index) => index !== null);

    if (Array.isArray(question.answerIndexes)) {
      nextQuestion.answerIndexes = nextAnswerIndexes.sort((a, b) => a - b);
      delete nextQuestion.answerIndex;
    } else {
      nextQuestion.answerIndex = nextAnswerIndexes[0];
      delete nextQuestion.answerIndexes;
    }

    return nextQuestion;
  }

  function createQuestionItem(theme, question, questionIndex) {
    return {
      id: `${theme.id}:${questionIndex}`,
      themeId: theme.id,
      themeTitle: theme.title,
      questionIndex,
      question: withShuffledOptions({ ...question, difficulty: questionDifficulty(question, questionIndex) })
    };
  }

  function allQuestionItems() {
    return DATA.themes.flatMap((theme) =>
      theme.quiz.map((question, questionIndex) => createQuestionItem(theme, question, questionIndex))
    );
  }

  function questionItemsForTheme(theme) {
    return theme.quiz.map((question, questionIndex) => createQuestionItem(theme, question, questionIndex));
  }

  function filterByDifficulty(items, mode) {
    if (mode === "easy") return items.filter((item) => item.question.difficulty === "easy");
    if (mode === "medium") return items.filter((item) => item.question.difficulty === "medium");
    if (mode === "hard") return items.filter((item) => item.question.difficulty === "hard");
    if (mode === "certification") {
      return items.filter((item) => item.question.difficulty !== "easy");
    }
    return items;
  }

  function allQuestionItemsLegacyShape() {
    return DATA.themes.flatMap((theme) =>
      theme.quiz.map((question, questionIndex) => ({
        id: `${theme.id}:${questionIndex}`,
        themeId: theme.id,
        themeTitle: theme.title,
        questionIndex,
        question
      }))
    );
  }

  function shuffled(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
  }

  function missedQuestionItems() {
    const missedIds = new Set(Object.keys(progress.missedQuestions || {}));
    return allQuestionItems().filter((item) => missedIds.has(item.id));
  }

  function balancedQuestionSample(limit) {
    const picked = [];
    const used = new Set();
    for (const theme of DATA.themes) {
      const item = shuffled(questionItemsForTheme(theme))[0];
      if (item && !used.has(item.id)) {
        picked.push(item);
        used.add(item.id);
      }
    }

    const rest = shuffled(allQuestionItems().filter((item) => !used.has(item.id)));
    return [...picked, ...rest].slice(0, limit);
  }

  function weakQuestionItems(limit = 24) {
    const weakIds = new Set(weakThemes(DATA.themes.length).map((item) => item.theme.id));
    const items = allQuestionItems().filter((item) => weakIds.has(item.themeId));
    return shuffled(items.length ? items : allQuestionItems()).slice(0, limit);
  }

  function diagnosticQuestionItems() {
    return balancedQuestionSample(18);
  }

  function finalExamQuestionItems() {
    return balancedQuestionSample(40);
  }

  function masteredQuestionCount() {
    return Object.values(progress.questionStats || {}).filter((item) => item.correctStreak >= 2).length;
  }

  function questionItemById(id) {
    return allQuestionItems().find((item) => item.id === id) || null;
  }

  function saveActiveQuiz(session) {
    progress.activeQuiz = {
      type: session.type,
      title: session.title,
      themeId: session.themeId,
      index: session.index,
      score: session.score,
      answers: session.answers,
      draftSelections: session.draftSelections || {},
      itemIds: session.items.map((item) => item.id),
      items: session.items
    };
    saveProgress();
  }

  function clearActiveQuiz() {
    progress.activeQuiz = null;
    saveProgress();
  }

  function restoreActiveQuiz(type, themeId = "") {
    const saved = progress.activeQuiz;
    if (!saved || saved.type !== type) return null;
    if (type === "theme" && saved.themeId !== themeId) return null;

    const items = Array.isArray(saved.items) && saved.items.length
      ? saved.items
      : (saved.itemIds || []).map(questionItemById).filter(Boolean);
    if (!items.length) return null;

    return {
      type: saved.type,
      title: saved.title,
      themeId: saved.themeId || "",
      index: Math.min(saved.index || 0, items.length - 1),
      score: saved.score || 0,
      answers: saved.answers || [],
      draftSelections: saved.draftSelections || {},
      items,
      finished: false
    };
  }

  function latestFullAttempt() {
    const attempts = progress.fullQuizAttempts || [];
    return attempts.length ? attempts[attempts.length - 1] : null;
  }

  function latestDiagnosticAttempt() {
    const attempts = progress.diagnosticAttempts || [];
    return attempts.length ? attempts[attempts.length - 1] : null;
  }

  function latestFinalAttempt() {
    const attempts = progress.finalQuizAttempts || [];
    return attempts.length ? attempts[attempts.length - 1] : null;
  }

  function nextRevisionTarget() {
    const unread = DATA.themes.find((theme) => !themeState(theme.id).read);
    if (unread) return { view: "theme", themeId: unread.id, mode: "fiche" };

    const withoutQcm = DATA.themes.find((theme) => !latestAttempt(theme.id));
    if (withoutQcm) return { view: "theme", themeId: withoutQcm.id, mode: "qcm" };

    const lowScore = DATA.themes.find((theme) => {
      const best = bestAttempt(theme.id);
      return !best || scorePercent(best) < DATA.passScore;
    });
    if (lowScore) return { view: "theme", themeId: lowScore.id, mode: "qcm" };

    const situations = DATA.themes.find(
      (theme) => revealedSituations(theme) < theme.situations.length
    );
    if (situations) return { view: "theme", themeId: situations.id, mode: "situations" };

    return { view: "free" };
  }

  function rememberRoute(route) {
    const resumableQuizzes = ["full", "errors", "diagnostic", "final", "weak", "certification", "easy", "medium", "hard"];
    const canResume =
      route.view === "theme" ||
      (route.view === "quiz" && resumableQuizzes.includes(route.themeId));
    if (!canResume) return;

    progress.lastRoute = {
      view: route.view,
      themeId: route.themeId,
      mode: route.mode || ""
    };
    saveProgress();
  }

  function continueProgress() {
    if (progress.lastRoute?.view === "theme" && progress.lastRoute.themeId) {
      setRoute("theme", progress.lastRoute.themeId, progress.lastRoute.mode || "fiche");
      return;
    }

    if (progress.lastRoute?.view === "quiz" && progress.lastRoute.themeId) {
      setRoute("quiz", progress.lastRoute.themeId);
      return;
    }

    const target = nextRevisionTarget();
    setRoute(target.view, target.themeId || "", target.mode || "");
  }

  function setRoute(view, themeId = "", mode = "") {
    const next = themeId ? `#${view}/${themeId}${mode ? `/${mode}` : ""}` : `#${view}`;
    if (location.hash === next) {
      render();
      return;
    }
    window.speechSynthesis?.cancel();
    location.hash = next;
  }

  function currentRoute() {
    const parts = (location.hash || "#home").slice(1).split("/");
    return {
      view: parts[0] || "home",
      themeId: parts[1] || "",
      mode: parts[2] || "fiche"
    };
  }

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("is-visible");
    const timeout = window.setTimeout || setTimeout;
    timeout(() => toast.classList.remove("is-visible"), 1800);
  }

  function updateNav() {
    const { view } = currentRoute();
    document.querySelectorAll(".main-nav button").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.route === view);
    });
    applyTheme(storedTheme());
  }

  function progressBar(value, label = "") {
    return `
      <div class="progress-line" aria-label="${esc(label || `Progression ${pct(value)}`)}">
        <span style="width:${Math.max(0, Math.min(100, value))}%"></span>
      </div>
    `;
  }

  function statCards() {
    const stats = globalStats();
    const attempts = allAttemptRecords();
    const average = averageAllAttempts();
    return `
      <section class="stats-grid" aria-label="Progression globale">
        <article class="stat-card">
          <span class="stat-label">Progression</span>
          <strong>${pct(stats.globalProgress)}</strong>
          ${progressBar(stats.globalProgress)}
        </article>
        <article class="stat-card">
          <span class="stat-label">QCM réalisés</span>
          <strong>${attempts.length}</strong>
          <small>Thèmes, complet et erreurs</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Score moyen QCM</span>
          <strong>${average === null ? "—" : pct(average)}</strong>
          <small>Moyenne de toutes les tentatives</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">À revoir</span>
          <strong>${stats.review}</strong>
          <small>Thèmes non terminés ou score insuffisant</small>
        </article>
      </section>
    `;
  }

  function officialProgramSections() {
    return Array.isArray(DATA.officialProgram) ? DATA.officialProgram : [];
  }

  function officialProgramItems() {
    return officialProgramSections().flatMap((section) =>
      (section.items || []).map((item) => ({ ...item, section: section.section }))
    );
  }

  function linkedThemes(item) {
    return (item.themeIds || [])
      .map((themeId) => DATA.themes.find((theme) => theme.id === themeId))
      .filter(Boolean);
  }

  function programItemProgress(item) {
    const themes = linkedThemes(item);
    if (!themes.length) return 0;
    return themes.reduce((sum, theme) => sum + themeProgress(theme), 0) / themes.length;
  }

  function programStatusClass(status = "") {
    const normalized = status.toLocaleLowerCase("fr-FR");
    if (normalized.includes("pas")) return "pending";
    if (normalized.includes("termin")) return "done";
    return "later";
  }

  function programStats() {
    const items = officialProgramItems();
    const linkedThemeIds = new Set(items.flatMap((item) => item.themeIds || []));
    const done = items.filter((item) => programStatusClass(item.foadStatus) === "done").length;
    const pending = items.filter((item) => programStatusClass(item.foadStatus) === "pending").length;
    const coverage = items.length
      ? items.reduce((sum, item) => sum + programItemProgress(item), 0) / items.length
      : 0;

    return {
      count: items.length,
      done,
      pending,
      linkedThemes: linkedThemeIds.size,
      coverage
    };
  }

  function programPriorityItems(limit = 4) {
    return officialProgramItems()
      .filter((item) => programStatusClass(item.foadStatus) !== "done")
      .sort((a, b) => programItemProgress(a) - programItemProgress(b))
      .slice(0, limit);
  }

  function renderProgramThemeLinks(item) {
    const themes = linkedThemes(item);
    if (!themes.length) {
      return `<p class="support-text">Aucun thème relié pour l'instant.</p>`;
    }

    return `
      <div class="program-theme-links">
        ${themes
          .map((theme) => {
            const best = bestAttempt(theme.id);
            return `
              <div class="program-theme-link">
                <button type="button" data-open-theme="${esc(theme.id)}">
                  <span>${esc(theme.shortTitle)}</span>
                  <small>${best ? `QCM ${pct(scorePercent(best))}` : "Fiche + QCM"}</small>
                </button>
                <button class="program-qcm-button" type="button" data-open-qcm="${esc(theme.id)}">QCM</button>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderProgramItem(item) {
    const value = programItemProgress(item);
    const statusClass = programStatusClass(item.foadStatus);
    return `
      <article class="program-item">
        <div class="program-item-head">
          <div>
            <span class="eyebrow">${esc(item.type)} · ${esc(item.section)}</span>
            <h3>${esc(item.title)}</h3>
          </div>
          <span class="program-status ${statusClass}">${esc(item.foadStatus)}</span>
        </div>
        <p>${esc(item.focus)}</p>
        ${progressBar(value, `Progression liée à ${item.title}`)}
        <div class="program-item-foot">
          <span>${pct(value)} sur les thèmes reliés</span>
          <span>${linkedThemes(item).length} thème${linkedThemes(item).length > 1 ? "s" : ""}</span>
        </div>
        ${renderProgramThemeLinks(item)}
      </article>
    `;
  }

  function renderProgram() {
    const sections = officialProgramSections();
    const stats = programStats();
    const priorities = programPriorityItems();

    app.innerHTML = `
      <section class="page-title program-hero">
        <span class="eyebrow">Programme CFI U10-U13</span>
        <h1>Ta carte de révision complète</h1>
        <p>Les modules de ton parcours FOAD sont reliés aux fiches, QCM, audios et situations de l'application. Utilise cette page pour savoir quoi travailler et dans quel thème le retrouver.</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-continue-progress>Continuer</button>
          <button class="btn secondary large" type="button" data-start-full-qcm>QCM complet</button>
          <button class="btn secondary large" type="button" data-route="audio">Écouter les résumés</button>
          <button class="btn ghost large" type="button" data-route="review">Thèmes à revoir</button>
        </div>
      </section>

      <section class="stats-grid" aria-label="Couverture du programme CFI">
        <article class="stat-card">
          <span class="stat-label">Modules listés</span>
          <strong>${stats.count}</strong>
          <small>e-learning, fichiers et questionnaire</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">FOAD terminés</span>
          <strong>${stats.done}</strong>
          <small>D'après les captures fournies</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">FOAD à finir</span>
          <strong>${stats.pending}</strong>
          <small>À croiser avec tes accès officiels</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Couverture révision</span>
          <strong>${pct(stats.coverage)}</strong>
          <small>${stats.linkedThemes} thèmes reliés</small>
        </article>
      </section>

      ${
        priorities.length
          ? `<section class="program-priority">
              <div class="section-head">
                <div>
                  <span class="eyebrow">Priorité simple</span>
                  <h2>À travailler en premier</h2>
                </div>
              </div>
              <div class="program-priority-list">
                ${priorities
                  .map(
                    (item) => `
                      <button type="button" data-open-theme="${esc(linkedThemes(item)[0]?.id || DATA.themes[0].id)}">
                        <span>${esc(item.title)}</span>
                        <small>${esc(item.foadStatus)} · révision ${pct(programItemProgress(item))}</small>
                      </button>
                    `
                  )
                  .join("")}
              </div>
            </section>`
          : ""
      }

      <section class="program-grid">
        ${sections
          .map(
            (section) => `
              <article class="program-section">
                <div class="section-head">
                  <div>
                    <span class="eyebrow">Bloc du parcours</span>
                    <h2>${esc(section.section)}</h2>
                  </div>
                </div>
                <div class="program-items">
                  ${(section.items || []).map(renderProgramItem).join("")}
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function themeList(items, emptyText) {
    if (!items.length) {
      return `<p class="support-text">${esc(emptyText)}</p>`;
    }

    return `
      <div class="dashboard-list">
        ${items
          .map(({ theme, score, progress: value }) => {
            const label = score === null ? "QCM non fait" : `Meilleur QCM ${pct(score)}`;
            return `
              <button type="button" data-open-theme="${esc(theme.id)}">
                <span>${esc(theme.shortTitle)}</span>
                <small>${label} · progression ${pct(value ?? themeProgress(theme))}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function renderClub() {
    const stats = globalStats();
    const attempts = allAttemptRecords();
    app.innerHTML = `
      <section class="page-title club-hero">
        <span class="eyebrow">Espace club</span>
        <h1>Plusieurs éducateurs, chacun sa progression</h1>
        <p>Chaque profil garde ses scores, ses erreurs, son diagnostic et son parcours. Pratique quand plusieurs éducateurs du club révisent sur le même ordinateur ou téléphone.</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-continue-progress>Continuer ${esc(activeProfile.name)}</button>
          <button class="btn secondary large" type="button" data-start-diagnostic>Diagnostic</button>
          <button class="btn ghost large" type="button" data-route="dashboard">Tableau de bord</button>
        </div>
      </section>

      <section class="club-grid">
        <article class="read-panel">
          <span class="eyebrow">Profil actif</span>
          <h2>${esc(activeProfile.name)}</h2>
          <div class="club-meta">
            <span>${esc(activeProfile.club)}</span>
            <span>${esc(activeProfile.role)}</span>
            <span>${attempts.length} QCM</span>
          </div>
          ${progressBar(stats.globalProgress, "Progression du profil actif")}
          <p>${esc(encouragementMessage())}</p>
        </article>

        <article class="read-panel">
          <span class="eyebrow">Changer d'éducateur</span>
          <h2>Profils du club</h2>
          <div class="profile-list">
            ${profileStore.profiles
              .map(
                (profile) => `
                  <button type="button" class="${profile.id === activeProfile.id ? "is-active" : ""}" data-switch-profile="${esc(profile.id)}">
                    <span>${esc(profile.name)}</span>
                    <small>${esc(profile.club)} · ${esc(profile.role)}</small>
                  </button>
                `
              )
              .join("")}
          </div>
        </article>

        <article class="read-panel">
          <span class="eyebrow">Nouveau profil</span>
          <h2>Ajouter un éducateur</h2>
          <div class="profile-form">
            <label>
              <span>Nom</span>
              <input type="text" data-profile-name placeholder="Ex : Karim">
            </label>
            <label>
              <span>Club</span>
              <input type="text" data-profile-club value="${esc(activeProfile.club)}">
            </label>
            <label>
              <span>Groupe</span>
              <input type="text" data-profile-role value="U10-U13">
            </label>
            <button class="btn primary large" type="button" data-create-profile>Créer le profil</button>
          </div>
        </article>

        <article class="read-panel warning">
          <span class="eyebrow">Repère commun</span>
          <h2>Répondre dans l'esprit FFF</h2>
          <p>Avant de choisir une réponse, cherche toujours : sécurité, plaisir, adaptation, respect, bienveillance, progression et apprentissage par le jeu.</p>
          ${list(["Sécuriser d'abord", "Faire jouer et inclure", "Observer avant de corriger", "Valoriser l'effort", "Refuser violence et discrimination"], "check-list")}
        </article>
      </section>
    `;
  }

  function renderDashboard() {
    const stats = globalStats();
    const attempts = allAttemptRecords();
    const average = averageAllAttempts();
    const best = bestThemes();
    const weak = weakThemes();
    const missedCount = missedQuestionItems().length;
    const diagnostic = latestDiagnosticAttempt();
    const final = latestFinalAttempt();

    app.innerHTML = `
      <section class="page-title dashboard-hero">
        <span class="eyebrow">Tableau de bord · ${esc(activeProfile.name)}</span>
        <h1>Où tu en es</h1>
        <p>${esc(encouragementMessage())}</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-continue-progress>Continuer</button>
          <button class="btn secondary large" type="button" data-start-diagnostic>Diagnostic</button>
          <button class="btn secondary large" type="button" data-start-weak-qcm>Points faibles</button>
          <button class="btn secondary large" type="button" data-start-final-qcm>QCM blanc</button>
          <button class="btn secondary large" type="button" data-start-errors>Revoir mes erreurs${missedCount ? ` (${missedCount})` : ""}</button>
          <button class="btn secondary large" type="button" data-route="program">Programme CFI</button>
          <button class="btn ghost large" type="button" data-reset-progress>Réinitialiser ma progression</button>
        </div>
      </section>

      <section class="stats-grid" aria-label="Indicateurs de révision">
        <article class="stat-card">
          <span class="stat-label">Progression globale</span>
          <strong>${pct(stats.globalProgress)}</strong>
          ${progressBar(stats.globalProgress)}
        </article>
        <article class="stat-card">
          <span class="stat-label">QCM réalisés</span>
          <strong>${attempts.length}</strong>
          <small>Dernière session : ${esc(lastSessionLabel())}</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Score moyen</span>
          <strong>${average === null ? "—" : pct(average)}</strong>
          <small>Sur toutes les tentatives</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Thèmes terminés</span>
          <strong>${stats.completed}/${DATA.themes.length}</strong>
          <small>Fiche, QCM et situations</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Questions maîtrisées</span>
          <strong>${masteredQuestionCount()}</strong>
          <small>Deux bonnes réponses de suite</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Temps conseillé</span>
          <strong>${esc(estimatedRevisionTime())}</strong>
          <small>Selon erreurs et thèmes faibles</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Diagnostic</span>
          <strong>${diagnostic ? pct(scorePercent(diagnostic)) : "À faire"}</strong>
          <small>${diagnostic ? "Dernier score" : "Point de départ conseillé"}</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">QCM blanc</span>
          <strong>${final ? pct(scorePercent(final)) : "À faire"}</strong>
          <small>${final ? "Dernier score final" : "Objectif 80% minimum"}</small>
        </article>
      </section>

      <section class="dashboard-grid">
        <article class="read-panel">
          <h2>Meilleurs thèmes</h2>
          ${themeList(best.map((item) => ({ ...item, progress: themeProgress(item.theme) })), "Aucun QCM terminé pour l'instant.")}
        </article>
        <article class="read-panel warning">
          <h2>Thèmes à revoir</h2>
          ${themeList(weak, "Aucun thème faible détecté.")}
        </article>
        <article class="read-panel">
          <h2>Badges de maîtrise</h2>
          ${list([
            `${stats.completed} thème${stats.completed > 1 ? "s" : ""} terminé${stats.completed > 1 ? "s" : ""}`,
            `${masteredQuestionCount()} question${masteredQuestionCount() > 1 ? "s" : ""} maîtrisée${masteredQuestionCount() > 1 ? "s" : ""}`,
            final && scorePercent(final) >= 80 ? "QCM blanc validé" : "QCM blanc à valider"
          ], "check-list")}
        </article>
        <article class="read-panel accent">
          <h2>Méthode FFF</h2>
          <p>Pour les QCM et l'oral : sécuriser, inclure, adapter, encourager, cadrer simplement, former avant de chercher le résultat.</p>
        </article>
      </section>
    `;
  }

  function renderHome() {
    const stats = globalStats();
    const nextTheme = DATA.themes.find((theme) => !isThemeCompleted(theme)) || DATA.themes[0];
    const missedCount = missedQuestionItems().length;
    const fullAttempt = latestFullAttempt();
    const diagnostic = latestDiagnosticAttempt();
    app.innerHTML = `
      <section class="hero-panel">
        <div>
          <span class="eyebrow">${esc(activeProfile.club)} · ${esc(activeProfile.name)}</span>
          <h1>${esc(DATA.title)}</h1>
          <p>${esc(DATA.intro)} Choisis un mode court si tu as peu de temps, ou lance un QCM complet pour te tester comme avant une certification.</p>
          <div class="hero-actions">
            <button class="btn primary large" type="button" data-start-diagnostic>
              ${diagnostic ? "Refaire le diagnostic" : "Faire le diagnostic"}
            </button>
            <button class="btn primary large" type="button" data-route="free">
              Réviser librement
            </button>
            <button class="btn secondary large" type="button" data-continue-progress>
              Continuer ma progression
            </button>
            <button class="btn secondary large" type="button" data-route="dashboard">
              Tableau de bord
            </button>
            <button class="btn secondary large" type="button" data-route="program">
              Programme CFI
            </button>
            <button class="btn ghost large" type="button" data-start-errors>
              Revoir mes erreurs
            </button>
            <button class="btn secondary large" type="button" data-route="plan">
              Mode intensif 3 jours
            </button>
          </div>
        </div>
        <div class="progress-dial" style="--value:${stats.globalProgress * 3.6}deg">
          <strong>${pct(stats.globalProgress)}</strong>
          <span>global</span>
        </div>
      </section>

      ${statCards()}

      <section class="section-head">
        <div>
          <span class="eyebrow">Accès rapide</span>
          <h2>Reprendre sans perdre de temps</h2>
        </div>
      </section>

      <div class="quick-grid">
        <button class="quick-action" type="button" data-continue-progress>
          <strong>Continuer ma progression</strong>
          <span>Reprendre le dernier écran utile ou le prochain thème</span>
        </button>
        <button class="quick-action" type="button" data-route="club">
          <strong>Espace club</strong>
          <span>Changer d'éducateur ou créer un profil</span>
        </button>
        <button class="quick-action" type="button" data-route="free">
          <strong>Réviser librement</strong>
          <span>Choisir un thème, une durée ou un mode</span>
        </button>
        <button class="quick-action" type="button" data-route="program">
          <strong>Programme CFI</strong>
          <span>Retrouver les modules FOAD et les thèmes à travailler</span>
        </button>
        <button class="quick-action" type="button" data-start-errors>
          <strong>Revoir mes erreurs</strong>
          <span>${missedCount ? `${missedCount} question${missedCount > 1 ? "s" : ""} à reprendre` : "Aucune erreur mémorisée pour l'instant"}</span>
        </button>
        <button class="quick-action" type="button" data-start-full-qcm>
          <strong>Faire un QCM complet</strong>
          <span>${fullAttempt ? `Dernier score ${pct(scorePercent(fullAttempt))}` : `${allQuestionItems().length} questions sur tous les thèmes`}</span>
        </button>
        <button class="quick-action" type="button" data-start-final-qcm>
          <strong>QCM blanc final</strong>
          <span>40 questions mélangées, objectif 80%</span>
        </button>
        <button class="quick-action" type="button" data-start-level="certification">
          <strong>Quiz certification</strong>
          <span>Majorité de questions moyennes et difficiles</span>
        </button>
        <button class="quick-action" type="button" data-start-weak-qcm>
          <strong>Mes points faibles</strong>
          <span>Questions ciblées sur les thèmes à revoir</span>
        </button>
        <button class="quick-action" type="button" data-route="audio">
          <strong>Révision audio rapide</strong>
          <span>Écouter les résumés sans rester devant l'écran</span>
        </button>
        <button class="quick-action" type="button" data-route="oral-training">
          <strong>Entraînement oral</strong>
          <span>Répondre à des situations terrain type certification</span>
        </button>
        <button class="quick-action" type="button" data-open-theme="${esc(nextTheme.id)}">
          <strong>${esc(nextTheme.shortTitle)}</strong>
          <span>Prochain thème à travailler</span>
        </button>
        <button class="quick-action" type="button" data-route="review">
          <strong>À revoir</strong>
          <span>Prioriser les scores faibles</span>
        </button>
      </div>
    `;
  }

  function themeCard(theme) {
    const best = bestAttempt(theme.id);
    const complete = isThemeCompleted(theme);
    const state = themeState(theme.id);
    const progressValue = themeProgress(theme);
    return `
      <article class="theme-card ${complete ? "is-complete" : ""}">
        <div class="theme-card-head">
          <span class="status-dot ${complete ? "done" : ""}" aria-hidden="true"></span>
          <span>${complete ? "Terminé" : masteryLevel(theme)}</span>
        </div>
        <h3>${esc(theme.title)}</h3>
        <p>${esc(theme.summary)}</p>
        ${progressBar(progressValue, `Progression ${theme.title}`)}
        <div class="card-meta">
          <span>${esc(theme.duration)}</span>
          <span>${best ? `Meilleur QCM ${pct(scorePercent(best))}` : "QCM non fait"}</span>
          <span>${state.read ? "Fiche lue" : "Fiche à lire"}</span>
        </div>
        <div class="card-actions">
          <button class="btn primary" type="button" data-open-theme="${esc(theme.id)}">Ouvrir</button>
          <button class="btn ghost" type="button" data-open-qcm="${esc(theme.id)}">QCM</button>
        </div>
      </article>
    `;
  }

  function renderThemes() {
    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Bibliothèque</span>
        <h1>Thèmes de révision</h1>
        <p>Chaque thème contient une fiche courte, un mode oral, un QCM et des situations terrain.</p>
      </section>
      ${statCards()}
      <section class="theme-grid">
        ${DATA.themes.map(themeCard).join("")}
      </section>
    `;
  }

  function renderFreeRevision() {
    const target = nextRevisionTarget();
    const nextTheme = target.themeId ? byId(target.themeId) : DATA.themes[0];
    const missedCount = missedQuestionItems().length;
    const fullAttempt = latestFullAttempt();

    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Mode libre</span>
        <h1>Révision libre</h1>
        <p>Révise quand tu veux, au rythme que tu veux : 10 minutes entre deux séances, 1 heure de travail ciblé ou une longue session avec QCM complet.</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-continue-progress>Continuer ma progression</button>
          <button class="btn secondary large" type="button" data-start-diagnostic>Diagnostic</button>
          <button class="btn secondary large" type="button" data-start-weak-qcm>Points faibles</button>
          <button class="btn secondary large" type="button" data-start-errors>Revoir mes erreurs</button>
          <button class="btn secondary large" type="button" data-start-final-qcm>QCM blanc final</button>
        </div>
      </section>

      <section class="free-grid" aria-label="Choisir un rythme de révision">
        <button class="free-card" type="button" data-open-theme="${esc(nextTheme.id)}">
          <strong>Session 10 minutes</strong>
          <span>Lire une fiche courte ou reprendre le prochain thème utile.</span>
        </button>
        <button class="free-card" type="button" data-route="themes">
          <strong>Session 1 heure</strong>
          <span>Choisir 2 ou 3 thèmes, puis refaire les QCM.</span>
        </button>
        <button class="free-card" type="button" data-start-full-qcm>
          <strong>Session 2h ou plus</strong>
          <span>Faire le QCM complet, traiter les erreurs et finir par l'oral.</span>
        </button>
        <button class="free-card" type="button" data-start-level="easy">
          <strong>Mode facile</strong>
          <span>Réviser les bases et remettre les repères en place.</span>
        </button>
        <button class="free-card" type="button" data-start-level="medium">
          <strong>Mode moyen</strong>
          <span>Questions de réflexion avec réponses proches.</span>
        </button>
        <button class="free-card" type="button" data-start-level="hard">
          <strong>Mode difficile</strong>
          <span>Cas terrain et choix vraiment éducatifs.</span>
        </button>
        <button class="free-card" type="button" data-start-level="certification">
          <strong>Quiz certification</strong>
          <span>30 à 40 questions, surtout niveau moyen et difficile.</span>
        </button>
        <button class="free-card" type="button" data-open-theme-mode="${esc(nextTheme.id)}" data-mode="oral">
          <strong>Écouter les fiches</strong>
          <span>Utiliser la synthèse vocale pour réviser en mode coach.</span>
        </button>
        <button class="free-card" type="button" data-route="audio">
          <strong>Audio rapide</strong>
          <span>Enchaîner les résumés naturels de tous les thèmes.</span>
        </button>
        <button class="free-card" type="button" data-route="oral-training">
          <strong>Oral terrain</strong>
          <span>S'entraîner à répondre à une mise en situation.</span>
        </button>
      </section>

      <section class="stats-grid" aria-label="Suivi du mode libre">
        <article class="stat-card">
          <span class="stat-label">Questions ratées</span>
          <strong>${missedCount}</strong>
          <small>${missedCount ? "À refaire jusqu'à correction" : "Aucune erreur active"}</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">QCM complet</span>
          <strong>${fullAttempt ? pct(scorePercent(fullAttempt)) : "—"}</strong>
          <small>${fullAttempt ? "Dernier score complet" : `${allQuestionItems().length} questions disponibles`}</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Prochain thème</span>
          <strong>${esc(nextTheme.shortTitle)}</strong>
          <small>Reprise automatique proposée</small>
        </article>
        <article class="stat-card">
          <span class="stat-label">Rythme</span>
          <strong>Libre</strong>
          <small>Aucune limite de durée ou de jours</small>
        </article>
      </section>

      <section class="section-head">
        <div>
          <span class="eyebrow">Choix libre</span>
          <h2>Tous les thèmes</h2>
        </div>
      </section>
      <section class="theme-grid">
        ${DATA.themes.map(themeCard).join("")}
      </section>
    `;
  }

  function allSituationItems() {
    return DATA.themes.flatMap((theme) =>
      theme.situations.map((situation) => ({
        ...situation,
        themeId: theme.id,
        themeTitle: theme.title
      }))
    );
  }

  function oralTrainingSituations() {
    const priorityIds = [
      "posture-s3",
      "parents-s3",
      "respect-s3",
      "climat-s3",
      "challenge-s3",
      "seance-s3"
    ];
    const all = allSituationItems();
    return priorityIds.map((id) => all.find((item) => item.id === id)).filter(Boolean);
  }

  function renderAudioQuick() {
    const settings = progress.audioSettings;
    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Audio</span>
        <h1>Révision audio rapide</h1>
        <p>Des résumés courts, naturels, à écouter thème par thème ou en parcours complet, avec une voix réglable.</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-speak-all>Écouter tout</button>
          <button class="btn secondary large" type="button" data-pause-speech>Pause</button>
          <button class="btn secondary large" type="button" data-resume-speech>Reprendre</button>
          <button class="btn secondary large" type="button" data-stop-speech>Stop</button>
          <button class="btn ghost large" type="button" data-route="free">Révision libre</button>
        </div>
      </section>

      <section class="audio-controls" aria-label="Réglages de lecture audio">
        <label>
          <span>Voix</span>
          <select data-audio-setting="voiceURI">
            ${voiceOptions(settings.voiceURI)}
          </select>
        </label>
        <label>
          <span>Vitesse <strong>${Number(settings.rate).toFixed(2)}</strong></span>
          <input type="range" min="0.75" max="1.15" step="0.01" value="${esc(settings.rate)}" data-audio-setting="rate">
        </label>
        <label>
          <span>Tonalité <strong>${Number(settings.pitch).toFixed(2)}</strong></span>
          <input type="range" min="0.85" max="1.15" step="0.01" value="${esc(settings.pitch)}" data-audio-setting="pitch">
        </label>
        <p>Astuce : choisis une voix française si elle est disponible, puis règle la vitesse autour de 0.90 pour mémoriser plus facilement.</p>
      </section>

      <section class="audio-grid">
        ${DATA.themes
          .map(
            (theme, index) => `
              <article class="audio-card">
                <div>
                  <span class="eyebrow">${esc(theme.shortTitle)}</span>
                  <h2>${esc(theme.title)}</h2>
                  <p>${esc(audioPreview(theme))}</p>
                </div>
                <div class="card-actions">
                  <button class="btn primary" type="button" data-speak="${esc(theme.id)}">Écouter</button>
                  <button class="btn secondary" type="button" data-speak-from="${index}">À partir d'ici</button>
                  <button class="btn ghost" type="button" data-open-theme-mode="${esc(theme.id)}" data-mode="oral">Ouvrir</button>
                </div>
              </article>
            `
          )
          .join("")}
      </section>
    `;
  }

  function renderOralTraining() {
    const situations = oralTrainingSituations();
    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Oral terrain</span>
        <h1>Entraînement oral</h1>
        <p>Réponds comme devant un formateur : sécuriser, comprendre, adapter, encourager, cadrer et faire progresser.</p>
      </section>
      <section class="situations-list">
        ${situations
          .map((situation, index) => {
            const revealed = progress.oralTraining?.[situation.id]?.revealed;
            return `
              <article class="situation-panel">
                <span class="eyebrow">Cas oral ${index + 1} · ${esc(situation.themeTitle)}</span>
                <h2>${esc(situation.title)}</h2>
                <p>${esc(situation.prompt)}</p>
                <label class="text-answer">
                  <span>Ta réponse</span>
                  <textarea rows="5" placeholder="Note tes idées ou réponds à voix haute avant d'afficher la réponse-type..."></textarea>
                </label>
                <div class="hero-actions">
                  <button class="btn primary" type="button" data-reveal-oral-situation="${esc(situation.id)}">
                    ${revealed ? "Réponse affichée" : "Afficher la réponse-type"}
                  </button>
                  <button class="btn ghost" type="button" data-speak-situation="${esc(situation.id)}">Écouter le cas</button>
                </div>
                ${
                  revealed
                    ? `<div class="correction">
                        <h3>Réponse-type attendue</h3>
                        ${list(situation.correction, "check-list")}
                        <p>${esc(situation.explanation)}</p>
                      </div>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </section>
    `;
  }

  function renderPlan() {
    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Révision intensive</span>
        <h1>Planning automatique sur 3 jours</h1>
        <p>Un parcours concentré pour réviser même avec une attention fluctuante : lire court, écouter, répondre, corriger.</p>
      </section>
      <section class="plan-grid">
        ${DATA.intensivePlan.map(renderPlanDay).join("")}
      </section>
    `;
  }

  function renderPlanDay(day) {
    const themes = day.themeIds.map(byId);
    const dayProgress =
      themes.reduce((sum, theme) => sum + themeProgress(theme), 0) / Math.max(1, themes.length);
    return `
      <article class="plan-day">
        <div class="plan-head">
          <span>Jour ${day.day}</span>
          <strong>${pct(dayProgress)}</strong>
        </div>
        <h2>${esc(day.title)}</h2>
        <p>${esc(day.objective)}</p>
        ${progressBar(dayProgress, `Progression jour ${day.day}`)}
        <div class="plan-focus">
          <strong>QCM</strong>
          <span>${esc(day.qcmTarget)}</span>
        </div>
        ${
          day.day === 1
            ? `<div class="plan-extra-actions">
                <button class="btn primary" type="button" data-start-diagnostic>Diagnostic</button>
                <button class="btn secondary" type="button" data-start-full-qcm>QCM général</button>
              </div>`
            : ""
        }
        ${
          day.day === 3
            ? `<div class="plan-extra-actions">
                <button class="btn primary" type="button" data-start-final-qcm>QCM blanc final</button>
                <button class="btn secondary" type="button" data-start-errors>Questions ratées</button>
                <button class="btn ghost" type="button" data-route="review">Mises en situation</button>
              </div>`
            : ""
        }
        <div class="plan-list">
          ${themes
            .map((theme) => {
              const best = bestAttempt(theme.id);
              return `
                <div class="plan-row">
                  <button type="button" data-open-theme="${esc(theme.id)}">
                    <span>${esc(theme.shortTitle)}</span>
                    <small>${isThemeCompleted(theme) ? "Terminé" : best ? `QCM ${pct(scorePercent(best))}` : "À lancer"}</small>
                  </button>
                  <button class="icon-button" type="button" data-open-qcm="${esc(theme.id)}" title="Lancer le QCM">
                    QCM
                  </button>
                </div>
              `;
            })
            .join("")}
        </div>
      </article>
    `;
  }

  function renderReview() {
    const missedCount = missedQuestionItems().length;
    const toReview = DATA.themes.filter((theme) => {
      const best = bestAttempt(theme.id);
      return !isThemeCompleted(theme) || !best || scorePercent(best) < DATA.passScore;
    });

    app.innerHTML = `
      <section class="page-title">
        <span class="eyebrow">Priorités</span>
        <h1>Thèmes à revoir</h1>
        <p>Reprends d'abord les thèmes sans QCM ou avec un score inférieur à ${DATA.passScore}%.</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-start-errors>
            Revoir mes erreurs${missedCount ? ` (${missedCount})` : ""}
          </button>
          <button class="btn secondary large" type="button" data-start-weak-qcm>Questions points faibles</button>
          <button class="btn secondary large" type="button" data-start-final-qcm>QCM blanc final</button>
        </div>
      </section>
      ${
        toReview.length
          ? `<section class="theme-grid">${toReview.map(themeCard).join("")}</section>`
          : `<section class="empty-state"><h2>Tout est solide</h2><p>Tous les thèmes sont terminés avec le score attendu.</p><button class="btn primary" type="button" data-route="themes">Revoir tous les thèmes</button></section>`
      }
    `;
  }

  function themeTabs(theme, mode) {
    const tabs = [
      ["fiche", "Fiche"],
      ["qcm", "QCM"],
      ["oral", "Oral"],
      ["situations", "Situations"]
    ];
    return `
      <div class="theme-tabs" role="tablist" aria-label="Modes du thème">
        ${tabs
          .map(
            ([id, label]) => `
              <button type="button" class="${mode === id ? "is-active" : ""}" data-theme-tab="${esc(id)}" data-theme-id="${esc(theme.id)}">
                ${label}
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderTheme(themeId, mode = "fiche") {
    const theme = byId(themeId);
    const state = themeState(theme.id);
    const best = bestAttempt(theme.id);
    const complete = isThemeCompleted(theme);
    app.innerHTML = `
      <section class="theme-hero">
        <button class="back-link" type="button" data-route="themes">← Tous les thèmes</button>
        <div class="theme-title-line">
          <div>
            <span class="eyebrow">${complete ? "Terminé" : "Révision"}</span>
            <h1>${esc(theme.title)}</h1>
            <p>${esc(theme.summary)}</p>
          </div>
          <div class="mini-score">
            <span>Progression</span>
            <strong>${pct(themeProgress(theme))}</strong>
          </div>
        </div>
        ${progressBar(themeProgress(theme), `Progression ${theme.title}`)}
        <div class="theme-meta-line">
          <span>${esc(theme.duration)}</span>
          <span>${state.read ? "Fiche lue" : "Fiche à lire"}</span>
          <span>${best ? `Meilleur QCM ${pct(scorePercent(best))}` : "QCM non fait"}</span>
          <span>${revealedSituations(theme)}/${theme.situations.length} situations corrigées</span>
        </div>
      </section>

      ${themeTabs(theme, mode)}
      ${renderThemeMode(theme, mode)}
    `;
  }

  function renderThemeMode(theme, mode) {
    if (mode === "qcm") return renderQuiz(theme);
    if (mode === "oral") return renderOral(theme);
    if (mode === "situations") return renderSituations(theme);
    return renderSheet(theme);
  }

  function renderSheet(theme) {
    const state = themeState(theme.id);
    return `
      <section class="study-layout">
        <article class="read-panel">
          <div class="panel-head">
            <span class="eyebrow">Fiche courte</span>
            <button class="btn ${state.read ? "success" : "primary"}" type="button" data-mark-read="${esc(theme.id)}">
              ${state.read ? "Fiche lue" : "Marquer comme lu"}
            </button>
          </div>
          ${theme.sheet.map((paragraph) => `<p>${esc(paragraph)}</p>`).join("")}
        </article>
        <article class="read-panel accent">
          <h2>Essentiels</h2>
          ${list(theme.essentials, "check-list")}
        </article>
        <article class="read-panel warning">
          <h2>Erreurs à éviter</h2>
          ${list(theme.mistakes, "avoid-list")}
        </article>
      </section>
    `;
  }

  function createQuizSession(type, title, items, themeId = "") {
    return {
      type,
      title,
      themeId,
      index: 0,
      score: 0,
      answers: [],
      draftSelections: {},
      items,
      finished: false
    };
  }

  function ensureQuiz(theme) {
    if (!quizSession || quizSession.type !== "theme" || quizSession.themeId !== theme.id) {
      const restored = restoreActiveQuiz("theme", theme.id);
      if (restored) {
        quizSession = restored;
        return quizSession;
      }

      const items = shuffled(questionItemsForTheme(theme));
      quizSession = createQuizSession("theme", `QCM - ${theme.title}`, items, theme.id);
      saveActiveQuiz(quizSession);
    }
    return quizSession;
  }

  function ensureGlobalQuiz(kind) {
    if (quizSession && quizSession.type === kind) return quizSession;

    const restored = restoreActiveQuiz(kind);
    if (restored) {
      quizSession = restored;
      return quizSession;
    }

    const items =
      kind === "errors"
        ? missedQuestionItems()
        : kind === "diagnostic"
          ? diagnosticQuestionItems()
          : kind === "final"
            ? finalExamQuestionItems()
            : kind === "weak"
              ? weakQuestionItems()
              : kind === "certification"
                ? shuffled(filterByDifficulty(allQuestionItems(), "certification")).slice(0, 40)
                : ["easy", "medium", "hard"].includes(kind)
                  ? shuffled(filterByDifficulty(allQuestionItems(), kind)).slice(0, 30)
              : shuffled(allQuestionItems());
    if (!items.length) return null;

    const titleByKind = {
      errors: "Questions ratées",
      diagnostic: "Diagnostic initial",
      final: "QCM blanc final",
      weak: "Réviser mes points faibles",
      certification: "Quiz certification",
      easy: "Quiz facile - bases",
      medium: "Quiz moyen - réflexion",
      hard: "Quiz difficile - cas terrain",
      full: "QCM complet type certification"
    };

    quizSession = createQuizSession(
      kind,
      titleByKind[kind] || "QCM complet type certification",
      items
    );
    saveActiveQuiz(quizSession);
    return quizSession;
  }

  function renderQuiz(theme) {
    return renderQuizSession(ensureQuiz(theme));
  }

  function renderGlobalQuiz(kind) {
    const session = ensureGlobalQuiz(kind);
    if (!session) {
      return `
        <section class="empty-state">
          <span class="eyebrow">QCM</span>
          <h1>${kind === "errors" ? "Aucune erreur à revoir" : "QCM indisponible"}</h1>
          <p>${kind === "errors" ? "Les questions ratées apparaîtront ici après tes prochains QCM." : "Aucune question n'est disponible dans les données."}</p>
          <div class="hero-actions">
            <button class="btn primary large" type="button" data-route="free">Réviser librement</button>
            <button class="btn secondary large" type="button" data-start-full-qcm>Faire un QCM complet</button>
          </div>
        </section>
      `;
    }
    return renderQuizSession(session);
  }

  function difficultyLabel(difficulty) {
    if (difficulty === "easy") return "Facile";
    if (difficulty === "medium") return "Moyen";
    if (difficulty === "hard") return "Difficile";
    return "Certification";
  }

  function renderCorrectionDetails(question, correctIndexes) {
    const correctOptions = correctIndexes.map((index) => question.options[index]).filter(Boolean);
    const keywords = question.keywords || ["sécurité", "adaptation", "bienveillance", "progression"];
    const principle =
      question.principle ||
      "Dans l'esprit FFF, la meilleure réponse protège le joueur, maintient l'activité, adapte la difficulté et installe un climat positif.";
    const whyOthers =
      question.whyOthers ||
      question.options
        .map((option, index) =>
          correctIndexes.includes(index)
            ? null
            : `${option} : réponse moins adaptée car elle oublie au moins un repère essentiel : sécurité, adaptation, respect ou progression.`
        )
        .filter(Boolean);

    return `
      <div class="correction-details">
        <p><strong>Meilleure réponse :</strong> ${esc(correctOptions.join(" / "))}</p>
        <p><strong>Pourquoi :</strong> ${esc(question.whyCorrect || question.explanation)}</p>
        <p><strong>Principe FFF :</strong> ${esc(principle)}</p>
        <div>
          <strong>Pourquoi les autres réponses sont moins adaptées</strong>
          ${list(whyOthers, "avoid-list")}
        </div>
        <p><strong>Mots-clés :</strong> ${esc(keywords.join(", "))}</p>
      </div>
    `;
  }

  function renderQuizSession(session) {
    if (session.finished) {
      return renderQuizSummary(session);
    }

    const item = session.items[session.index];
    const question = item.question;
    const answer = session.answers[session.index];
    const isMultiple = Array.isArray(question.answerIndexes);
    const correctIndexes = isMultiple ? question.answerIndexes : [question.answerIndex];
    const selectedIndexes = answer
      ? answer.selectedIndexes || [answer.selectedIndex]
      : session.draftSelections?.[session.index] || [];
    const locked = Boolean(answer);
    const total = session.items.length;
    return `
      <section class="quiz-panel">
        <span class="eyebrow">${esc(session.title)}</span>
        <div class="quiz-topline">
          <span>Question ${session.index + 1}/${total}</span>
          <strong>Score ${session.score}</strong>
        </div>
        ${progressBar((session.index / total) * 100, "Avancement du QCM")}
        <span class="question-theme">${esc(item.themeTitle)} · ${difficultyLabel(question.difficulty)}</span>
        <h2>${esc(question.question)}</h2>
        <div class="answers">
          ${question.options
            .map((option, index) => {
              const selected = selectedIndexes.includes(index);
              const isCorrect = locked && correctIndexes.includes(index);
              const isWrong = locked && selected && !correctIndexes.includes(index);
              return `
                <button
                  type="button"
                  class="answer ${selected && !locked ? "selected" : ""} ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""}"
                  data-answer="${index}"
                  aria-pressed="${selected ? "true" : "false"}"
                  ${locked ? "disabled" : ""}
                >
                  ${esc(option)}
                </button>
              `;
            })
            .join("")}
        </div>
        ${
          locked
            ? `<div class="feedback ${answer.correct ? "good" : "bad"}">
                <strong>${answer.correct ? "Bonne réponse" : "Réponse à corriger"}</strong>
                <p>${esc(question.explanation)}</p>
                ${renderCorrectionDetails(question, correctIndexes)}
              </div>
              <button class="btn primary large" type="button" data-next-question>
                ${session.index === total - 1 ? "Voir le résumé" : "Question suivante"}
              </button>`
            : `<button class="btn primary large" type="button" data-validate-answer ${selectedIndexes.length ? "" : "disabled"}>
                ${isMultiple ? "Valider mes réponses" : "Valider ma réponse"}
              </button>`
        }
      </section>
    `;
  }

  function sameIndexes(a, b) {
    if (a.length !== b.length) return false;
    const aSet = new Set(a);
    return b.every((value) => aSet.has(value));
  }

  function reviewThemesFromMissed(missed) {
    const grouped = new Map();
    for (const { item } of missed) {
      grouped.set(item.themeId, {
        themeId: item.themeId,
        title: item.themeTitle,
        count: (grouped.get(item.themeId)?.count || 0) + 1
      });
    }
    return [...grouped.values()].sort((a, b) => b.count - a.count);
  }

  function themeResultsFromSession(session) {
    const grouped = new Map();
    session.items.forEach((item, index) => {
      const answer = session.answers[index];
      const current = grouped.get(item.themeId) || {
        themeId: item.themeId,
        title: item.themeTitle,
        total: 0,
        score: 0
      };
      current.total += 1;
      if (answer?.correct) current.score += 1;
      grouped.set(item.themeId, current);
    });
    return [...grouped.values()].sort((a, b) => a.score / a.total - b.score / b.total);
  }

  function renderQuizSummary(session) {
    const total = session.items.length;
    const percent = (session.score / total) * 100;
    const missed = session.answers
      .map((answer, index) => ({ answer, item: session.items[index] }))
      .filter((item) => !item.answer.correct);
    const title =
      session.type === "full"
        ? "Résumé QCM complet"
        : session.type === "diagnostic"
          ? "Diagnostic terminé"
          : session.type === "final"
            ? "QCM blanc final terminé"
            : session.type === "weak"
              ? "Points faibles travaillés"
        : session.type === "errors"
          ? "Résumé des erreurs"
          : "Résumé QCM";
    const reviewThemes = reviewThemesFromMissed(missed);
    const themeResults = themeResultsFromSession(session);
    const readiness =
      percent >= 85
        ? "Prêt certification"
        : percent >= 80
          ? "Presque prêt"
          : "À revoir avant certification";

    return `
      <section class="quiz-panel summary">
        <span class="eyebrow">${esc(title)}</span>
        <h2>${session.score}/${total} - ${pct(percent)}</h2>
        <p>${session.type === "final" ? esc(readiness) : percent >= DATA.passScore ? "Objectif atteint. Tu peux passer à la suite." : "À revoir tranquillement : reprends la fiche puis relance le QCM."}</p>
        ${progressBar(percent, "Score du QCM")}
        ${
          missed.length
            ? `<div class="missed-list">
                <h3>Questions à reprendre</h3>
                ${missed
                  .map(
                    ({ item }) => `
                      <details>
                        <summary>${esc(item.question.question)}</summary>
                        <p><strong>${esc(item.themeTitle)}</strong></p>
                        <p>${esc(item.question.explanation)}</p>
                      </details>
                    `
                  )
                  .join("")}
              </div>`
            : `<div class="feedback good"><strong>Sans faute</strong><p>Tu as répondu correctement à toutes les questions de cette session.</p></div>`
        }
        ${
          ["full", "final", "diagnostic", "weak", "certification", "easy", "medium", "hard"].includes(session.type)
            ? `<div class="review-themes">
                <h3>Résultat par thème</h3>
                ${themeResults
                  .map(
                    (item) => `
                      <button type="button" data-open-theme="${esc(item.themeId)}">
                        <span>${esc(item.title)}</span>
                        <small>${item.score}/${item.total} · ${pct((item.score / item.total) * 100)}</small>
                      </button>
                    `
                  )
                  .join("")}
              </div>`
            : ""
        }
        ${
          reviewThemes.length
            ? `<div class="review-themes">
                <h3>Thèmes à revoir</h3>
                ${reviewThemes
                  .map(
                    (item) => `
                      <button type="button" data-open-theme="${esc(item.themeId)}">
                        <span>${esc(item.title)}</span>
                        <small>${item.count} erreur${item.count > 1 ? "s" : ""}</small>
                      </button>
                    `
                  )
                  .join("")}
              </div>`
            : ""
        }
        <div class="hero-actions">
          ${renderQuizSummaryActions(session)}
        </div>
      </section>
    `;
  }

  function renderQuizSummaryActions(session) {
    if (session.type === "theme") {
      return `
        <button class="btn primary large" type="button" data-restart-quiz="${esc(session.themeId)}">Recommencer</button>
        <button class="btn secondary large" type="button" data-theme-tab="situations" data-theme-id="${esc(session.themeId)}">Mises en situation</button>
        <button class="btn ghost large" type="button" data-start-errors>Revoir mes erreurs</button>
      `;
    }

    if (session.type === "errors") {
      return `
        <button class="btn primary large" type="button" data-start-errors>Revoir les erreurs restantes</button>
        <button class="btn secondary large" type="button" data-start-full-qcm>QCM complet</button>
        <button class="btn ghost large" type="button" data-route="free">Révision libre</button>
      `;
    }

    if (session.type === "diagnostic") {
      return `
        <button class="btn primary large" type="button" data-start-weak-qcm>Réviser mes points faibles</button>
        <button class="btn secondary large" type="button" data-route="plan">Programme 3 jours</button>
        <button class="btn ghost large" type="button" data-route="dashboard">Tableau de bord</button>
      `;
    }

    if (session.type === "final" || session.type === "weak") {
      return `
        <button class="btn primary large" type="button" data-start-final-qcm>QCM blanc final</button>
        <button class="btn secondary large" type="button" data-start-errors>Revoir mes erreurs</button>
        <button class="btn ghost large" type="button" data-route="dashboard">Tableau de bord</button>
      `;
    }

    return `
      <button class="btn primary large" type="button" data-start-full-qcm>Recommencer le QCM complet</button>
      <button class="btn secondary large" type="button" data-start-errors>Revoir mes erreurs</button>
      <button class="btn ghost large" type="button" data-route="free">Révision libre</button>
    `;
  }

  function finishQuiz(session) {
    const attempt = {
      score: session.score,
      total: session.items.length,
      date: new Date().toISOString(),
      missed: [],
      answers: session.answers.map((answer, index) => {
        const item = session.items[index];
        const stats = progress.questionStats[item.id] || {
          attempts: 0,
          correct: 0,
          correctStreak: 0,
          lastAnsweredAt: null
        };
        stats.attempts += 1;
        stats.lastAnsweredAt = new Date().toISOString();
        if (answer.correct) {
          stats.correct += 1;
          stats.correctStreak += 1;
        } else {
          stats.correctStreak = 0;
        }
        progress.questionStats[item.id] = stats;
        if (!answer.correct) {
          attemptMissed(session, item, answer);
        } else {
          delete progress.missedQuestions[item.id];
        }
        return {
          id: item.id,
          themeId: item.themeId,
          questionIndex: item.questionIndex,
          selectedIndex: answer.selectedIndex ?? null,
          selectedIndexes:
            answer.selectedIndexes || (answer.selectedIndex !== undefined ? [answer.selectedIndex] : []),
          correct: answer.correct
        };
      })
    };

    attempt.missed = attempt.answers.filter((answer) => !answer.correct).map((answer) => answer.id);

    if (session.type === "theme") {
      themeState(session.themeId).qcmAttempts.push(attempt);
    } else if (session.type === "full") {
      progress.fullQuizAttempts.push(attempt);
    } else if (session.type === "diagnostic") {
      progress.diagnosticAttempts.push(attempt);
    } else if (session.type === "final") {
      progress.finalQuizAttempts.push(attempt);
    } else if (session.type === "weak") {
      progress.weakQuizAttempts.push(attempt);
    } else if (["easy", "medium", "hard", "certification"].includes(session.type)) {
      progress.levelQuizAttempts.push({ ...attempt, mode: session.type });
    } else if (session.type === "errors") {
      progress.errorQuizAttempts.push(attempt);
    }

    saveProgress();
  }

  function attemptMissed(session, item, answer) {
    progress.missedQuestions[item.id] = {
      id: item.id,
      themeId: item.themeId,
      questionIndex: item.questionIndex,
      question: item.question.question,
      themeTitle: item.themeTitle,
      selectedIndex: answer.selectedIndex ?? null,
      selectedIndexes:
        answer.selectedIndexes || (answer.selectedIndex !== undefined ? [answer.selectedIndex] : []),
      source: session.type,
      missedAt: new Date().toISOString()
    };
  }

  function renderOral(theme) {
    const state = themeState(theme.id);
    const themeIndex = DATA.themes.findIndex((item) => item.id === theme.id);
    const nextTheme = DATA.themes[(themeIndex + 1) % DATA.themes.length];
    return `
      <section class="oral-panel">
        <div class="panel-head">
          <span class="eyebrow">Mode oral / écoute</span>
          <span class="pill">${state.oral ? "Écouté" : "À écouter"}</span>
        </div>
        <p class="oral-script">${esc(theme.oralScript)}</p>
        <div class="hero-actions">
          <button class="btn primary large" type="button" data-speak="${esc(theme.id)}">Lire le texte à voix haute</button>
          <button class="btn secondary large" type="button" data-stop-speech>Stop</button>
          <button class="btn ghost large" type="button" data-open-theme-mode="${esc(nextTheme.id)}" data-mode="oral">Thème suivant</button>
        </div>
        <p class="support-text">La lecture utilise la synthèse vocale du navigateur quand elle est disponible.</p>
      </section>
    `;
  }

  function renderSituations(theme) {
    const state = themeState(theme.id);
    return `
      <section class="situations-list">
        ${theme.situations
          .map((situation, index) => {
            const revealed = state.situations[situation.id]?.revealed;
            return `
              <article class="situation-panel">
                <span class="eyebrow">Situation ${index + 1}</span>
                <h2>${esc(situation.title)}</h2>
                <p>${esc(situation.prompt)}</p>
                <label class="text-answer">
                  <span>Ta réponse</span>
                  <textarea rows="5" placeholder="Écris ce que tu ferais sur le terrain..."></textarea>
                </label>
                <button class="btn primary" type="button" data-reveal-situation="${esc(theme.id)}" data-situation-id="${esc(situation.id)}">
                  ${revealed ? "Correction affichée" : "Voir la correction-type"}
                </button>
                ${
                  revealed
                    ? `<div class="correction">
                        <h3>Correction-type</h3>
                        ${list(situation.correction, "check-list")}
                        <p>${esc(situation.explanation)}</p>
                      </div>`
                    : ""
                }
              </article>
            `;
          })
          .join("")}
      </section>
    `;
  }

  function refreshVoices() {
    if (!("speechSynthesis" in window) || typeof window.speechSynthesis.getVoices !== "function") {
      availableVoices = [];
      return;
    }
    availableVoices = window.speechSynthesis.getVoices() || [];
  }

  function frenchVoices() {
    return availableVoices.filter((voice) => voice.lang?.toLowerCase().startsWith("fr"));
  }

  function selectedVoice() {
    refreshVoices();
    const settings = progress.audioSettings;
    return (
      availableVoices.find((voice) => voice.voiceURI === settings.voiceURI) ||
      frenchVoices()[0] ||
      availableVoices[0] ||
      null
    );
  }

  function voiceOptions(selectedURI) {
    refreshVoices();
    const voices = frenchVoices().length ? frenchVoices() : availableVoices;
    if (!voices.length) {
      return `<option value="">Voix automatique du navigateur</option>`;
    }

    return voices
      .map(
        (voice) =>
          `<option value="${esc(voice.voiceURI)}" ${voice.voiceURI === selectedURI ? "selected" : ""}>${esc(voice.name)} · ${esc(voice.lang)}</option>`
      )
      .join("");
  }

  function audioPreview(theme) {
    const firstSentence = theme.oralScript.split(".")[0] || theme.summary;
    return `${firstSentence}.`;
  }

  function prepareSpeechText(text) {
    return String(text)
      .replace(/U10-U13/g, "U dix, U treize")
      .replace(/U7-U9/g, "U sept, U neuf")
      .replace(/U9-U11-U13/g, "U neuf, U onze, U treize")
      .replace(/U13-U15-U19/g, "U treize, U quinze, U dix-neuf")
      .replace(/PEF/g, "P E F")
      .replace(/CFI/g, "C F I")
      .replace(/\s+/g, " ")
      .trim();
  }

  function audioScriptForTheme(theme, index) {
    const essentials = theme.essentials.slice(0, 4).join(". ");
    return [
      `Thème ${index + 1}. ${theme.title}.`,
      theme.oralScript,
      `À retenir : ${essentials}.`,
      "Respire, visualise une situation de terrain, puis passe au thème suivant."
    ].join(" ");
  }

  function speakText(text, onend) {
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      showToast("Synthèse vocale indisponible sur ce navigateur.");
      return false;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(prepareSpeechText(text));
    const voice = selectedVoice();
    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang || "fr-FR";
    } else {
      utterance.lang = "fr-FR";
    }
    utterance.rate = Number(progress.audioSettings.rate) || 0.92;
    utterance.pitch = Number(progress.audioSettings.pitch) || 1;
    utterance.onend = () => {
      onend?.();
    };
    window.speechSynthesis.speak(utterance);
    showToast("Lecture lancée.");
    return true;
  }

  function speakQueue(items, oncomplete) {
    if (!items.length) return false;
    if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
      showToast("Synthèse vocale indisponible sur ce navigateur.");
      return false;
    }

    window.speechSynthesis.cancel();
    audioQueue = { items, index: 0, oncomplete };

    const playNext = () => {
      if (!audioQueue || audioQueue.index >= audioQueue.items.length) {
        const done = audioQueue?.oncomplete;
        audioQueue = null;
        done?.();
        return;
      }

      const current = audioQueue.items[audioQueue.index];
      const utterance = new SpeechSynthesisUtterance(prepareSpeechText(current.text));
      const voice = selectedVoice();
      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang || "fr-FR";
      } else {
        utterance.lang = "fr-FR";
      }
      utterance.rate = Number(progress.audioSettings.rate) || 0.92;
      utterance.pitch = Number(progress.audioSettings.pitch) || 1;
      utterance.onend = () => {
        if (!audioQueue) return;
        current.onend?.();
        audioQueue.index += 1;
        playNext();
      };
      window.speechSynthesis.speak(utterance);
    };

    playNext();
    showToast("Lecture audio lancée.");
    return true;
  }

  function speakTheme(themeId) {
    const theme = byId(themeId);
    const index = DATA.themes.findIndex((item) => item.id === theme.id);
    const started = speakText(audioScriptForTheme(theme, index), () => {
      themeState(theme.id).oral = true;
      saveProgress();
      showToast("Mode oral validé.");
      render();
    });
    if (!started) return;
    themeState(theme.id).oral = true;
    saveProgress();
  }

  function speakAllThemes() {
    speakThemesFrom(0);
  }

  function speakThemesFrom(startIndex) {
    const items = DATA.themes.slice(startIndex).map((theme, offset) => {
      const index = startIndex + offset;
      return {
        text: audioScriptForTheme(theme, index),
        onend: () => {
          themeState(theme.id).oral = true;
          saveProgress();
        }
      };
    });

    speakQueue(items, () => {
      DATA.themes.forEach((theme) => {
        themeState(theme.id).oral = true;
      });
      saveProgress();
      showToast("Parcours audio terminé.");
      render();
    });
  }

  function speakSituation(situationId) {
    const situation = allSituationItems().find((item) => item.id === situationId);
    if (!situation) return;
    speakText(`${situation.title}. ${situation.prompt}. Réponds d'abord avec tes mots, puis affiche la réponse type.`);
  }

  function chooseRandomQcm() {
    const candidates = DATA.themes.filter((theme) => !isThemeCompleted(theme));
    const pool = candidates.length ? candidates : DATA.themes;
    const theme = pool[Math.floor(Math.random() * pool.length)];
    quizSession = null;
    setRoute("theme", theme.id, "qcm");
  }

  function startGlobalQuiz(kind) {
    quizSession = null;
    progress.activeQuiz = null;
    saveProgress();
    setRoute("quiz", kind);
  }

  function resetProgress() {
    const allowed =
      typeof window.confirm !== "function" ||
      window.confirm("Réinitialiser toute ta progression locale ?");
    if (!allowed) return;

    window.speechSynthesis?.cancel();
    quizSession = null;
    progress = defaultProgress();
    saveProgress();
    showToast("Progression réinitialisée.");
    setRoute("home");
  }

  function handleClick(event) {
    const target = event.target.closest("button");
    if (!target) return;

    if (target.dataset.themeToggle !== undefined) {
      toggleTheme();
      return;
    }

    if (target.dataset.route) {
      setRoute(target.dataset.route);
      return;
    }

    if (target.dataset.continueProgress !== undefined) {
      continueProgress();
      return;
    }

    if (target.dataset.createProfile !== undefined) {
      createProfileFromForm();
      return;
    }

    if (target.dataset.switchProfile) {
      switchProfile(target.dataset.switchProfile);
      return;
    }

    if (target.dataset.startDiagnostic !== undefined) {
      startGlobalQuiz("diagnostic");
      return;
    }

    if (target.dataset.startFinalQcm !== undefined) {
      startGlobalQuiz("final");
      return;
    }

    if (target.dataset.startWeakQcm !== undefined) {
      startGlobalQuiz("weak");
      return;
    }

    if (target.dataset.startLevel) {
      startGlobalQuiz(target.dataset.startLevel);
      return;
    }

    if (target.dataset.startFullQcm !== undefined) {
      startGlobalQuiz("full");
      return;
    }

    if (target.dataset.startErrors !== undefined) {
      startGlobalQuiz("errors");
      return;
    }

    if (target.dataset.resetProgress !== undefined) {
      resetProgress();
      return;
    }

    if (target.dataset.openTheme) {
      setRoute("theme", target.dataset.openTheme, "fiche");
      return;
    }

    if (target.dataset.openQcm) {
      quizSession = null;
      progress.activeQuiz = null;
      saveProgress();
      setRoute("theme", target.dataset.openQcm, "qcm");
      return;
    }

    if (target.dataset.openThemeMode) {
      setRoute("theme", target.dataset.openThemeMode, target.dataset.mode || "fiche");
      return;
    }

    if (target.dataset.themeTab) {
      if (target.dataset.themeTab !== "qcm") {
        quizSession = null;
      }
      setRoute("theme", target.dataset.themeId, target.dataset.themeTab);
      return;
    }

    if (target.dataset.markRead) {
      themeState(target.dataset.markRead).read = true;
      saveProgress();
      showToast("Fiche marquée comme lue.");
      render();
      return;
    }

    if (target.dataset.answer !== undefined) {
      const session = quizSession;
      if (!session) return;
      const index = Number(target.dataset.answer);
      const question = session.items[session.index].question;
      if (session.answers[session.index]) return;
      session.draftSelections ||= {};
      if (Array.isArray(question.answerIndexes)) {
        const current = new Set(session.draftSelections?.[session.index] || []);
        if (current.has(index)) {
          current.delete(index);
        } else {
          current.add(index);
        }
        session.draftSelections ||= {};
        session.draftSelections[session.index] = [...current].sort((a, b) => a - b);
        saveActiveQuiz(session);
        render();
        return;
      }
      session.draftSelections[session.index] = [index];
      saveActiveQuiz(session);
      render();
      return;
    }

    if (target.dataset.validateAnswer !== undefined || target.dataset.validateMulti !== undefined) {
      const session = quizSession;
      if (!session) return;
      const question = session.items[session.index].question;
      const selectedIndexes = session.draftSelections?.[session.index] || [];
      if (!selectedIndexes.length || session.answers[session.index]) return;
      const isMultiple = Array.isArray(question.answerIndexes);
      const correct = isMultiple
        ? sameIndexes(selectedIndexes, question.answerIndexes)
        : selectedIndexes[0] === question.answerIndex;
      session.answers[session.index] = isMultiple
        ? { selectedIndexes, correct }
        : { selectedIndex: selectedIndexes[0], selectedIndexes, correct };
      if (correct) session.score += 1;
      saveActiveQuiz(session);
      render();
      return;
    }

    if (target.dataset.nextQuestion !== undefined) {
      const session = quizSession;
      if (!session) return;
      if (session.index === session.items.length - 1) {
        session.finished = true;
        finishQuiz(session);
        clearActiveQuiz();
      } else {
        session.index += 1;
        saveActiveQuiz(session);
      }
      render();
      return;
    }

    if (target.dataset.restartQuiz) {
      quizSession = null;
      progress.activeQuiz = null;
      saveProgress();
      setRoute("theme", target.dataset.restartQuiz, "qcm");
      render();
      return;
    }

    if (target.dataset.speak) {
      speakTheme(target.dataset.speak);
      return;
    }

    if (target.dataset.speakAll !== undefined) {
      speakAllThemes();
      return;
    }

    if (target.dataset.speakFrom !== undefined) {
      speakThemesFrom(Number(target.dataset.speakFrom) || 0);
      return;
    }

    if (target.dataset.speakSituation) {
      speakSituation(target.dataset.speakSituation);
      return;
    }

    if (target.dataset.stopSpeech !== undefined) {
      audioQueue = null;
      window.speechSynthesis?.cancel();
      showToast("Lecture arrêtée.");
      return;
    }

    if (target.dataset.pauseSpeech !== undefined) {
      window.speechSynthesis?.pause();
      showToast("Lecture en pause.");
      return;
    }

    if (target.dataset.resumeSpeech !== undefined) {
      window.speechSynthesis?.resume();
      showToast("Lecture reprise.");
      return;
    }

    if (target.dataset.revealSituation) {
      const state = themeState(target.dataset.revealSituation);
      state.situations[target.dataset.situationId] = { revealed: true };
      saveProgress();
      showToast("Correction affichée.");
      render();
      return;
    }

    if (target.dataset.revealOralSituation) {
      progress.oralTraining[target.dataset.revealOralSituation] = { revealed: true };
      saveProgress();
      showToast("Réponse-type affichée.");
      render();
      return;
    }

    if (target.dataset.randomQcm !== undefined) {
      chooseRandomQcm();
    }
  }

  function handleAudioSetting(event) {
    const target = event.target;
    if (!target?.dataset?.audioSetting) return;

    const key = target.dataset.audioSetting;
    const value = key === "voiceURI" ? target.value : Number(target.value);
    progress.audioSettings[key] = value;
    saveProgress();

    if (event.type === "change" && currentRoute().view === "audio") {
      render();
    }
  }

  function render() {
    const route = currentRoute();
    updateNav();
    rememberRoute(route);

    if (route.view === "themes") {
      renderThemes();
    } else if (route.view === "club") {
      renderClub();
    } else if (route.view === "dashboard") {
      renderDashboard();
    } else if (route.view === "program") {
      renderProgram();
    } else if (route.view === "plan") {
      renderPlan();
    } else if (route.view === "free") {
      renderFreeRevision();
    } else if (route.view === "audio") {
      renderAudioQuick();
    } else if (route.view === "oral-training") {
      renderOralTraining();
    } else if (route.view === "review") {
      renderReview();
    } else if (route.view === "quiz") {
      app.innerHTML = renderGlobalQuiz(route.themeId || "full");
    } else if (route.view === "theme") {
      renderTheme(route.themeId, route.mode || "fiche");
    } else {
      renderHome();
    }

    app.focus({ preventScroll: true });
  }

  document.addEventListener("click", handleClick);
  document.addEventListener("change", handleAudioSetting);
  document.addEventListener("input", handleAudioSetting);
  window.addEventListener("hashchange", render);
  if (window.speechSynthesis) {
    refreshVoices();
    window.speechSynthesis.onvoiceschanged = () => {
      refreshVoices();
      if (currentRoute().view === "audio") render();
    };
  }

  if (!location.hash) {
    history.replaceState(null, "", "#home");
  }
  applyTheme(storedTheme());
  render();
})();
