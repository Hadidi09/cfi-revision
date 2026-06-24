# Révision CFI U10-U13

Application web statique pour aider des éducateurs à préparer la certification CFI U10-U13. Elle est pensée pour une révision simple sur ordinateur ou téléphone, avec fiches courtes, QCM, cas pratiques, audio, progression locale et retours testeurs.

## Objectif bêta

Cette version bêta doit pouvoir être partagée à plusieurs coachs ayant déjà validé le CFI U10-U13 afin de vérifier :

- la cohérence du contenu avec l’esprit de la formation ;
- le niveau des QCM ;
- l’utilité des corrections ;
- le réalisme des mises en situation ;
- la facilité d’utilisation sur mobile ;
- les améliorations à prévoir avant diffusion plus large.

## Fonctionnalités

- Parcours conseillé : accueil, test de niveau, thèmes faibles, QCM par thème, cas pratiques, QCM blanc final, résultat avec conseils.
- Mode libre : choix d’un thème, fiche, QCM, audio et situations.
- Mode intensif 3 jours : planning rapide de révision.
- Diagnostic initial : test court pour repérer les priorités.
- QCM par thème, QCM complet, QCM blanc final et questions par difficulté.
- Questions ratées sauvegardées automatiquement.
- Tableau de bord : progression, scores, thèmes forts/faibles, dernière session.
- Mode audio avec synthèse vocale du navigateur.
- Espace club avec profils locaux séparés.
- Mode sombre.
- Page `Comment utiliser l’application`.
- Page `Retour testeur` avec questionnaire, lien et message de partage copiable.

## Lancer en local

Option simple :

1. Ouvrir `index.html` dans un navigateur moderne.
2. La progression est sauvegardée automatiquement dans le `localStorage`.

Option serveur local :

```bash
cd outputs/cfi-u10-u13-revision
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Build

Le projet est une application statique en HTML, CSS et JavaScript vanilla.

Aucun build n’est nécessaire. Les fichiers à publier sont :

- `index.html`
- `styles.css`
- `app.js`
- `data.js`
- `vercel.json`

L’archive `cfi-u10-u13-revision-vercel.zip` contient la version prête à partager/déployer.

## Déploiement

### Vercel

Depuis le dossier `outputs/cfi-u10-u13-revision` :

```bash
npx vercel
npx vercel --prod
```

Le fichier `vercel.json` redirige toutes les routes vers `index.html`, ce qui permet d’utiliser les URLs avec `#home`, `#guide`, `#feedback`, etc.

### Netlify

Déposer le dossier `outputs/cfi-u10-u13-revision` dans Netlify Drop ou créer un site à partir de ce dossier.

Paramètres :

- build command : laisser vide ;
- publish directory : `outputs/cfi-u10-u13-revision` si le dépôt racine est utilisé, ou `.` si le dossier est déployé directement.

## Structure

- `index.html` : structure de base, navigation, chargement des scripts.
- `styles.css` : design responsive, mode sombre, mobile.
- `app.js` : navigation, QCM, progression, audio, retours testeurs.
- `data.js` : thèmes, fiches, QCM, corrections, cas pratiques, scripts audio.
- `vercel.json` : configuration de déploiement statique.
- `.vercelignore` : exclusions de fichiers locaux.

## Modifier les contenus

Tout le contenu pédagogique est dans `data.js`.

Pour ajouter une question dans un thème :

```js
{
  question: "Question posée à l’éducateur ?",
  options: [
    "Meilleure réponse",
    "Réponse proche mais moins adaptée",
    "Réponse incomplète",
    "Réponse à éviter"
  ],
  answerIndex: 0,
  explanation: "Correction courte.",
  difficulty: "medium",
  whyCorrect: "Pourquoi cette réponse est la plus adaptée.",
  whyOthers: "Pourquoi les autres options sont moins bonnes.",
  principle: "Principe FFF associé.",
  keywords: ["sécurité", "adaptation", "bienveillance"]
}
```

Pour ajouter une mise en situation :

```js
{
  id: "identifiant-unique",
  title: "Titre court",
  prompt: "Situation terrain...",
  correction: [
    "Action attendue 1",
    "Action attendue 2",
    "Action attendue 3"
  ],
  explanation: "Pourquoi cette réponse est pertinente."
}
```

Pour ajouter un thème, copier la structure d’un thème existant : `id`, `title`, `summary`, `sheet`, `essentials`, `mistakes`, `oralScript`, `quiz`, `situations`.

## Message de partage

Message court à envoyer aux coachs testeurs :

```text
Salut,

Je prépare une version bêta d’une application de révision pour le CFI U10-U13.
Peux-tu la tester comme un coach déjà certifié et me dire si le contenu, les QCM et les cas pratiques te semblent cohérents avec l’esprit de la formation ?

Lien : [ajouter le lien de l’application]

À regarder en priorité :
- le test de niveau ;
- un QCM par thème ;
- le mode questions ratées ;
- les cas pratiques ;
- le QCM blanc final ;
- la page Retour testeur.

Merci pour ton retour terrain.
```

Le même message est disponible dans l’application sur la page `Retour testeur`.

## Checklist bêta avant partage

- Application testée sur mobile.
- Application testée sur ordinateur.
- Quiz fonctionnels.
- Validation des réponses fonctionnelle.
- Bouton question suivante fonctionnel.
- Scores fonctionnels.
- Questions ratées sauvegardées.
- Mode audio fonctionnel.
- QCM blanc fonctionnel.
- Contenus relus.
- Page retour testeur disponible.
- README complet.

## Notes pédagogiques

Le contenu reste volontairement centré sur des principes généraux compatibles avec l’esprit FFF :

- sécurité ;
- plaisir ;
- progression ;
- respect ;
- bienveillance ;
- adaptation au niveau des enfants ;
- apprentissage par le jeu ;
- posture éducative positive ;
- lutte contre la violence et les discriminations.

Les règles précises de compétition, challenge ou critérium peuvent varier selon les districts et les saisons. Vérifier les documents transmis par le club ou l’instance locale avant d’ajouter une règle très spécifique.
