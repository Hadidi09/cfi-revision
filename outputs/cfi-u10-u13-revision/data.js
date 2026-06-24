window.CFI_REVISION_DATA = {
  version: "1.0.0",
  title: "Révision CFI U10-U13",
  passScore: 70,
  intro:
    "Un programme court pour revoir les principes essentiels : sécurité, plaisir, progression, respect, bienveillance, adaptation et apprentissage par le jeu.",
  intensivePlan: [
    {
      day: 1,
      title: "Jour 1 - Bases solides",
      objective:
        "Revoir les bases de la séance, la posture de l'éducateur et les réflexes de sécurité.",
      themeIds: [
        "seance-u10-u13",
        "posture-educateur",
        "securite"
      ],
      qcmTarget: "Lire les fiches, écouter les scripts courts et faire un QCM par thème."
    },
    {
      day: 2,
      title: "Jour 2 - Faire apprendre et engager",
      objective:
        "Travailler la pédagogie, le développement de l'enfant et le climat d'entraînement.",
      themeIds: [
        "pedagogie-apprentissage",
        "developpement-enfant",
        "climat-entrainement"
      ],
      qcmTarget: "Viser 70% minimum et traiter au moins une mise en situation par thème."
    },
    {
      day: 3,
      title: "Jour 3 - Validation et bilan",
      objective:
        "Faire un QCM complet, reprendre les mises en situation, revoir violence/discrimination et l'évaluation de son action.",
      themeIds: [
        "violence-discrimination-respect",
        "evaluation-action"
      ],
      qcmTarget: "Faire le QCM complet, puis revoir uniquement les questions ratées."
    }
  ],
  themes: [
    {
      id: "seance-u10-u13",
      title: "La séance U10-U13",
      shortTitle: "Séance",
      duration: "20 min",
      summary:
        "Préparer, animer et ajuster une séance adaptée à des enfants de 10 à 13 ans.",
      sheet: [
        "Une séance U10-U13 doit partir d'un objectif clair et observable : progresser dans un comportement de jeu, une intention collective ou une compétence technique utile au match.",
        "Le cadre doit rester simple : accueil, mise en route, situations avec ballon, temps de jeu, retour au calme ou bilan court. Les enfants doivent toucher souvent le ballon et comprendre rapidement ce qu'ils cherchent à réussir.",
        "L'éducateur observe, ajuste et fait vivre la séance. Si l'exercice est trop dur, il simplifie. S'il est trop facile, il complexifie. La réussite vient d'une bonne adaptation au niveau du groupe.",
        "Le plaisir, la sécurité et la progression sont les trois repères permanents. Une séance réussie n'est pas une séance compliquée : c'est une séance où les enfants jouent, répètent, osent et repartent avec un apprentissage."
      ],
      essentials: [
        "Prévoir un objectif simple et relié au jeu.",
        "Limiter les temps d'attente et multiplier les passages.",
        "Donner des consignes courtes, puis laisser jouer.",
        "Adapter l'espace, les règles, le nombre de joueurs ou le temps.",
        "Finir par un bilan positif et une idée clé à retenir."
      ],
      mistakes: [
        "Changer d'objectif toutes les cinq minutes.",
        "Faire de longues files d'attente.",
        "Parler trop longtemps avant de laisser agir.",
        "Chercher une séance spectaculaire au lieu d'une séance utile.",
        "Oublier de vérifier le terrain et le matériel."
      ],
      oralScript:
        "Pour une séance U10-U13, garde une idée simple : les enfants doivent jouer, comprendre et progresser. Tu pars d'un objectif clair, tu installes vite, tu expliques court, puis tu observes. Si ça bloque, tu simplifies. Si tout réussit trop vite, tu rajoutes une contrainte. Ton rôle n'est pas de tout contrôler, mais de créer les conditions pour que les enfants apprennent avec plaisir et en sécurité.",
      quiz: [
        {
          question: "Quel est le premier repère pour construire une séance ?",
          options: [
            "Définir un objectif clair et adapté au groupe",
            "Prévoir le plus d'exercices possible",
            "Faire exactement la séance d'une autre équipe",
            "Commencer par une longue explication tactique"
          ],
          answerIndex: 0,
          explanation:
            "Un objectif clair aide à choisir les situations, les consignes et les critères de réussite."
        },
        {
          question: "Si les enfants attendent trop longtemps leur tour, que faut-il faire ?",
          options: [
            "Réduire les files, créer plus de passages ou organiser plusieurs ateliers",
            "Demander aux enfants d'être plus patients",
            "Arrêter la séance",
            "Allonger les consignes pour occuper l'attente"
          ],
          answerIndex: 0,
          explanation:
            "À cet âge, l'activité doit être élevée. Plus de passages signifie plus d'apprentissages."
        },
        {
          question: "Une consigne efficace en U10-U13 est plutôt...",
          options: [
            "Courte, concrète et reliée à ce que l'enfant doit réussir",
            "Très détaillée pour couvrir tous les cas",
            "Donnée uniquement à la fin de la situation",
            "Identique quel que soit le niveau du groupe"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants retiennent mieux une consigne simple, liée à une action observable."
        },
        {
          question: "La situation est trop facile pour le groupe. Quelle adaptation est pertinente ?",
          options: [
            "Réduire l'espace, ajouter une contrainte ou augmenter l'opposition",
            "Crier plus fort les consignes",
            "Supprimer le ballon",
            "Arrêter définitivement l'objectif"
          ],
          answerIndex: 0,
          explanation:
            "Complexifier progressivement permet de garder du défi sans casser le plaisir."
        },
        {
          question: "Le bilan de fin de séance sert surtout à...",
          options: [
            "Faire verbaliser un apprentissage et valoriser les efforts",
            "Classer les enfants du meilleur au moins bon",
            "Reprendre toute la théorie de la séance",
            "Décider qui jouera le prochain match"
          ],
          answerIndex: 0,
          explanation:
            "Un bilan court ancre l'idée clé et termine la séance sur une note éducative."
        }
      ],
      situations: [
        {
          id: "seance-s1",
          title: "Exercice trop compliqué",
          prompt:
            "Tu proposes une situation de conservation, mais beaucoup d'enfants ne comprennent pas et perdent vite le ballon. Que fais-tu ?",
          correction: [
            "Arrêter brièvement et reformuler une seule consigne prioritaire.",
            "Agrandir l'espace ou réduire l'opposition.",
            "Montrer rapidement avec deux ou trois joueurs.",
            "Valoriser les réussites simples : se démarquer, lever la tête, aider le porteur.",
            "Relancer vite pour garder les enfants dans l'activité."
          ],
          explanation:
            "La bonne réponse consiste à adapter sans humilier. On protège le plaisir et on remet l'enfant en réussite."
        },
        {
          id: "seance-s2",
          title: "Trop d'attente",
          prompt:
            "Sur un atelier de conduite et tir, huit enfants attendent en colonne. L'intensité baisse. Comment réorganises-tu ?",
          correction: [
            "Créer deux ou trois départs simultanés.",
            "Réduire le temps entre deux passages.",
            "Donner un rôle utile aux enfants en attente : passeur, gardien, ramasseur actif.",
            "Utiliser plus de ballons si possible.",
            "Garder la sécurité des trajectoires comme priorité."
          ],
          explanation:
            "L'organisation doit favoriser l'activité réelle. Moins d'attente, plus de ballon, plus d'apprentissage."
        }
      ]
    },
    {
      id: "posture-educateur",
      title: "La posture de l'éducateur",
      shortTitle: "Posture",
      duration: "18 min",
      summary:
        "Adopter une attitude positive, cadrante et cohérente avec les valeurs éducatives.",
      sheet: [
        "La posture de l'éducateur donne le ton du groupe. En U10-U13, les enfants apprennent autant par ce qu'ils vivent que par ce qu'on leur dit.",
        "Une posture positive ne veut pas dire tout accepter. Elle combine bienveillance, exigence, clarté et respect. Le cadre est annoncé, répété et appliqué de manière stable.",
        "L'éducateur encourage, questionne, observe et corrige sans rabaisser. Il aide l'enfant à comprendre ce qu'il peut faire mieux, tout en protégeant sa confiance.",
        "L'exemplarité compte : ponctualité, langage, tenue, respect des arbitres, des adversaires, des parents et des collègues. Le groupe regarde l'éducateur avant d'écouter ses discours."
      ],
      essentials: [
        "Être calme, clair et constant.",
        "Encourager les efforts et les progrès.",
        "Corriger un comportement sans attaquer la personne.",
        "Utiliser le questionnement pour faire réfléchir.",
        "Montrer l'exemple dans les mots et les attitudes."
      ],
      mistakes: [
        "Humilier un enfant après une erreur.",
        "Changer de cadre selon l'humeur du jour.",
        "Confondre autorité et cris.",
        "Ne parler qu'aux joueurs les plus performants.",
        "Critiquer l'arbitre ou l'adversaire devant le groupe."
      ],
      oralScript:
        "Ta posture, c'est le climat que tu installes. Tu peux être exigeant sans être dur. Tu peux cadrer sans rabaisser. En U10-U13, l'enfant a besoin de comprendre, d'essayer, de se tromper et de recommencer. Ta voix, tes mots et ton attitude doivent lui donner envie de continuer, même quand c'est difficile.",
      quiz: [
        {
          question: "Un enfant rate plusieurs fois le même geste. Quelle réaction est la plus éducative ?",
          options: [
            "L'encourager, donner un repère simple et le remettre en action",
            "Le sortir pour qu'il comprenne",
            "Le comparer au meilleur joueur",
            "Ignorer la difficulté"
          ],
          answerIndex: 0,
          explanation:
            "L'enfant progresse mieux quand il reçoit un repère concret et reste impliqué."
        },
        {
          question: "Une posture positive signifie...",
          options: [
            "Être bienveillant tout en gardant un cadre clair",
            "Laisser tout faire pour préserver le plaisir",
            "Ne jamais corriger",
            "Être ami avec tous les joueurs"
          ],
          answerIndex: 0,
          explanation:
            "La bienveillance et l'exigence vont ensemble : l'enfant se sent sécurisé et guidé."
        },
        {
          question: "Quand un comportement déborde, l'éducateur doit d'abord...",
          options: [
            "Rappeler calmement la règle et l'effet attendu",
            "Sanctionner sans explication",
            "Répondre sur le même ton",
            "Faire comme si rien ne se passait"
          ],
          answerIndex: 0,
          explanation:
            "Le rappel du cadre permet de traiter le comportement sans escalade."
        },
        {
          question: "Quel outil aide l'enfant à réfléchir à son action ?",
          options: [
            "Une question courte : qu'as-tu vu, que peux-tu faire ?",
            "Une consigne de cinq minutes",
            "Une critique générale",
            "Une remarque ironique"
          ],
          answerIndex: 0,
          explanation:
            "Le questionnement favorise l'autonomie et la compréhension du jeu."
        },
        {
          question: "L'exemplarité de l'éducateur se voit notamment dans...",
          options: [
            "Son langage, son respect et sa cohérence",
            "Sa capacité à gagner tous les matchs",
            "Le nombre d'exercices originaux",
            "Sa sévérité permanente"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants apprennent les attitudes attendues en observant l'adulte référent."
        }
      ],
      situations: [
        {
          id: "posture-s1",
          title: "Joueur qui conteste",
          prompt:
            "Un joueur conteste une décision pendant un jeu et influence les autres. Comment interviens-tu ?",
          correction: [
            "Stopper brièvement si le climat se dégrade.",
            "Rappeler la règle de respect et le droit à l'erreur.",
            "Demander une attitude attendue : lever la main, parler calmement, reprendre le jeu.",
            "Sanctionner seulement si le comportement persiste, de façon proportionnée.",
            "Reprendre ensuite positivement dès que le joueur se remet dans le cadre."
          ],
          explanation:
            "La réponse doit protéger le cadre sans installer un rapport de force inutile."
        },
        {
          id: "posture-s2",
          title: "Enfant découragé",
          prompt:
            "Une joueuse se met à l'écart après plusieurs erreurs. Que fais-tu ?",
          correction: [
            "Aller vers elle calmement et reconnaître sa difficulté.",
            "Donner un objectif très simple et atteignable.",
            "La replacer dans une situation où elle peut réussir.",
            "Valoriser l'effort et pas seulement le résultat.",
            "Éviter les remarques devant tout le groupe."
          ],
          explanation:
            "La priorité est de garder l'enfant dans l'activité et de restaurer la confiance."
        }
      ]
    },
    {
      id: "pedagogie-apprentissage",
      title: "La pédagogie et la démarche d'apprentissage",
      shortTitle: "Pédagogie",
      duration: "22 min",
      summary:
        "Faire apprendre par le jeu, l'observation, la répétition et l'ajustement.",
      sheet: [
        "La pédagogie en U10-U13 doit aider l'enfant à comprendre le jeu en jouant. L'éducateur crée des situations où l'enfant doit percevoir, décider et agir.",
        "Une démarche efficace alterne action, observation, questionnement et relance. Le temps de parole doit rester utile et proportionné.",
        "La répétition est nécessaire, mais elle doit garder du sens. Répéter un geste isolé trop longtemps peut démotiver ; répéter une intention dans des jeux variés aide à transférer vers le match.",
        "Les critères de réussite doivent être visibles : réussir une passe vers l'avant, se rendre disponible, protéger son but, communiquer. Cela permet à l'enfant de savoir ce qu'il vise."
      ],
      essentials: [
        "Partir du jeu et d'un problème simple à résoudre.",
        "Observer avant de corriger.",
        "Questionner pour faire verbaliser.",
        "Proposer des critères de réussite concrets.",
        "Différencier si les niveaux sont hétérogènes."
      ],
      mistakes: [
        "Faire apprendre uniquement par des discours.",
        "Corriger tout le monde en même temps sur tout.",
        "Donner des critères flous comme jouer mieux.",
        "Oublier les enfants en difficulté.",
        "Refuser d'adapter une situation qui ne fonctionne pas."
      ],
      oralScript:
        "Pour faire apprendre, pars du jeu. Mets les enfants devant un problème simple : comment conserver, progresser, récupérer ou finir ? Ensuite tu observes. Tu poses une question, tu donnes un repère, puis tu relances. L'apprentissage se construit par l'action, la répétition et l'ajustement, pas par un grand discours.",
      quiz: [
        {
          question: "Une bonne démarche d'apprentissage commence souvent par...",
          options: [
            "Une situation de jeu qui pose un problème à résoudre",
            "Une leçon théorique longue",
            "Un classement des joueurs",
            "Une opposition sans objectif"
          ],
          answerIndex: 0,
          explanation:
            "Le jeu donne du sens aux apprentissages et motive les enfants."
        },
        {
          question: "Pourquoi utiliser des critères de réussite ?",
          options: [
            "Pour rendre l'objectif concret et observable",
            "Pour compliquer la séance",
            "Pour éviter d'observer",
            "Pour remplacer les encouragements"
          ],
          answerIndex: 0,
          explanation:
            "Un critère observable aide l'enfant à savoir ce qu'il doit réussir."
        },
        {
          question: "Face à un groupe très hétérogène, il est utile de...",
          options: [
            "Proposer des variantes de difficulté",
            "Garder une seule difficulté pour tous à tout prix",
            "Séparer définitivement les moins forts",
            "Supprimer le jeu"
          ],
          answerIndex: 0,
          explanation:
            "Différencier permet à chacun de travailler dans une zone de progrès."
        },
        {
          question: "Le questionnement sert principalement à...",
          options: [
            "Faire réfléchir l'enfant sur ses choix",
            "Le piéger devant les autres",
            "Gagner du temps",
            "Remplacer toute pratique"
          ],
          answerIndex: 0,
          explanation:
            "Une question courte aide l'enfant à comprendre et à devenir plus autonome."
        },
        {
          question: "Une correction efficace doit être...",
          options: [
            "Ciblée, simple et suivie d'une remise en action",
            "Longue et exhaustive",
            "Réservée aux meilleurs joueurs",
            "Toujours donnée sur un ton sévère"
          ],
          answerIndex: 0,
          explanation:
            "L'enfant apprend mieux quand il peut rapidement essayer le repère donné."
        }
      ],
      situations: [
        {
          id: "pedagogie-s1",
          title: "Le groupe ne comprend pas",
          prompt:
            "Après deux minutes, les joueurs ne comprennent toujours pas la situation. Quelle démarche adoptes-tu ?",
          correction: [
            "Stopper calmement et revenir à une consigne prioritaire.",
            "Faire une démonstration courte.",
            "Vérifier la compréhension avec une question simple.",
            "Relancer avec moins de contraintes.",
            "Observer avant d'ajouter un nouveau repère."
          ],
          explanation:
            "On simplifie le problème pour remettre le groupe en action et reconstruire progressivement."
        },
        {
          id: "pedagogie-s2",
          title: "Deux niveaux dans le même atelier",
          prompt:
            "Trois enfants réussissent très facilement pendant que quatre sont en grande difficulté. Comment adaptes-tu ?",
          correction: [
            "Prévoir deux niveaux de contrainte.",
            "Ajuster l'espace ou l'opposition selon les besoins.",
            "Donner un défi supplémentaire aux plus avancés.",
            "Proposer un repère très simple aux enfants en difficulté.",
            "Garder un objectif commun pour le groupe."
          ],
          explanation:
            "La différenciation évite l'ennui des uns et le découragement des autres."
        }
      ]
    },
    {
      id: "developpement-enfant",
      title: "Le développement de l'enfant",
      shortTitle: "Développement",
      duration: "18 min",
      summary:
        "Tenir compte de la croissance, de la maturité et des différences entre enfants.",
      sheet: [
        "En U10-U13, les enfants n'avancent pas tous au même rythme. Deux joueurs du même âge civil peuvent avoir des différences importantes de taille, de force, de coordination, de confiance et de maturité.",
        "La croissance peut influencer la motricité, la fatigue, la concentration et l'image de soi. Certains enfants paraissent très à l'aise, d'autres traversent une période de maladresse.",
        "L'éducateur doit adapter ses attentes. Il ne réduit pas l'enfant à son gabarit ou à son niveau du moment. Il valorise les progrès, l'engagement, les choix et la coopération.",
        "Le football doit rester un espace d'apprentissage progressif. On évite de spécialiser trop tôt, de surcharger physiquement ou de comparer brutalement les enfants."
      ],
      essentials: [
        "Distinguer âge civil, maturité et niveau de pratique.",
        "Adapter les charges et les contraintes.",
        "Valoriser les progrès individuels.",
        "Respecter les différences de rythme.",
        "Rester attentif à la fatigue et à la confiance."
      ],
      mistakes: [
        "Confondre grand gabarit et maturité complète.",
        "Exiger la même réponse de tous les enfants.",
        "Comparer publiquement les niveaux.",
        "Surcharger physiquement un enfant fatigué.",
        "Étiqueter trop tôt un joueur comme faible ou fort."
      ],
      oralScript:
        "Entre 10 et 13 ans, les différences sont normales. Un enfant peut grandir vite, perdre un peu de coordination, manquer de confiance ou au contraire être en avance physiquement. Ton rôle est d'adapter, pas de coller une étiquette. Tu regardes le progrès, l'effort, la compréhension du jeu et la capacité à rester engagé.",
      quiz: [
        {
          question: "Deux enfants du même âge civil peuvent...",
          options: [
            "Avoir des niveaux de maturité et de développement très différents",
            "Avoir forcément les mêmes capacités physiques",
            "Recevoir exactement les mêmes charges sans adaptation",
            "Être comparés publiquement pour progresser"
          ],
          answerIndex: 0,
          explanation:
            "La maturité biologique, motrice et affective varie fortement à ces âges."
        },
        {
          question: "Un enfant en pic de croissance peut parfois...",
          options: [
            "Être plus fatigué ou moins coordonné temporairement",
            "Ne plus avoir besoin de consignes",
            "Être obligé de jouer plus longtemps",
            "Devenir automatiquement plus performant techniquement"
          ],
          answerIndex: 0,
          explanation:
            "La croissance peut perturber les repères corporels et demander de l'adaptation."
        },
        {
          question: "Quel indicateur est éducativement intéressant à valoriser ?",
          options: [
            "Le progrès par rapport à soi-même",
            "Uniquement la taille",
            "Uniquement le résultat du match",
            "Le classement social dans le groupe"
          ],
          answerIndex: 0,
          explanation:
            "Valoriser le progrès soutient la motivation et la confiance."
        },
        {
          question: "Face à une différence de niveau importante, l'éducateur doit...",
          options: [
            "Adapter les contraintes et les attentes",
            "Donner la même difficulté sans observation",
            "Mettre de côté les enfants en retard",
            "Arrêter l'apprentissage collectif"
          ],
          answerIndex: 0,
          explanation:
            "L'adaptation permet de garder chaque enfant dans une situation de progrès."
        },
        {
          question: "La spécialisation trop précoce peut poser problème car...",
          options: [
            "Elle limite la variété motrice et le plaisir de découvrir",
            "Elle garantit la réussite future",
            "Elle rend les séances plus simples pour tous",
            "Elle supprime le besoin d'éducation"
          ],
          answerIndex: 0,
          explanation:
            "La formation doit rester ouverte, variée et adaptée au développement global."
        }
      ],
      situations: [
        {
          id: "developpement-s1",
          title: "Différence de gabarit",
          prompt:
            "Un joueur très grand domine physiquement les oppositions. Les autres n'osent plus aller au duel. Que fais-tu ?",
          correction: [
            "Modifier les règles pour valoriser la mobilité, l'appui ou la passe.",
            "Proposer des oppositions équilibrées selon l'objectif.",
            "Donner au joueur dominant un défi technique ou collectif.",
            "Encourager les autres à trouver des solutions de jeu.",
            "Éviter de stigmatiser le joueur physiquement en avance."
          ],
          explanation:
            "L'objectif est de former tout le groupe, pas de laisser un avantage physique écraser l'apprentissage."
        },
        {
          id: "developpement-s2",
          title: "Enfant en perte de confiance",
          prompt:
            "Une joueuse habituellement à l'aise devient maladroite et se décourage. Quelle attitude adoptes-tu ?",
          correction: [
            "Rassurer sur le caractère temporaire des périodes difficiles.",
            "Réduire la difficulté pour retrouver des réussites.",
            "Valoriser l'engagement et les bons choix.",
            "Éviter les comparaisons avec son ancien niveau.",
            "Échanger calmement si la baisse de confiance dure."
          ],
          explanation:
            "L'enfant a besoin d'un cadre sécurisant pour traverser les variations de développement."
        }
      ]
    },
    {
      id: "securite",
      title: "La sécurité",
      shortTitle: "Sécurité",
      duration: "16 min",
      summary:
        "Prévenir les risques et protéger les enfants avant, pendant et après l'activité.",
      sheet: [
        "La sécurité est une responsabilité permanente. Elle commence avant la séance : terrain, buts, matériel, météo, nombre d'enfants, zones de circulation et organisation générale.",
        "Pendant l'activité, l'éducateur garde une vision du groupe. Il anticipe les collisions, adapte les distances, stoppe une situation dangereuse et veille à l'hydratation selon le contexte.",
        "En cas de blessure ou de malaise, on protège l'enfant, on alerte selon la gravité et on informe les responsables. On ne banalise pas une douleur importante.",
        "Les procédures précises peuvent varier selon le club, le district ou la saison. L'idée centrale reste : prévenir, surveiller, réagir calmement et transmettre l'information."
      ],
      essentials: [
        "Vérifier terrain, buts et matériel.",
        "Prévoir une organisation lisible et sûre.",
        "Adapter à la météo et à l'état du groupe.",
        "Réagir calmement en cas de blessure.",
        "Connaître les référents et procédures du club."
      ],
      mistakes: [
        "Lancer une séance sans vérifier l'espace.",
        "Laisser des buts ou du matériel dangereux.",
        "Ignorer une douleur répétée.",
        "Mettre les enfants dans des trajectoires qui se croisent sans contrôle.",
        "Ne pas informer les responsables en cas d'incident."
      ],
      oralScript:
        "La sécurité, ce n'est pas un détail administratif. Avant de commencer, tu regardes le terrain, les buts, le matériel et l'organisation. Pendant la séance, tu observes les trajectoires, les contacts, la fatigue et la météo. Si quelque chose devient dangereux, tu adaptes. En cas de problème, tu protèges, tu alertes et tu transmets.",
      quiz: [
        {
          question: "Avant une séance, la première action de sécurité est de...",
          options: [
            "Vérifier l'espace de pratique et le matériel",
            "Faire choisir les équipes par les enfants",
            "Commencer vite pour gagner du temps",
            "Attendre que les parents partent"
          ],
          answerIndex: 0,
          explanation:
            "La prévention commence par l'environnement : terrain, buts, objets, distances."
        },
        {
          question: "Une situation devient dangereuse. Que faire ?",
          options: [
            "Stopper, sécuriser puis adapter l'organisation",
            "Continuer pour ne pas casser le rythme",
            "Accuser les enfants",
            "Changer de thème sans expliquer"
          ],
          answerIndex: 0,
          explanation:
            "La sécurité prime. On corrige l'organisation avant de relancer."
        },
        {
          question: "En cas de blessure sérieuse suspectée, il faut...",
          options: [
            "Protéger l'enfant, alerter selon la procédure et informer",
            "Le remettre immédiatement en jeu",
            "Demander au groupe de décider",
            "Attendre la fin de séance sans surveillance"
          ],
          answerIndex: 0,
          explanation:
            "On agit calmement selon les procédures du club et le niveau de gravité."
        },
        {
          question: "La météo doit être prise en compte car elle peut influencer...",
          options: [
            "La fatigue, l'hydratation et les risques de glissade ou de chaleur",
            "Uniquement la couleur des chasubles",
            "Le classement du groupe",
            "Le nombre de consignes techniques"
          ],
          answerIndex: 0,
          explanation:
            "Le froid, la chaleur, le vent ou la pluie peuvent modifier les risques."
        },
        {
          question: "Une bonne organisation de sécurité doit être...",
          options: [
            "Simple, visible et comprise par les enfants",
            "Improvisée à chaque minute",
            "Connue uniquement de l'éducateur",
            "Basée sur le hasard"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants se déplacent mieux quand les espaces et les règles sont lisibles."
        }
      ],
      situations: [
        {
          id: "securite-s1",
          title: "Terrain à risque",
          prompt:
            "Tu arrives sur le terrain et une zone est glissante avec du matériel posé près de la ligne. Que fais-tu ?",
          correction: [
            "Déplacer ou retirer le matériel dangereux.",
            "Réduire ou déplacer l'espace de jeu.",
            "Informer les enfants des limites claires.",
            "Adapter la séance si la zone reste risquée.",
            "Prévenir un responsable si le terrain pose un problème durable."
          ],
          explanation:
            "L'activité ne commence pas tant que l'espace n'est pas sécurisé."
        },
        {
          id: "securite-s2",
          title: "Douleur pendant la séance",
          prompt:
            "Un enfant se plaint d'une douleur et veut continuer pour ne pas perdre sa place. Comment réagis-tu ?",
          correction: [
            "Le sortir de l'action pour évaluer calmement.",
            "Ne pas minimiser sa douleur.",
            "Prévenir ou faire prévenir selon l'organisation du club.",
            "Le remettre seulement si la situation est clairement sans risque.",
            "Informer les parents ou responsables si nécessaire."
          ],
          explanation:
            "La protection de l'enfant passe avant la performance ou le temps de jeu."
        }
      ]
    },
    {
      id: "challenge-criterium",
      title: "L'organisation d'un challenge ou critérium",
      shortTitle: "Challenge",
      duration: "18 min",
      summary:
        "Organiser une rencontre avec anticipation, équité, sécurité et respect du cadre local.",
      sheet: [
        "Un challenge ou critérium demande de l'anticipation : horaires, convocations, terrain, matériel, accueil, rotations, encadrement, communication et respect du cadre fixé localement.",
        "Les règles précises peuvent varier selon le district, la saison ou le format. L'éducateur doit donc vérifier les informations officielles transmises par son club ou son instance.",
        "L'objectif reste éducatif : faire jouer, responsabiliser, respecter les adversaires, les arbitres et les bénévoles, et permettre aux enfants de vivre une expérience positive.",
        "Une bonne organisation se voit surtout quand il y a peu d'attente, des consignes claires, un climat serein et une gestion simple des imprévus."
      ],
      essentials: [
        "Vérifier les consignes locales avant l'événement.",
        "Préparer l'accueil, le matériel et les rotations.",
        "Favoriser le temps de jeu et l'équité.",
        "Communiquer clairement avec parents et éducateurs.",
        "Prévoir une solution en cas d'absence ou de retard."
      ],
      mistakes: [
        "Inventer un règlement sans vérifier le cadre local.",
        "Oublier les temps de transition.",
        "Laisser des enfants sans rôle pendant longtemps.",
        "Communiquer au dernier moment.",
        "Transformer l'événement en pression de résultat."
      ],
      oralScript:
        "Pour organiser un challenge ou un critérium, pense simple et anticipé. Tu vérifies le cadre local, tu prépares le matériel, les horaires, les rotations et l'accueil. Le jour même, ton objectif est que les enfants jouent, se respectent et vivent une rencontre bien organisée. Le résultat compte moins que la qualité de l'expérience.",
      quiz: [
        {
          question: "Pour un critérium, les règles précises doivent être...",
          options: [
            "Vérifiées auprès du club, du district ou des documents transmis",
            "Inventées le jour même",
            "Décidées par les parents",
            "Toujours identiques dans toute la France"
          ],
          answerIndex: 0,
          explanation:
            "Les formats peuvent varier. Il faut éviter d'annoncer des règles non vérifiées."
        },
        {
          question: "Une bonne rotation doit chercher à...",
          options: [
            "Faire jouer les enfants de manière équilibrée et lisible",
            "Faire jouer uniquement les plus performants",
            "Changer sans prévenir",
            "Mettre toujours les mêmes remplaçants"
          ],
          answerIndex: 0,
          explanation:
            "L'objectif éducatif suppose de donner du temps de jeu et du sens aux rotations."
        },
        {
          question: "La communication avant l'événement doit préciser notamment...",
          options: [
            "Heure, lieu, équipement attendu et organisation générale",
            "La composition définitive de toutes les équipes adverses",
            "Une promesse de victoire",
            "Uniquement le score espéré"
          ],
          answerIndex: 0,
          explanation:
            "Les familles ont besoin d'informations pratiques fiables."
        },
        {
          question: "Le jour d'un challenge, le climat recherché est...",
          options: [
            "Serein, respectueux et centré sur le jeu",
            "Tendu pour préparer la compétition",
            "Basé sur la critique permanente",
            "Indifférent à l'attitude des adultes"
          ],
          answerIndex: 0,
          explanation:
            "La rencontre doit rester un support de formation et de plaisir."
        },
        {
          question: "En cas d'imprévu d'organisation, il faut d'abord...",
          options: [
            "Sécuriser, informer clairement et adapter simplement",
            "Blâmer publiquement un bénévole",
            "Annuler sans échange",
            "Laisser les enfants décider seuls"
          ],
          answerIndex: 0,
          explanation:
            "La gestion calme et transparente limite le stress et les tensions."
        }
      ],
      situations: [
        {
          id: "challenge-s1",
          title: "Retard d'une équipe",
          prompt:
            "Une équipe arrive en retard et ton planning de rotations est perturbé. Comment gères-tu ?",
          correction: [
            "Informer calmement les éducateurs concernés.",
            "Adapter les rotations sans compromettre la sécurité.",
            "Maintenir les enfants actifs avec un jeu simple si besoin.",
            "Communiquer aux parents sans dramatiser.",
            "Revenir au planning dès que possible."
          ],
          explanation:
            "L'éducateur protège le cadre tout en acceptant les ajustements nécessaires."
        },
        {
          id: "challenge-s2",
          title: "Parent trop directif",
          prompt:
            "Pendant un plateau, un parent donne des consignes opposées aux tiennes depuis la touche. Que fais-tu ?",
          correction: [
            "Intervenir calmement, si possible hors de l'action.",
            "Rappeler que les consignes sportives viennent de l'éducateur.",
            "Valoriser son soutien mais cadrer son rôle.",
            "Préserver l'enfant du conflit d'adultes.",
            "Reprendre le sujet après l'événement si nécessaire."
          ],
          explanation:
            "La priorité est de ne pas exposer l'enfant à une double pression."
        }
      ]
    },
    {
      id: "climat-entrainement",
      title: "Le climat d'entraînement",
      shortTitle: "Climat",
      duration: "18 min",
      summary:
        "Installer un environnement motivant, sécurisant et propice aux apprentissages.",
      sheet: [
        "Le climat d'entraînement influence directement l'engagement des enfants. Un climat positif donne envie d'essayer, de coopérer, de respecter les règles et de revenir.",
        "Ce climat se construit par l'accueil, le ton de voix, les règles de vie, la place du droit à l'erreur et la manière de traiter les réussites comme les difficultés.",
        "Le plaisir ne s'oppose pas à l'exigence. Une séance peut être joyeuse et sérieuse, avec des repères clairs, de l'intensité et du respect.",
        "L'éducateur doit repérer les signaux faibles : enfant isolé, moqueries, baisse d'engagement, tensions. Plus l'intervention est précoce, plus elle est éducative."
      ],
      essentials: [
        "Accueillir et créer un cadre rassurant.",
        "Autoriser l'erreur comme étape d'apprentissage.",
        "Valoriser les efforts, l'entraide et les progrès.",
        "Intervenir vite sur les moqueries.",
        "Maintenir une exigence positive."
      ],
      mistakes: [
        "Laisser l'ironie s'installer.",
        "Récompenser uniquement le résultat.",
        "Confondre ambiance détendue et absence de cadre.",
        "Ignorer un enfant isolé.",
        "Utiliser la peur comme moteur principal."
      ],
      oralScript:
        "Le climat d'entraînement, c'est ce que les enfants ressentent en arrivant. Est-ce qu'ils se sentent attendus, respectés, autorisés à essayer ? Ton cadre doit être clair, mais ton énergie doit donner envie. Tu valorises l'effort, tu arrêtes les moqueries tôt, tu protèges le droit à l'erreur et tu gardes le groupe tourné vers le progrès.",
      quiz: [
        {
          question: "Un bon climat d'entraînement favorise surtout...",
          options: [
            "L'engagement, le plaisir et l'apprentissage",
            "La peur de se tromper",
            "La comparaison permanente",
            "Le silence absolu"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants apprennent mieux dans un cadre sécurisant et stimulant."
        },
        {
          question: "Le droit à l'erreur signifie...",
          options: [
            "Que l'erreur est utilisée pour apprendre",
            "Qu'il ne faut jamais corriger",
            "Que les règles n'existent plus",
            "Que l'erreur doit être moquée"
          ],
          answerIndex: 0,
          explanation:
            "On peut corriger tout en respectant l'enfant et son effort."
        },
        {
          question: "Face à une moquerie entre joueurs, il faut...",
          options: [
            "Intervenir vite et rappeler le cadre de respect",
            "Attendre que ça passe toujours seul",
            "Rire avec le groupe",
            "Exclure sans explication dans tous les cas"
          ],
          answerIndex: 0,
          explanation:
            "Une intervention précoce évite que le climat se dégrade."
        },
        {
          question: "Une exigence positive consiste à...",
          options: [
            "Demander des efforts tout en soutenant l'enfant",
            "Critiquer jusqu'à obtenir le résultat",
            "Supprimer le plaisir",
            "Ne valoriser que la victoire"
          ],
          answerIndex: 0,
          explanation:
            "L'exigence doit donner envie de progresser, pas peur d'agir."
        },
        {
          question: "Un enfant isolé pendant l'entraînement est...",
          options: [
            "Un signal à observer et à traiter avec attention",
            "Un problème sans importance",
            "Forcément responsable de la situation",
            "À ignorer pour ne pas ralentir le groupe"
          ],
          answerIndex: 0,
          explanation:
            "L'éducateur veille à l'inclusion et au bien-être de chacun."
        }
      ],
      situations: [
        {
          id: "climat-s1",
          title: "Moqueries après une erreur",
          prompt:
            "Un joueur rate un contrôle et deux coéquipiers se moquent. Comment réagis-tu ?",
          correction: [
            "Stopper rapidement si la moquerie se propage.",
            "Rappeler que l'erreur fait partie de l'apprentissage.",
            "Faire reformuler une attitude attendue : encourager, aider, se replacer.",
            "Valoriser le joueur qui retente l'action.",
            "Suivre les joueurs moqueurs si le comportement se répète."
          ],
          explanation:
            "Le climat se protège dans les petites situations du quotidien."
        },
        {
          id: "climat-s2",
          title: "Groupe peu engagé",
          prompt:
            "Le groupe semble peu concentré, l'intensité est faible et les joueurs discutent beaucoup. Que peux-tu ajuster ?",
          correction: [
            "Raccourcir la consigne et relancer vite.",
            "Introduire un défi simple et mesurable.",
            "Réduire l'espace ou le temps pour augmenter l'activité.",
            "Changer les rôles ou les équipes si nécessaire.",
            "Garder un ton dynamique sans menacer."
          ],
          explanation:
            "L'engagement vient souvent d'une organisation claire, active et stimulante."
        }
      ]
    },
    {
      id: "gestion-parents",
      title: "La gestion des parents",
      shortTitle: "Parents",
      duration: "18 min",
      summary:
        "Communiquer, cadrer les rôles et protéger l'enfant des tensions d'adultes.",
      sheet: [
        "Les parents sont des partenaires importants. Ils accompagnent, encouragent, transportent, soutiennent et représentent l'environnement de l'enfant.",
        "La relation est plus simple quand le cadre est annoncé : horaires, équipement, rôle au bord du terrain, communication, respect des décisions et des personnes.",
        "En cas de tension, l'éducateur évite le débat à chaud devant les enfants. Il écoute, reformule, rappelle le cadre et propose un échange à un moment adapté.",
        "L'enfant ne doit pas devenir l'enjeu d'un conflit d'adultes. La communication doit rester respectueuse, claire et centrée sur son développement."
      ],
      essentials: [
        "Informer tôt et clairement.",
        "Donner une place positive aux parents.",
        "Cadrer les consignes depuis la touche.",
        "Éviter les débats devant les enfants.",
        "Rester factuel et respectueux en cas de désaccord."
      ],
      mistakes: [
        "Répondre à chaud devant le groupe.",
        "Laisser les parents coacher à la place de l'éducateur.",
        "Communiquer seulement quand il y a un problème.",
        "Humilier un parent ou un enfant.",
        "Promettre ce qu'on ne maîtrise pas."
      ],
      oralScript:
        "Avec les parents, le mot clé est cadre. Tu les accueilles comme des partenaires, mais tu clarifies les rôles : ils encouragent, l'éducateur donne les consignes sportives. Quand il y a tension, tu évites le débat devant les enfants. Tu écoutes, tu reformules, tu fixes un moment pour échanger et tu reviens toujours à l'intérêt de l'enfant.",
      quiz: [
        {
          question: "La meilleure façon de prévenir les tensions avec les parents est souvent de...",
          options: [
            "Communiquer clairement le cadre dès le départ",
            "Ne jamais leur parler",
            "Donner des informations au dernier moment",
            "Laisser chacun définir son rôle"
          ],
          answerIndex: 0,
          explanation:
            "Un cadre annoncé évite beaucoup d'incompréhensions."
        },
        {
          question: "Un parent critique un choix devant les enfants. Il vaut mieux...",
          options: [
            "Proposer un échange au calme à un moment adapté",
            "Répondre publiquement sur le même ton",
            "Ignorer systématiquement",
            "Demander aux enfants de trancher"
          ],
          answerIndex: 0,
          explanation:
            "On protège les enfants et on traite le désaccord hors de l'émotion immédiate."
        },
        {
          question: "Au bord du terrain, le rôle attendu d'un parent est plutôt...",
          options: [
            "Encourager et respecter le cadre",
            "Donner toutes les consignes tactiques",
            "Critiquer l'arbitre",
            "Comparer les enfants"
          ],
          answerIndex: 0,
          explanation:
            "L'encouragement soutient l'enfant sans créer de confusion."
        },
        {
          question: "Une communication efficace avec les familles doit être...",
          options: [
            "Factuelle, régulière et respectueuse",
            "Uniquement émotionnelle",
            "Réservée aux conflits",
            "Toujours improvisée"
          ],
          answerIndex: 0,
          explanation:
            "La régularité et la clarté renforcent la confiance."
        },
        {
          question: "L'intérêt principal à protéger est...",
          options: [
            "Le développement et le bien-être de l'enfant",
            "L'ego de l'adulte",
            "Le débat public",
            "La victoire à tout prix"
          ],
          answerIndex: 0,
          explanation:
            "Toutes les décisions éducatives doivent revenir à l'intérêt de l'enfant."
        }
      ],
      situations: [
        {
          id: "parents-s1",
          title: "Parent mécontent du temps de jeu",
          prompt:
            "Après un match, un parent te reproche vivement le temps de jeu de son enfant devant le groupe. Que fais-tu ?",
          correction: [
            "Ne pas entrer dans un débat à chaud devant les enfants.",
            "Reconnaître que le sujet peut être important pour lui.",
            "Proposer un échange au calme plus tard.",
            "Rappeler le cadre collectif de manière factuelle.",
            "Garder une attitude respectueuse et ferme."
          ],
          explanation:
            "La gestion du moment compte autant que le contenu de la réponse."
        },
        {
          id: "parents-s2",
          title: "Consignes contradictoires",
          prompt:
            "Une joueuse se retourne vers son parent avant chaque action car il lui donne des consignes. Comment interviens-tu ?",
          correction: [
            "Rassurer la joueuse et lui redonner un repère simple.",
            "Parler au parent calmement pour clarifier son rôle.",
            "Demander des encouragements plutôt que des consignes.",
            "Éviter de mettre l'enfant au centre d'un conflit.",
            "Reprendre collectivement le cadre si plusieurs parents le font."
          ],
          explanation:
            "L'enfant doit pouvoir décider sur le terrain sans pression contradictoire."
        }
      ]
    },
    {
      id: "violence-discrimination-respect",
      title: "La violence, la discrimination et le respect",
      shortTitle: "Respect",
      duration: "20 min",
      summary:
        "Prévenir, repérer et traiter les comportements contraires aux valeurs éducatives.",
      sheet: [
        "La lutte contre la violence et les discriminations fait partie du rôle éducatif. Cela concerne les mots, les gestes, les attitudes, les exclusions et les humiliations.",
        "L'éducateur doit agir rapidement : protéger la personne ciblée, nommer le comportement inacceptable, rappeler le cadre, puis traiter la situation selon sa gravité et les procédures du club.",
        "La réponse doit être éducative mais ferme. On distingue la personne du comportement : l'enfant peut comprendre, réparer et progresser, mais le comportement n'est pas banalisé.",
        "Le respect s'apprend au quotidien : arbitre, adversaire, partenaire, éducateur, bénévole, matériel, différences de niveau, de genre, d'origine ou de personnalité."
      ],
      essentials: [
        "Ne pas banaliser une insulte ou une discrimination.",
        "Protéger la personne ciblée.",
        "Nommer le comportement et rappeler le cadre.",
        "Associer sanction, réparation et éducation si nécessaire.",
        "S'appuyer sur les responsables du club en cas de gravité."
      ],
      mistakes: [
        "Dire que ce n'est qu'une blague sans vérifier l'impact.",
        "Traiter la victime et l'auteur de la même manière.",
        "Répondre par l'humiliation.",
        "Laisser le groupe régler seul une situation grave.",
        "Oublier de transmettre aux référents si nécessaire."
      ],
      oralScript:
        "Violence, discrimination, humiliation : tu ne laisses pas passer. Tu protèges d'abord la personne ciblée. Ensuite tu nommes le comportement, tu rappelles le cadre et tu agis selon la gravité. L'objectif est éducatif, mais il est ferme. Le football doit être un lieu où chacun peut pratiquer avec respect et sécurité.",
      quiz: [
        {
          question: "Face à une insulte discriminatoire, la première priorité est de...",
          options: [
            "Protéger la personne ciblée et stopper le comportement",
            "Faire comme si c'était une blague",
            "Attendre la fin de saison",
            "Demander au groupe de voter"
          ],
          answerIndex: 0,
          explanation:
            "La protection et l'arrêt immédiat du comportement sont prioritaires."
        },
        {
          question: "Une réponse éducative doit...",
          options: [
            "Être ferme sur le comportement et respectueuse des personnes",
            "Humilier l'enfant auteur",
            "Banaliser pour éviter les tensions",
            "Éviter toute discussion"
          ],
          answerIndex: 0,
          explanation:
            "On refuse le comportement sans déshumaniser l'enfant."
        },
        {
          question: "Le respect concerne...",
          options: [
            "Partenaires, adversaires, arbitres, adultes, matériel et différences",
            "Uniquement les éducateurs",
            "Uniquement les jours de match",
            "Seulement les meilleurs joueurs"
          ],
          answerIndex: 0,
          explanation:
            "Le respect est une attitude globale et quotidienne."
        },
        {
          question: "Quand une situation dépasse le cadre de la séance, il faut...",
          options: [
            "S'appuyer sur les responsables et procédures du club",
            "Garder cela pour soi",
            "Demander aux enfants de ne plus en parler",
            "Réagir uniquement sur les réseaux sociaux"
          ],
          answerIndex: 0,
          explanation:
            "Les situations graves doivent être transmises et traitées collectivement."
        },
        {
          question: "Dire c'était pour rire est insuffisant car...",
          options: [
            "L'impact sur la personne ciblée doit être pris en compte",
            "L'humour annule toujours la violence",
            "Les enfants ne comprennent jamais",
            "Cela remplace le cadre"
          ],
          answerIndex: 0,
          explanation:
            "Une parole peut blesser même si l'auteur prétend ne pas l'avoir voulu."
        }
      ],
      situations: [
        {
          id: "respect-s1",
          title: "Insulte dans le groupe",
          prompt:
            "Pendant un jeu, un enfant lance une insulte liée à l'origine supposée d'un coéquipier. Comment interviens-tu ?",
          correction: [
            "Stopper immédiatement la situation.",
            "Protéger et écouter l'enfant ciblé.",
            "Nommer clairement que le propos est inacceptable.",
            "Rappeler le cadre de respect et les conséquences.",
            "Informer les responsables selon la gravité et organiser une réponse éducative."
          ],
          explanation:
            "La réaction doit être immédiate, claire et suivie. On ne banalise pas."
        },
        {
          id: "respect-s2",
          title: "Geste violent",
          prompt:
            "Un joueur pousse volontairement un adversaire après une frustration. Quelle réponse apportes-tu ?",
          correction: [
            "Séparer et sécuriser les enfants.",
            "Faire redescendre l'émotion avant l'explication.",
            "Rappeler que la frustration ne justifie pas la violence.",
            "Prévoir une réparation ou excuse adaptée.",
            "Réintégrer seulement avec un engagement clair de comportement."
          ],
          explanation:
            "On gère l'émotion, on pose la limite et on accompagne la réparation."
        }
      ]
    },
    {
      id: "education-integree-pef",
      title: "L'éducation intégrée / PEF",
      shortTitle: "PEF",
      duration: "18 min",
      summary:
        "Intégrer les valeurs éducatives dans la séance, sans faire un cours déconnecté.",
      sheet: [
        "L'éducation intégrée consiste à utiliser les moments de football pour faire vivre des valeurs : respect, santé, engagement, arbitrage, environnement, solidarité, citoyenneté.",
        "Le PEF peut être abordé simplement, avec des messages courts reliés à ce que les enfants vivent : ranger le matériel, respecter une décision, s'hydrater, encourager, arbitrer un jeu.",
        "L'idée n'est pas de transformer la séance en cours théorique. L'éducateur saisit des situations concrètes, questionne, valorise et fait verbaliser.",
        "Un bon message éducatif est utile, bref et répété. Les enfants retiennent mieux quand ils agissent et comprennent le sens."
      ],
      essentials: [
        "Relier le message éducatif à une situation vécue.",
        "Faire court et concret.",
        "Donner des responsabilités adaptées.",
        "Valoriser les comportements positifs.",
        "Répéter les valeurs dans le quotidien du club."
      ],
      mistakes: [
        "Faire un long discours déconnecté du terrain.",
        "Parler de valeurs sans les appliquer soi-même.",
        "Utiliser le PEF uniquement comme affichage.",
        "Donner des responsabilités sans accompagner.",
        "Oublier de valoriser les bons comportements."
      ],
      oralScript:
        "L'éducation intégrée, c'est faire passer les valeurs dans le football vécu. Quand les enfants rangent, arbitrent, encouragent, respectent une décision ou prennent soin d'eux, tu peux faire un lien simple. Pas besoin d'un long discours. Tu relies l'action à une valeur, tu fais verbaliser et tu valorises.",
      quiz: [
        {
          question: "L'éducation intégrée est plus efficace quand elle est...",
          options: [
            "Reliée à une situation concrète vécue par les enfants",
            "Déconnectée de la séance",
            "Limitée à une affiche dans le vestiaire",
            "Réservée aux sanctions"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants comprennent mieux les valeurs quand elles sont vécues."
        },
        {
          question: "Un message PEF doit idéalement être...",
          options: [
            "Court, clair et répété dans le quotidien",
            "Long et théorique",
            "Uniquement écrit",
            "Sans lien avec les comportements"
          ],
          answerIndex: 0,
          explanation:
            "Un message simple est plus facile à retenir et à appliquer."
        },
        {
          question: "Donner un rôle d'arbitre à un enfant peut travailler...",
          options: [
            "La responsabilité, le respect et la compréhension des règles",
            "Uniquement sa vitesse",
            "La sanction des autres",
            "L'absence de cadre"
          ],
          answerIndex: 0,
          explanation:
            "Les rôles responsabilisants sont des supports éducatifs très concrets."
        },
        {
          question: "L'exemplarité de l'éducateur est importante car...",
          options: [
            "Les valeurs se transmettent aussi par les comportements observés",
            "Elle remplace toute séance",
            "Elle autorise à ne jamais expliquer",
            "Elle ne concerne que les matchs"
          ],
          answerIndex: 0,
          explanation:
            "Les enfants apprennent beaucoup en observant les adultes."
        },
        {
          question: "Ranger le matériel avec les enfants peut servir à travailler...",
          options: [
            "La responsabilité collective et le respect du club",
            "La punition systématique",
            "La mise à l'écart",
            "Le classement technique"
          ],
          answerIndex: 0,
          explanation:
            "Les gestes simples du quotidien peuvent porter une intention éducative."
        }
      ],
      situations: [
        {
          id: "pef-s1",
          title: "Matériel laissé au sol",
          prompt:
            "À la fin de séance, plusieurs enfants partent sans ranger. Comment transformes-tu ce moment en action éducative ?",
          correction: [
            "Rassembler brièvement le groupe.",
            "Rappeler que le matériel appartient au collectif.",
            "Attribuer des rôles simples et rapides.",
            "Valoriser le groupe quand tout est rangé.",
            "Reprendre ce rituel régulièrement."
          ],
          explanation:
            "La responsabilité collective s'apprend dans les habitudes répétées."
        },
        {
          id: "pef-s2",
          title: "Arbitrage d'un jeu",
          prompt:
            "Tu veux responsabiliser les enfants sur le respect des règles pendant une opposition. Que mets-tu en place ?",
          correction: [
            "Confier un rôle d'arbitre ou d'observateur à un enfant accompagné.",
            "Donner deux règles simples à surveiller.",
            "Débriefer rapidement sur la difficulté de décider.",
            "Valoriser l'honnêteté et l'acceptation des décisions.",
            "Changer les rôles pour que plusieurs enfants expérimentent."
          ],
          explanation:
            "L'enfant comprend mieux le respect de l'arbitre quand il vit le rôle."
        }
      ]
    },
    {
      id: "evaluation-action",
      title: "L'évaluation de son action pédagogique",
      shortTitle: "Évaluation",
      duration: "20 min",
      summary:
        "Observer, analyser et ajuster sa séance pour progresser comme éducateur.",
      sheet: [
        "Évaluer son action pédagogique, ce n'est pas se juger durement. C'est regarder ce qui a aidé les enfants à apprendre et ce qui doit être ajusté.",
        "L'éducateur peut s'appuyer sur quelques indicateurs simples : niveau d'activité, compréhension des consignes, engagement, sécurité, progrès observables, climat du groupe.",
        "L'évaluation peut se faire après la séance, avec une trace courte : objectif travaillé, ce qui a fonctionné, ce qui est à modifier, point à reprendre au prochain entraînement.",
        "Demander un retour à un collègue, observer une séquence ou filmer avec autorisation peut aider, mais l'essentiel reste la capacité à ajuster et à progresser."
      ],
      essentials: [
        "Comparer la séance à l'objectif prévu.",
        "Observer l'activité réelle des enfants.",
        "Noter un point fort et un point à améliorer.",
        "Ajuster la séance suivante.",
        "Rester dans une logique de progrès."
      ],
      mistakes: [
        "Évaluer uniquement au score du match.",
        "Changer tout le cycle après une séance moyenne.",
        "Ne garder aucune trace.",
        "Confondre ressenti personnel et observation.",
        "Refuser les retours d'un collègue."
      ],
      oralScript:
        "Après une séance, pose-toi trois questions simples : est-ce que mon objectif était clair ? Est-ce que les enfants ont été actifs et en sécurité ? Qu'est-ce que je garde ou j'ajuste la prochaine fois ? L'évaluation n'est pas là pour te juger, elle sert à progresser comme éducateur et à mieux accompagner les enfants.",
      quiz: [
        {
          question: "Évaluer son action pédagogique sert surtout à...",
          options: [
            "Ajuster sa pratique et mieux faire apprendre",
            "Se critiquer sans solution",
            "Prouver que tout était parfait",
            "Remplacer la préparation"
          ],
          answerIndex: 0,
          explanation:
            "L'évaluation nourrit l'amélioration continue de l'éducateur."
        },
        {
          question: "Un indicateur utile pendant une séance est...",
          options: [
            "Le niveau d'activité réelle des enfants",
            "Uniquement le score du dernier match",
            "La longueur des consignes",
            "Le nombre de plots utilisés"
          ],
          answerIndex: 0,
          explanation:
            "Si les enfants agissent peu, les apprentissages sont limités."
        },
        {
          question: "Après la séance, une trace courte peut contenir...",
          options: [
            "Objectif, réussites, points à ajuster et suite prévue",
            "Uniquement la météo",
            "Un classement des parents",
            "Une liste de reproches"
          ],
          answerIndex: 0,
          explanation:
            "Une trace simple aide à préparer la continuité du cycle."
        },
        {
          question: "Un retour d'un collègue peut être utile s'il est...",
          options: [
            "Factuel, bienveillant et relié à l'objectif",
            "Moqueur",
            "Uniquement basé sur le résultat",
            "Sans observation"
          ],
          answerIndex: 0,
          explanation:
            "Un regard externe aide quand il s'appuie sur des faits observables."
        },
        {
          question: "Si une séance fonctionne moins bien que prévu, il faut...",
          options: [
            "Identifier ce qui bloque et ajuster progressivement",
            "Abandonner tout le projet",
            "Accuser uniquement les enfants",
            "Ne rien changer jamais"
          ],
          answerIndex: 0,
          explanation:
            "L'éducateur analyse et ajuste sans sur-réagir."
        }
      ],
      situations: [
        {
          id: "evaluation-s1",
          title: "Séance peu réussie",
          prompt:
            "Tu sors d'une séance où l'objectif n'a pas vraiment été atteint. Comment l'analyses-tu ?",
          correction: [
            "Revenir à l'objectif initial.",
            "Identifier un ou deux faits observables : attente, incompréhension, espace, niveau.",
            "Noter ce qui a tout de même fonctionné.",
            "Prévoir un ajustement simple pour la prochaine séance.",
            "Éviter de tout remettre en cause sous l'émotion."
          ],
          explanation:
            "L'évaluation utile est factuelle, courte et orientée vers l'action suivante."
        },
        {
          id: "evaluation-s2",
          title: "Retour d'un collègue",
          prompt:
            "Un collègue te dit que tes consignes sont trop longues. Comment utilises-tu ce retour ?",
          correction: [
            "L'accueillir sans se braquer.",
            "Demander un exemple précis observé.",
            "Tester une consigne plus courte à la prochaine séance.",
            "Observer l'effet sur l'activité des enfants.",
            "Garder ce qui améliore vraiment la séance."
          ],
          explanation:
            "Un retour devient utile quand il se transforme en expérimentation concrète."
        }
      ]
    }
  ]
};

(() => {
  const extras = {
    "seance-u10-u13": {
      quiz: [
        {
          question: "Dans une séance U10-U13, le ballon doit être...",
          options: [
            "Très présent pour favoriser les répétitions et le plaisir",
            "Réservé uniquement au match final",
            "Utilisé seulement par les joueurs les plus avancés",
            "Écarté quand le groupe manque d'attention"
          ],
          answerIndex: 0,
          explanation:
            "Le ballon donne du sens, de l'engagement et permet de répéter les gestes dans des situations proches du jeu."
        },
        {
          question: "Quel indicateur montre qu'une séance est trop compliquée ?",
          options: [
            "Les enfants restent actifs et osent essayer",
            "Beaucoup d'enfants s'arrêtent, demandent sans cesse et perdent confiance",
            "Les enfants touchent souvent le ballon",
            "Le groupe comprend les critères de réussite"
          ],
          answerIndex: 1,
          explanation:
            "Quand l'incompréhension bloque l'activité, l'éducateur doit simplifier les règles, l'espace ou l'opposition."
        },
        {
          question: "Pour garder une bonne intensité, l'éducateur peut surtout...",
          options: [
            "Multiplier les files d'attente",
            "Augmenter les temps de consigne",
            "Prévoir plusieurs départs, petits groupes ou ateliers",
            "Supprimer les temps de récupération"
          ],
          answerIndex: 2,
          explanation:
            "Une organisation en petits groupes réduit l'attente et augmente le nombre d'actions utiles."
        },
        {
          question: "Une séance adaptée au CFI U10-U13 recherche d'abord...",
          options: [
            "La démonstration de l'éducateur",
            "La reproduction d'un modèle adulte",
            "Le résultat immédiat",
            "Le plaisir, la sécurité et une progression observable"
          ],
          answerIndex: 3,
          explanation:
            "La logique de formation privilégie l'enfant, son engagement et son apprentissage progressif."
        },
        {
          question: "Quand la situation ne fonctionne pas, la meilleure attitude est de...",
          options: [
            "Observer, identifier le blocage et ajuster un paramètre",
            "Changer immédiatement tout le thème",
            "Accuser le niveau du groupe",
            "Continuer sans modification"
          ],
          answerIndex: 0,
          explanation:
            "Un ajustement simple peut suffire : espace, nombre de joueurs, opposition, règle ou critère."
        }
      ],
      situations: [
        {
          id: "seance-s3",
          title: "Séance qui déborde",
          prompt:
            "Le groupe est excité, les consignes ne passent plus et la séance perd son sens. Que fais-tu ?",
          correction: [
            "Rassembler calmement le groupe dans un espace sûr.",
            "Revenir à une seule règle de fonctionnement.",
            "Relancer avec une situation plus simple et plus active.",
            "Valoriser rapidement les comportements attendus.",
            "Garder un ton ferme mais positif."
          ],
          explanation:
            "L'éducateur reprend le cadre sans casser le plaisir, puis remet vite les enfants en action."
        }
      ]
    },
    "posture-educateur": {
      quiz: [
        {
          question: "Une remarque individuelle difficile doit idéalement être faite...",
          options: [
            "Devant tout le groupe pour marquer les esprits",
            "À part ou avec discrétion, en ciblant le comportement",
            "Sous forme d'ironie",
            "Uniquement après plusieurs semaines"
          ],
          answerIndex: 1,
          explanation:
            "La correction doit préserver la dignité de l'enfant et viser une amélioration concrète."
        },
        {
          question: "Quelle phrase correspond le mieux à une posture éducative positive ?",
          options: [
            "Tu n'y arrives jamais",
            "Regarde les autres, eux réussissent",
            "Essaie d'ouvrir ton corps avant de recevoir",
            "Si tu rates encore, tu sors"
          ],
          answerIndex: 2,
          explanation:
            "Le repère est précis, actionnable et ne réduit pas l'enfant à son erreur."
        },
        {
          question: "L'autorité de l'éducateur repose surtout sur...",
          options: [
            "La peur",
            "Les cris",
            "L'improvisation permanente",
            "La cohérence, le respect et la clarté du cadre"
          ],
          answerIndex: 3,
          explanation:
            "Un cadre stable et juste sécurise les enfants et facilite l'adhésion."
        },
        {
          question: "Quand l'éducateur se trompe, il peut...",
          options: [
            "Le reconnaître simplement et corriger",
            "Faire porter la faute aux enfants",
            "Refuser toute discussion",
            "Changer de sujet immédiatement"
          ],
          answerIndex: 0,
          explanation:
            "Reconnaître une erreur montre l'exemplarité et renforce la confiance."
        },
        {
          question: "Un encouragement utile porte plutôt sur...",
          options: [
            "Uniquement le talent",
            "L'effort, le choix, le progrès ou l'entraide",
            "La comparaison avec un autre joueur",
            "Le score seulement"
          ],
          answerIndex: 1,
          explanation:
            "Valoriser les comportements maîtrisables entretient la motivation et l'apprentissage."
        }
      ],
      situations: [
        {
          id: "posture-s3",
          title: "Enfant qui refuse de participer",
          prompt:
            "Un enfant refuse d'entrer dans l'exercice et reste en retrait. Quelle attitude adoptes-tu ?",
          correction: [
            "Aller le voir calmement sans le mettre en spectacle.",
            "Chercher brièvement la cause : peur, fatigue, conflit, incompréhension.",
            "Proposer un rôle ou une entrée progressive dans l'activité.",
            "Donner un objectif très simple et valoriser le premier effort.",
            "Informer ou échanger après séance si le refus se répète."
          ],
          explanation:
            "La posture attendue combine écoute, cadre et remise en activité progressive."
        }
      ]
    },
    "pedagogie-apprentissage": {
      quiz: [
        {
          question: "L'apprentissage par le jeu signifie que...",
          options: [
            "Les enfants apprennent en résolvant des problèmes proches du match",
            "L'éducateur ne prépare rien",
            "Il ne faut jamais donner de consigne",
            "Le résultat remplace l'apprentissage"
          ],
          answerIndex: 0,
          explanation:
            "Le jeu donne du sens aux choix, aux gestes et aux déplacements."
        },
        {
          question: "Un bon critère de réussite doit être...",
          options: [
            "Vague",
            "Observable par l'enfant et l'éducateur",
            "Secret",
            "Toujours lié au score final"
          ],
          answerIndex: 1,
          explanation:
            "Un critère observable aide à comprendre ce qui est réussi et ce qui reste à travailler."
        },
        {
          question: "Pour différencier sans exclure, l'éducateur peut...",
          options: [
            "Retirer les enfants en difficulté",
            "Donner le même défi à tout prix",
            "Varier l'espace, le temps, les règles ou l'opposition",
            "Arrêter le jeu collectif"
          ],
          answerIndex: 2,
          explanation:
            "Ces leviers permettent à chaque enfant de rester dans une zone de progrès."
        },
        {
          question: "La répétition est efficace si elle...",
          options: [
            "Est déconnectée du jeu",
            "Dure toute la séance sans variation",
            "Supprime toute décision",
            "Garde du sens, du rythme et un objectif clair"
          ],
          answerIndex: 3,
          explanation:
            "Répéter avec intention aide à transférer les apprentissages vers le match."
        },
        {
          question: "Une question pédagogique utile est par exemple...",
          options: [
            "Qu'as-tu vu avant de passer ?",
            "Pourquoi tu rates toujours ?",
            "Tu veux vraiment jouer ?",
            "Qui est le plus faible ici ?"
          ],
          answerIndex: 0,
          explanation:
            "La question guide l'enfant vers l'analyse de son choix, sans jugement humiliant."
        }
      ],
      situations: [
        {
          id: "pedagogie-s3",
          title: "Correction trop longue",
          prompt:
            "Tu constates que tes corrections coupent souvent le rythme et les enfants décrochent. Comment ajustes-tu ?",
          correction: [
            "Choisir un seul point prioritaire.",
            "Utiliser une démonstration courte.",
            "Poser une question simple au groupe.",
            "Relancer rapidement l'action.",
            "Faire un bilan plus complet à la fin si nécessaire."
          ],
          explanation:
            "La pédagogie efficace respecte le temps d'attention et remet vite les enfants en mouvement."
        }
      ]
    },
    "developpement-enfant": {
      quiz: [
        {
          question: "La maturité d'un enfant concerne...",
          options: [
            "Uniquement son âge administratif",
            "Son développement physique, moteur, affectif et social",
            "Seulement sa taille",
            "Uniquement son poste sur le terrain"
          ],
          answerIndex: 1,
          explanation:
            "Deux enfants du même âge peuvent avoir des besoins très différents."
        },
        {
          question: "Un enfant plus petit ou moins puissant doit...",
          options: [
            "Être automatiquement écarté des oppositions",
            "Être comparé aux plus grands",
            "Recevoir des situations adaptées pour progresser",
            "Jouer uniquement gardien"
          ],
          answerIndex: 2,
          explanation:
            "L'adaptation évite les étiquettes et permet de travailler les qualités de chacun."
        },
        {
          question: "La fatigue chez un U10-U13 peut se voir par...",
          options: [
            "Uniquement le score",
            "La couleur du maillot",
            "Le silence des parents",
            "Une baisse d'attention, de coordination ou d'engagement"
          ],
          answerIndex: 3,
          explanation:
            "L'éducateur observe ces signaux pour adapter l'intensité ou les temps de récupération."
        },
        {
          question: "Face à une période de maladresse liée à la croissance, il faut...",
          options: [
            "Rassurer, simplifier et valoriser les efforts",
            "Se moquer gentiment",
            "Demander plus de puissance",
            "Changer définitivement le joueur de groupe"
          ],
          answerIndex: 0,
          explanation:
            "La croissance peut perturber temporairement les repères corporels."
        },
        {
          question: "L'éducateur doit éviter de...",
          options: [
            "Observer les différences de maturité",
            "Adapter ses attentes",
            "Étiqueter tôt un enfant comme faible ou incapable",
            "Valoriser les progrès"
          ],
          answerIndex: 2,
          explanation:
            "Les étiquettes limitent la confiance et ne respectent pas les rythmes de développement."
        }
      ],
      situations: [
        {
          id: "developpement-s3",
          title: "Écarts d'âge dans l'année",
          prompt:
            "Des enfants nés en début d'année semblent plus à l'aise physiquement que ceux nés en fin d'année. Comment en tiens-tu compte ?",
          correction: [
            "Observer sans réduire les enfants à leur gabarit.",
            "Équilibrer les groupes selon l'objectif de la situation.",
            "Valoriser les choix, l'adresse, l'entraide et les progrès.",
            "Proposer des règles qui ne favorisent pas seulement la puissance.",
            "Rester attentif aux enfants qui participent moins."
          ],
          explanation:
            "L'âge relatif peut influencer l'aisance ; l'éducateur veille à l'équité de formation."
        }
      ]
    },
    securite: {
      quiz: [
        {
          question: "Un atelier avec frappes doit prévoir...",
          options: [
            "Des trajectoires sécurisées et des zones d'attente protégées",
            "Des enfants placés derrière le but sans vigilance",
            "Un seul ballon pour vingt joueurs",
            "Aucune règle de circulation"
          ],
          answerIndex: 0,
          explanation:
            "Les trajectoires de ballon et de course doivent être lisibles pour éviter les collisions."
        },
        {
          question: "La sécurité affective signifie aussi...",
          options: [
            "Ne jamais faire d'opposition",
            "Protéger l'enfant des humiliations et des moqueries",
            "Interdire toute erreur",
            "Éviter de parler aux enfants"
          ],
          answerIndex: 1,
          explanation:
            "Un enfant apprend mieux quand il se sent respecté et autorisé à essayer."
        },
        {
          question: "En cas de forte chaleur, l'éducateur doit surtout...",
          options: [
            "Ignorer la météo",
            "Augmenter l'intensité pour finir vite",
            "Adapter l'activité, prévoir des pauses et surveiller les signes de fatigue",
            "Supprimer toute hydratation"
          ],
          answerIndex: 2,
          explanation:
            "Les conditions météo modifient les risques et demandent une adaptation."
        },
        {
          question: "Un but mobile ou du matériel instable doit être...",
          options: [
            "Laissé tel quel si la séance est courte",
            "Utilisé uniquement par les plus grands",
            "Ignoré si personne ne se plaint",
            "Sécurisé ou retiré avant l'activité"
          ],
          answerIndex: 3,
          explanation:
            "La prévention se fait avant l'accident, pas après."
        },
        {
          question: "Après un incident, il est important de...",
          options: [
            "Informer les personnes concernées selon le cadre du club",
            "Ne rien dire pour éviter les questions",
            "Accuser le groupe",
            "Reprendre sans vérifier l'état de l'enfant"
          ],
          answerIndex: 0,
          explanation:
            "La transmission d'information protège l'enfant, l'éducateur et le club."
        }
      ],
      situations: [
        {
          id: "securite-s3",
          title: "Collision évitable",
          prompt:
            "Deux ateliers se croisent et plusieurs enfants manquent de se percuter. Comment réagis-tu ?",
          correction: [
            "Stopper immédiatement les ateliers concernés.",
            "Modifier les sens de circulation ou séparer les espaces.",
            "Réexpliquer les zones d'attente et de passage.",
            "Relancer seulement quand l'organisation est claire.",
            "Rester placé pour voir les deux zones sensibles."
          ],
          explanation:
            "La sécurité passe par une organisation visible et une surveillance active."
        }
      ]
    },
    "challenge-criterium": {
      quiz: [
        {
          question: "Avant un challenge, l'éducateur doit surtout vérifier...",
          options: [
            "Les informations transmises par le club ou l'instance locale",
            "Les rumeurs des réseaux sociaux",
            "Le score prévu",
            "La météo du mois précédent"
          ],
          answerIndex: 0,
          explanation:
            "Les formats peuvent varier ; il faut s'appuyer sur les consignes locales du moment."
        },
        {
          question: "Une bonne organisation de plateau cherche à limiter...",
          options: [
            "Le plaisir",
            "Les temps morts et les incompréhensions",
            "Le temps de jeu",
            "Les échanges entre éducateurs"
          ],
          answerIndex: 1,
          explanation:
            "Des transitions claires gardent les enfants actifs et le climat serein."
        },
        {
          question: "Le résultat d'un challenge U10-U13 doit être replacé dans...",
          options: [
            "Une logique de pression",
            "Une sélection définitive",
            "Une expérience de formation",
            "Une sanction collective"
          ],
          answerIndex: 2,
          explanation:
            "La rencontre sert à apprendre, respecter et jouer, pas à enfermer les enfants dans le score."
        },
        {
          question: "Quand plusieurs adultes encadrent, il faut...",
          options: [
            "Laisser chacun donner ses consignes",
            "Éviter toute coordination",
            "Changer les rôles sans prévenir",
            "Clarifier les rôles avant et pendant l'événement"
          ],
          answerIndex: 3,
          explanation:
            "Des rôles clairs évitent les doublons, les oublis et les messages contradictoires."
        },
        {
          question: "Une convocation utile aux familles doit être...",
          options: [
            "Claire, pratique et transmise assez tôt",
            "Volontairement floue",
            "Centrée uniquement sur l'adversaire",
            "Réservée aux joueurs titulaires"
          ],
          answerIndex: 0,
          explanation:
            "Les familles ont besoin d'informations fiables pour accompagner sereinement."
        }
      ],
      situations: [
        {
          id: "challenge-s3",
          title: "Équipe qui perd largement",
          prompt:
            "Ton équipe perd largement pendant un critérium et les enfants baissent la tête. Que fais-tu ?",
          correction: [
            "Recentrer sur un objectif de jeu atteignable.",
            "Valoriser un comportement positif : effort, entraide, respect.",
            "Adapter les rotations pour garder tout le monde engagé.",
            "Éviter les reproches liés au score.",
            "Faire un bilan court sur ce qui a été appris."
          ],
          explanation:
            "Même dans la difficulté, l'éducateur maintient la dignité, l'envie et l'apprentissage."
        }
      ]
    },
    "climat-entrainement": {
      quiz: [
        {
          question: "Un accueil positif en début de séance permet...",
          options: [
            "De créer un climat de confiance et d'engagement",
            "De remplacer toute organisation",
            "D'éviter toute règle",
            "De choisir les meilleurs joueurs"
          ],
          answerIndex: 0,
          explanation:
            "L'accueil donne le ton et aide les enfants à entrer dans l'activité."
        },
        {
          question: "Quand le climat devient tendu, il faut d'abord...",
          options: [
            "Hausser la tension",
            "Sécuriser, calmer et rappeler le cadre",
            "Quitter la séance",
            "Ignorer tous les signaux"
          ],
          answerIndex: 1,
          explanation:
            "Un cadre calme permet de reprendre l'activité sans laisser la tension s'installer."
        },
        {
          question: "L'entraide entre joueurs peut être favorisée par...",
          options: [
            "Des défis collectifs et des rôles valorisants",
            "La comparaison permanente",
            "L'isolement des joueurs en difficulté",
            "Les moqueries tolérées"
          ],
          answerIndex: 0,
          explanation:
            "Les objectifs collectifs encouragent la coopération et le respect."
        },
        {
          question: "Un groupe qui ose essayer est souvent un groupe où...",
          options: [
            "L'erreur est humiliée",
            "Le cadre est imprévisible",
            "Les enfants savent qu'ils peuvent se tromper et recommencer",
            "Seuls les meilleurs ont le droit de tenter"
          ],
          answerIndex: 2,
          explanation:
            "Le droit à l'erreur soutient la confiance et les prises d'initiative."
        },
        {
          question: "La motivation durable vient surtout de...",
          options: [
            "La peur de sortir",
            "La pression des adultes",
            "La critique constante",
            "Le plaisir, le progrès et le sentiment d'appartenance"
          ],
          answerIndex: 3,
          explanation:
            "Un enfant revient et s'engage quand il se sent utile, respecté et en progrès."
        }
      ],
      situations: [
        {
          id: "climat-s3",
          title: "Deux enfants se disputent",
          prompt:
            "Deux enfants se disputent après un contact et le groupe commence à prendre parti. Que fais-tu ?",
          correction: [
            "Séparer calmement et sécuriser le groupe.",
            "Faire redescendre l'émotion avant de parler.",
            "Écouter brièvement chacun sans tribunal public.",
            "Rappeler la règle de respect et demander une réparation adaptée.",
            "Relancer avec un objectif collectif simple."
          ],
          explanation:
            "Le climat se protège par une intervention rapide, juste et orientée vers la reprise."
        }
      ]
    },
    "gestion-parents": {
      quiz: [
        {
          question: "Une réunion ou un message de début de saison sert à...",
          options: [
            "Clarifier le cadre, les rôles et les valeurs du groupe",
            "Promettre un temps de jeu identique à chaque match",
            "Donner les compositions à l'avance",
            "Éviter toute discussion future"
          ],
          answerIndex: 0,
          explanation:
            "Un cadre partagé prévient les malentendus et protège les enfants."
        },
        {
          question: "Quand un parent est inquiet, l'éducateur doit...",
          options: [
            "Le ridiculiser",
            "Écouter, reformuler et répondre de façon factuelle",
            "Répondre uniquement par message au groupe",
            "Demander à l'enfant de régler le sujet"
          ],
          answerIndex: 1,
          explanation:
            "L'écoute calme permet de traiter le problème sans tension inutile."
        },
        {
          question: "Les parents peuvent être associés positivement en...",
          options: [
            "Les laissant arbitrer les consignes sportives",
            "Leur demandant de critiquer l'adversaire",
            "Leur donnant des rôles pratiques clairs",
            "Les opposant entre eux"
          ],
          answerIndex: 2,
          explanation:
            "Transport, goûter, accueil ou aide matérielle peuvent soutenir le projet éducatif."
        },
        {
          question: "Une consigne contradictoire parent-éducateur risque surtout de...",
          options: [
            "Rendre l'enfant plus autonome immédiatement",
            "Améliorer le calme",
            "Supprimer la pression",
            "Mettre l'enfant en conflit de loyauté"
          ],
          answerIndex: 3,
          explanation:
            "L'enfant peut ne plus oser décider s'il reçoit deux messages opposés."
        },
        {
          question: "En cas de désaccord important, le bon réflexe est de...",
          options: [
            "Fixer un échange au calme avec un cadre clair",
            "Débattre devant tous les enfants",
            "Répondre avec agressivité",
            "Publier le conflit"
          ],
          answerIndex: 0,
          explanation:
            "On protège les enfants et on traite le désaccord dans un temps adapté."
        }
      ],
      situations: [
        {
          id: "parents-s3",
          title: "Parent qui critique l'éducateur",
          prompt:
            "Un parent critique ouvertement tes choix pendant une séance. Comment réponds-tu ?",
          correction: [
            "Ne pas répondre sur le même ton devant les enfants.",
            "Rappeler brièvement que la séance doit rester sereine.",
            "Proposer un échange après l'entraînement.",
            "Écouter le point de vue puis revenir aux objectifs éducatifs.",
            "Associer un responsable du club si la tension persiste."
          ],
          explanation:
            "La relation avec les parents se gère avec respect, cadre et protection de l'enfant."
        }
      ]
    },
    "violence-discrimination-respect": {
      quiz: [
        {
          question: "Une discrimination peut concerner...",
          options: [
            "L'origine, le genre, l'apparence, le handicap, la religion supposée ou toute différence",
            "Uniquement les adultes",
            "Seulement les matchs officiels",
            "Uniquement les réseaux sociaux"
          ],
          answerIndex: 0,
          explanation:
            "L'éducateur doit être attentif à toutes les formes d'exclusion ou de stigmatisation."
        },
        {
          question: "Face à une moquerie répétée, il faut...",
          options: [
            "Attendre que la victime s'habitue",
            "Intervenir, protéger et rappeler le cadre",
            "Demander au groupe de rire moins fort",
            "Ignorer si le joueur continue de jouer"
          ],
          answerIndex: 1,
          explanation:
            "La répétition peut devenir une violence ; elle doit être traitée clairement."
        },
        {
          question: "Le respect de l'arbitre s'apprend aussi...",
          options: [
            "En contestant devant les enfants",
            "En ne parlant jamais des règles",
            "En donnant des responsabilités d'arbitrage et en acceptant l'erreur",
            "En sanctionnant chaque question"
          ],
          answerIndex: 2,
          explanation:
            "Vivre le rôle d'arbitre aide à comprendre la difficulté de décider."
        },
        {
          question: "Après un propos violent, la réparation peut prendre la forme...",
          options: [
            "D'une humiliation publique",
            "D'un silence imposé sans sens",
            "D'une exclusion définitive automatique dans tous les cas",
            "D'excuses, d'un échange éducatif ou d'une action réparatrice adaptée"
          ],
          answerIndex: 3,
          explanation:
            "La réparation doit responsabiliser sans humilier, selon la gravité et le cadre du club."
        },
        {
          question: "Un éducateur exemplaire face à la violence...",
          options: [
            "Garde son calme et traite les faits",
            "Répond par la menace",
            "Banalise tout",
            "Cherche un coupable à humilier"
          ],
          answerIndex: 0,
          explanation:
            "Le calme de l'adulte aide à sécuriser et à traiter le comportement avec justesse."
        }
      ],
      situations: [
        {
          id: "respect-s3",
          title: "Enfant victime de moqueries",
          prompt:
            "Un enfant subit des moqueries sur son niveau et commence à ne plus vouloir venir. Que fais-tu ?",
          correction: [
            "Prendre la situation au sérieux et écouter l'enfant.",
            "Stopper clairement les moqueries auprès du groupe concerné.",
            "Rappeler le cadre de respect et les conséquences.",
            "Redonner à l'enfant une place valorisante dans l'activité.",
            "Informer les responsables du club et les familles si nécessaire."
          ],
          explanation:
            "La protection de l'enfant et la lutte contre l'exclusion sont prioritaires."
        }
      ]
    },
    "education-integree-pef": {
      quiz: [
        {
          question: "Le PEF est efficace quand il est...",
          options: [
            "Vécu dans des situations concrètes du club",
            "Réservé à un affichage",
            "Déconnecté de la pratique",
            "Utilisé seulement en cas de punition"
          ],
          answerIndex: 0,
          explanation:
            "Les valeurs s'apprennent dans les comportements quotidiens."
        },
        {
          question: "Une action santé simple peut être...",
          options: [
            "Ignorer la fatigue",
            "Parler d'hydratation et de récupération au bon moment",
            "Interdire toutes les pauses",
            "Valoriser seulement la douleur"
          ],
          answerIndex: 1,
          explanation:
            "Les messages santé doivent être courts, concrets et reliés à la séance."
        },
        {
          question: "Une action citoyenne dans la séance peut consister à...",
          options: [
            "Laisser le matériel aux autres",
            "Refuser les rôles",
            "Partager les responsabilités : arbitrer, ranger, accueillir",
            "Ne jamais parler du collectif"
          ],
          answerIndex: 2,
          explanation:
            "Les responsabilités adaptées rendent les valeurs visibles."
        },
        {
          question: "Pour parler d'environnement, l'éducateur peut...",
          options: [
            "Faire un cours très long pendant l'entraînement",
            "Ne jamais aborder le sujet",
            "Accuser les enfants",
            "Relier le rangement, les déchets et le respect des installations"
          ],
          answerIndex: 3,
          explanation:
            "Un geste concret et répété est plus efficace qu'un discours abstrait."
        },
        {
          question: "Le message éducatif doit rester...",
          options: [
            "Court, positif et relié à l'action",
            "Long et culpabilisant",
            "Réservé aux meilleurs",
            "Sans lien avec la séance"
          ],
          answerIndex: 0,
          explanation:
            "Un message bref et vécu a plus de chance d'être compris et retenu."
        }
      ],
      situations: [
        {
          id: "pef-s3",
          title: "Respect des installations",
          prompt:
            "Après l'entraînement, tu trouves bouteilles et chasubles au sol. Comment en fais-tu un moment éducatif ?",
          correction: [
            "Rassembler calmement le groupe.",
            "Relier le rangement au respect du club et des bénévoles.",
            "Répartir des rôles courts et précis.",
            "Valoriser le groupe une fois l'espace propre.",
            "Installer un rituel simple pour les prochaines séances."
          ],
          explanation:
            "Le PEF se construit dans les habitudes concrètes du quotidien."
        }
      ]
    },
    "evaluation-action": {
      quiz: [
        {
          question: "Un bon bilan d'éducateur s'appuie d'abord sur...",
          options: [
            "Des faits observables",
            "Des impressions seules",
            "Le bruit autour du terrain",
            "La satisfaction d'un seul parent"
          ],
          answerIndex: 0,
          explanation:
            "Les faits aident à ajuster sans sur-réagir."
        },
        {
          question: "Si les enfants ont peu touché le ballon, cela peut indiquer...",
          options: [
            "Une séance forcément réussie",
            "Un problème d'organisation ou de temps d'activité",
            "Un manque de talent définitif",
            "Un objectif trop éducatif"
          ],
          answerIndex: 1,
          explanation:
            "Le temps d'activité est un indicateur simple de qualité de séance."
        },
        {
          question: "L'évaluation doit permettre de préparer...",
          options: [
            "Une sanction générale",
            "Un classement des familles",
            "La séance suivante avec un ajustement précis",
            "Une critique publique"
          ],
          answerIndex: 2,
          explanation:
            "Évaluer sert à améliorer la continuité pédagogique."
        },
        {
          question: "Un thème faible dans les QCM doit conduire à...",
          options: [
            "Ignorer le sujet",
            "Changer toute l'application",
            "Abandonner la certification",
            "Relire la fiche, refaire les questions et traiter une situation"
          ],
          answerIndex: 3,
          explanation:
            "La progression vient d'un travail ciblé et répété."
        },
        {
          question: "Une auto-évaluation saine doit rester...",
          options: [
            "Bienveillante, lucide et orientée vers le progrès",
            "Culpabilisante",
            "Basée sur le hasard",
            "Uniquement centrée sur les erreurs"
          ],
          answerIndex: 0,
          explanation:
            "L'éducateur progresse mieux quand il identifie des pistes concrètes sans se dévaloriser."
        }
      ],
      situations: [
        {
          id: "evaluation-s3",
          title: "Thème faible après plusieurs QCM",
          prompt:
            "Tes scores restent faibles sur la pédagogie et la posture. Comment organises-tu ta révision ?",
          correction: [
            "Identifier précisément les questions ratées.",
            "Relire les fiches correspondantes.",
            "Écouter les résumés audio pour mémoriser les idées clés.",
            "Traiter une mise en situation à voix haute.",
            "Refaire un QCM court puis le QCM complet."
          ],
          explanation:
            "Une révision efficace cible les faiblesses et alterne lecture, oral et entraînement."
        }
      ]
    }
  };

  for (const theme of window.CFI_REVISION_DATA.themes) {
    const extra = extras[theme.id];
    if (!extra) continue;

    const existingQuestions = new Set(theme.quiz.map((item) => item.question));
    for (const question of extra.quiz) {
      if (!existingQuestions.has(question.question)) {
        theme.quiz.push(question);
      }
    }

    const existingSituations = new Set(theme.situations.map((item) => item.id));
    for (const situation of extra.situations) {
      if (!existingSituations.has(situation.id)) {
        theme.situations.push(situation);
      }
    }
  }
})();

(() => {
  const themes = window.CFI_REVISION_DATA.themes;
  if (themes.some((theme) => theme.id === "connaissance-du-jeu")) return;

  themes.push({
    id: "connaissance-du-jeu",
    title: "La connaissance du jeu",
    shortTitle: "Connaissance du jeu",
    duration: "25 min",
    summary:
      "Comprendre la logique interne du football pour mieux lire le jeu, aider les joueurs à décider et concevoir des séances adaptées.",
    sheet: [
      "Le système entraînement permet de concevoir des entraînements adaptés au jeu et aux joueurs. Il repose sur trois éléments qui interagissent : l'entraîneur, le jeu et le joueur. Pour former efficacement, l'éducateur doit donc comprendre le jeu, observer les joueurs et adapter son intervention.",
      "Le football peut se définir comme un jeu collectif, codifié par des règles établies, qui oppose deux équipes sur un terrain délimité. Dans l'esprit du module, il ne suffit pas de dire qu'il faut marquer des buts : il faut comprendre ce qui organise l'activité.",
      "Le football crée en permanence de l'incertitude. Les joueurs doivent lire ce qui se passe, choisir au bon moment et agir dans le bon espace. L'opposition, la succession attaque-défense, les déplacements des joueurs et du ballon rendent le jeu changeant.",
      "Les trois grandes incertitudes à retenir sont : l'incertitude événementielle, c'est-à-dire que va-t-il se passer ; l'incertitude temporelle, c'est-à-dire à quel moment ; et l'incertitude spatiale, c'est-à-dire où cela va se passer.",
      "Pour répondre à ces incertitudes, les joueurs doivent communiquer entre partenaires et mettre l'adversaire en crise. On peut mettre l'adversaire en crise de nombre, en crise de temps ou en crise d'espace.",
      "En possession du ballon, on peut repérer quatre grands espaces de jeu : l'espace de conservation, l'espace de progression, l'espace de déséquilibre et l'espace de finition. Ces repères aident à comprendre où jouer et pourquoi.",
      "L'espace de jeu effectif, aussi appelé bloc équipe, correspond au placement des joueurs à un instant donné. Il permet de lire les distances entre joueurs, les zones utiles, les espaces libres et les possibilités de progression."
    ],
    essentials: [
      "Système entraînement = entraîneur, jeu, joueur.",
      "Football = jeu collectif, codifié par des règles, opposant deux équipes sur un terrain délimité.",
      "Le football est un contexte permanent d'incertitudes.",
      "Incertitude événementielle = que va-t-il se passer ?",
      "Incertitude temporelle = à quel moment ?",
      "Incertitude spatiale = où cela va se passer ?",
      "Répondre aux incertitudes = communiquer et créer des crises chez l'adversaire.",
      "Crises à créer = nombre, temps, espace.",
      "Espaces de jeu = conservation, progression, déséquilibre, finition.",
      "Espace de jeu effectif = bloc équipe à un instant T."
    ],
    mistakes: [
      "Réduire la connaissance du jeu à une liste de gestes techniques.",
      "Oublier que le jeu, le joueur et l'entraîneur interagissent.",
      "Confondre incertitude événementielle, temporelle et spatiale.",
      "Parler uniquement de marquer des buts sans expliquer la logique du football.",
      "Ne pas relier la lecture du jeu au positionnement et à la décision.",
      "Oublier la communication entre partenaires.",
      "Confondre espace de progression et espace de finition.",
      "Analyser un joueur sans tenir compte du bloc équipe et de l'opposition."
    ],
    oralScript:
      "Pour connaître ce module par cœur, retiens d'abord la phrase clé : le système entraînement repose sur l'entraîneur, le jeu et le joueur. Le football est un jeu collectif, codifié par des règles, qui oppose deux équipes sur un terrain délimité. L'opposition crée trois incertitudes : événementielle, que va-t-il se passer ; temporelle, à quel moment ; spatiale, où cela va se passer. Pour y répondre, les joueurs communiquent et cherchent à mettre l'adversaire en crise de nombre, de temps ou d'espace. En possession, on repère quatre espaces : conservation, progression, déséquilibre et finition. L'espace de jeu effectif, c'est le bloc équipe à un instant donné.",
    quiz: [
      {
        question: "Quels sont les 3 éléments principaux du système entraînement ?",
        options: [
          "L'entraîneur, le jeu et le joueur",
          "Le score, le classement et le public",
          "Le terrain, les vestiaires et les chasubles",
          "La vitesse, la force et l'endurance"
        ],
        answerIndex: 0,
        explanation:
          "Le module présente le système entraînement comme une relation entre l'entraîneur, le jeu et le joueur."
      },
      {
        question: "Dans ce module, la connaissance du jeu sert surtout à...",
        options: [
          "Concevoir des entraînements adaptés au jeu et aux joueurs",
          "Apprendre uniquement les dimensions du terrain",
          "Remplacer l'observation des joueurs",
          "Supprimer les situations avec opposition"
        ],
        answerIndex: 0,
        explanation:
          "Comprendre le jeu aide à construire des séances pertinentes et adaptées au niveau réel des joueurs."
      },
      {
        question: "Quelle définition correspond le mieux au football dans ce module ?",
        options: [
          "Un sport où l'objectif est seulement de courir plus vite",
          "Un jeu collectif codifié par des règles, opposant deux équipes sur un terrain délimité",
          "Une succession de gestes techniques sans opposition",
          "Un jeu individuel où chaque joueur agit seul"
        ],
        answerIndex: 1,
        explanation:
          "La synthèse du module insiste sur le jeu collectif, les règles établies, l'opposition de deux équipes et le terrain délimité."
      },
      {
        question: "Quel élément structure l'activité football selon l'astuce du coach ?",
        options: [
          "Un ensemble de règles établies",
          "Le hasard uniquement",
          "La seule condition physique",
          "Les préférences des spectateurs"
        ],
        answerIndex: 0,
        explanation:
          "Le football est codifié : les règles structurent l'activité et donnent un cadre commun."
      },
      {
        question: "Pourquoi développer la connaissance de la logique du football ?",
        options: [
          "Pour améliorer la lecture du jeu, le positionnement, la prise de décision et l'adaptabilité",
          "Pour éviter de communiquer entre partenaires",
          "Pour jouer sans tenir compte de l'adversaire",
          "Pour travailler uniquement la condition physique"
        ],
        answerIndex: 0,
        explanation:
          "La connaissance du jeu aide les joueurs à mieux comprendre, décider, s'adapter et se positionner."
      },
      {
        question: "Quels sont les 3 types d'incertitudes à connaître ?",
        options: [
          "Technique, mentale et physique",
          "Offensive, défensive et administrative",
          "Événementielle, temporelle et spatiale",
          "Individuelle, collective et médicale"
        ],
        answerIndex: 2,
        explanation:
          "Le module distingue trois incertitudes : ce qui va se passer, quand cela va se passer et où cela va se passer."
      },
      {
        question: "L'incertitude événementielle répond à quelle question ?",
        options: [
          "Que va-t-il se passer ?",
          "À quel moment ?",
          "Où cela va se passer ?",
          "Qui a gagné le match précédent ?"
        ],
        answerIndex: 0,
        explanation:
          "Événementielle renvoie à l'événement à venir : que va-t-il se passer dans le jeu ?"
      },
      {
        question: "L'incertitude temporelle répond à quelle question ?",
        options: [
          "Où cela va se passer ?",
          "À quel moment ?",
          "Combien de joueurs sont convoqués ?",
          "Qui arbitre la rencontre ?"
        ],
        answerIndex: 1,
        explanation:
          "Temporelle renvoie au moment de l'action : quand faut-il agir ?"
      },
      {
        question: "L'incertitude spatiale répond à quelle question ?",
        options: [
          "Quel score faut-il faire ?",
          "Quel maillot porter ?",
          "Où cela va se passer ?",
          "Quel joueur est le plus rapide ?"
        ],
        answerIndex: 2,
        explanation:
          "Spatiale renvoie au lieu de l'action : dans quelle zone ou quel espace va se jouer la situation ?"
      },
      {
        question: "Pour répondre aux incertitudes, jouer au football nécessite notamment de...",
        options: [
          "Communiquer entre partenaires et mettre l'adversaire en crise",
          "Éviter toute décision",
          "Rester toujours immobile",
          "Jouer uniquement vers l'arrière"
        ],
        answerIndex: 0,
        explanation:
          "La synthèse indique que répondre aux incertitudes nécessite de communiquer et de créer des crises chez l'adversaire."
      },
      {
        question: "Quelles crises peut-on chercher à créer chez l'adversaire ?",
        options: [
          "Crise de bruit, de couleur et de matériel",
          "Crise de nombre, de temps et d'espace",
          "Crise de météo, de public et de transport",
          "Crise de vestiaire, d'arbitrage et de classement"
        ],
        answerIndex: 1,
        explanation:
          "Le module cite trois réponses : mettre l'adversaire en crise de nombre, de temps et d'espace."
      },
      {
        question: "Quels sont les 4 espaces de jeu en possession du ballon ?",
        options: [
          "Échauffement, duel, pause et récupération",
          "Gardien, défenseur, milieu et attaquant",
          "Conservation, progression, déséquilibre et finition",
          "Technique, physique, mental et tactique"
        ],
        answerIndex: 2,
        explanation:
          "Les captures présentent quatre espaces : conservation, progression, déséquilibre et finition."
      },
      {
        question: "L'espace de jeu effectif correspond à...",
        options: [
          "La distance entre le stade et le vestiaire",
          "La zone uniquement autour du gardien",
          "Le score attendu à la fin du match",
          "Le placement des joueurs, ou bloc équipe, à un instant donné"
        ],
        answerIndex: 3,
        explanation:
          "Le module définit l'espace de jeu effectif comme le bloc équipe : le placement des joueurs à un instant T."
      },
      {
        question: "Amener le ballon en alternance de l'arrière à l'avant et de gauche à droite permet...",
        options: [
          "D'apporter de la variété et de générer de l'incertitude chez l'adversaire",
          "De supprimer toute incertitude",
          "De rendre les partenaires inutiles",
          "D'empêcher la progression"
        ],
        answerIndex: 0,
        explanation:
          "L'astuce du coach indique que varier les zones de jeu augmente l'incertitude pour l'adversaire."
      }
    ],
    situations: [
      {
        id: "connaissance-jeu-s1",
        title: "Joueurs mal positionnés",
        prompt:
          "Ton équipe a du mal à se positionner, crée peu d'espaces et lit difficilement le jeu. Que travailles-tu ?",
        correction: [
          "Revenir à la logique du jeu : opposition, partenaires, adversaires, espaces.",
          "Donner des repères simples sur l'espace de jeu effectif : distances, largeur, profondeur.",
          "Utiliser des jeux avec objectifs de conservation ou de progression.",
          "Questionner les joueurs : où est l'espace libre, quand jouer, vers qui communiquer ?",
          "Valoriser la prise d'information avant la prise de décision."
        ],
        explanation:
          "La connaissance du jeu aide les joueurs à lire l'espace, se positionner et décider dans un contexte d'opposition."
      },
      {
        id: "connaissance-jeu-s2",
        title: "Manque de coordination",
        prompt:
          "Tes joueurs communiquent peu, ne se comprennent pas et perdent vite le ballon. Comment relies-tu cela au module ?",
        correction: [
          "Rappeler que chaque comportement donne des informations aux partenaires et aux adversaires.",
          "Mettre en place des situations où la communication est nécessaire.",
          "Travailler la coordination autour du porteur : appui, soutien, largeur, profondeur.",
          "Faire verbaliser les choix : que vois-tu, à quel moment joues-tu, où peux-tu aider ?",
          "Créer des règles qui valorisent l'aide au porteur et la disponibilité."
        ],
        explanation:
          "Répondre aux incertitudes nécessite de communiquer entre partenaires et de partager des repères de jeu."
      },
      {
        id: "connaissance-jeu-s3",
        title: "Mauvaises décisions en possession",
        prompt:
          "En possession, tes joueurs choisissent souvent une option fermée alors qu'un espace libre existe ailleurs. Que fais-tu ?",
        correction: [
          "Faire observer les quatre espaces : conservation, progression, déséquilibre, finition.",
          "Demander aux joueurs d'identifier où se situe l'espace libre.",
          "Utiliser une situation qui oblige à changer de zone ou de côté.",
          "Insister sur la prise d'information avant de recevoir.",
          "Chercher à mettre l'adversaire en crise de temps ou d'espace."
        ],
        explanation:
          "Le joueur doit lire l'incertitude spatiale et temporelle pour choisir une option plus pertinente."
      }
    ]
  });
})();

(() => {
  const theme = window.CFI_REVISION_DATA.themes.find(
    (item) => item.id === "connaissance-du-jeu"
  );
  if (!theme) return;

  theme.summary =
    "Comprendre la logique interne du football, le rapport d'opposition, les niveaux de jeu et les phases pour mieux observer et entraîner.";

  const sheetAdditions = [
    "Le rapport d'opposition aide l'éducateur à déterminer le niveau de jeu des joueurs. Une bonne connaissance du football et une observation précise permettent de fixer des objectifs d'apprentissage adaptés.",
    "Les actions des joueurs prennent du sens selon trois moments principaux du jeu : la possession du ballon, la non-possession du ballon et le changement de possession du ballon. Une équipe en possession est en situation offensive ; une équipe en non-possession est en situation défensive.",
    "Le module distingue cinq phases de jeu : conservation-progression, déséquilibre-finition, opposition à la progression du ballon, protection du but et transition.",
    "Quatre niveaux de jeu sont identifiés. Le débutant, souvent U7-U9, joue surtout en grappe autour du ballon. L'initié, souvent U9-U11-U13, commence à s'organiser par poste près du ballon. Le confirmé, souvent U13-U15-U19-Seniors, construit un réseau d'échanges et occupe mieux largeur et profondeur. L'expert, niveau national ou international, maîtrise un jeu rapide, précis, les transitions et l'adaptation au rapport de force.",
    "Chez le débutant, les objectifs sont de construire la cible à attaquer et de découvrir partenaire et adversaire dans la recherche de la possession. Chez l'initié, on développe appui, soutien, démarquage, protection du ballon, feintes et contre-pied individuel. Chez le confirmé, on développe récupération collective, attaque placée ou rapide, jeu combiné et contre-pied collectif. Chez l'expert, on affine l'organisation collective, l'adaptation offensive et l'orientation du jeu."
  ];

  const essentialsAdditions = [
    "Rapport d'opposition = observer le niveau de jeu pour fixer les bons objectifs.",
    "3 moments du jeu = possession, non-possession, changement de possession.",
    "Possession = situation offensive ; non-possession = situation défensive.",
    "5 phases = conservation-progression, déséquilibre-finition, opposition à la progression, protection du but, transition.",
    "4 niveaux = débutant, initié, confirmé, expert.",
    "Débutant = organisation en grappe, cible peu construite, actions uniques sur le ballon.",
    "Initié = organisation par poste proche du ballon, dribble encore très utilisé, jeu souvent direct.",
    "Confirmé = largeur/profondeur, réseau d'échanges construit, défense en bloc.",
    "Expert = jeu rapide et précis, transitions maîtrisées, adaptation au rapport de force."
  ];

  const mistakesAdditions = [
    "Proposer les mêmes objectifs à un débutant et à un joueur confirmé.",
    "Observer uniquement la technique sans regarder l'organisation collective.",
    "Oublier les trois moments du jeu dans l'analyse.",
    "Confondre phase de transition et simple déplacement.",
    "Chercher trop tôt un jeu expert avec des joueurs encore débutants.",
    "Ne pas relier observation générale et objectifs d'apprentissage."
  ];

  const quizAdditions = [
    {
      question: "À quoi sert la détermination des niveaux de jeu ?",
      options: [
        "À classer définitivement les joueurs",
        "À déterminer le niveau des joueurs et fixer les bons objectifs d'apprentissage",
        "À supprimer l'observation en séance",
        "À choisir uniquement les meilleurs joueurs"
      ],
      answerIndex: 1,
      explanation:
        "Observer le rapport d'opposition aide à proposer des objectifs adaptés au niveau réel des joueurs."
    },
    {
      question: "Quels sont les 3 moments principaux du jeu ?",
      options: [
        "Échauffement, match, étirements",
        "Possession, non-possession, changement de possession",
        "Technique, physique, mental",
        "Attaque, pause, récupération"
      ],
      answerIndex: 1,
      explanation:
        "La synthèse du module distingue possession, non-possession et changement de possession du ballon."
    },
    {
      question: "Une équipe en possession du ballon est en situation...",
      options: ["Offensive", "Défensive", "Administrative", "Neutre"],
      answerIndex: 0,
      explanation:
        "Quand l'équipe possède le ballon, elle est en situation offensive."
    },
    {
      question: "Une équipe en non-possession du ballon est en situation...",
      options: ["Offensive", "Défensive", "De finition", "De repos"],
      answerIndex: 1,
      explanation:
        "Quand l'équipe n'a pas le ballon, elle est en situation défensive."
    },
    {
      question: "Quelles sont les 5 phases de jeu citées dans le module ?",
      options: [
        "Conservation-progression, déséquilibre-finition, opposition à la progression, protection du but, transition",
        "Échauffement, opposition, sprint, frappe, retour au calme",
        "Technique, tactique, physique, mental, administratif",
        "Passe, dribble, tir, jonglage, conduite"
      ],
      answerIndex: 0,
      explanation:
        "Les cinq phases organisent la lecture du rapport d'opposition dans les différents moments du jeu."
    },
    {
      question: "Quels sont les 4 niveaux de jeu identifiés ?",
      options: [
        "Gardien, défenseur, milieu, attaquant",
        "Débutant, initié, confirmé, expert",
        "Petit, moyen, grand, très grand",
        "Technique, physique, mental, social"
      ],
      answerIndex: 1,
      explanation:
        "Le module identifie quatre niveaux : débutant, initié, confirmé et expert."
    },
    {
      question: "Quel comportement correspond plutôt au joueur débutant ?",
      options: [
        "Organisation en grappe autour du ballon",
        "Réseau d'échanges abouti",
        "Maîtrise des transitions à la perte",
        "Défense en bloc compact"
      ],
      answerIndex: 0,
      explanation:
        "Le débutant est souvent centré sur le ballon avec une organisation en grappe."
    },
    {
      question: "Chez le débutant, quels objectifs d'apprentissage sont prioritaires ?",
      options: [
        "Construire la notion de cible à attaquer et découvrir partenaire/adversaire",
        "Optimiser le jeu long et le renversement",
        "Maîtriser les transitions de haut niveau",
        "Organiser une récupération collective complexe"
      ],
      answerIndex: 0,
      explanation:
        "Le module associe le niveau débutant à la cible à attaquer et à la découverte partenaire/adversaire."
    },
    {
      question: "Quel comportement correspond plutôt à l'initié ?",
      options: [
        "Organisation par poste proche du ballon, jeu souvent direct et dribble très présent",
        "Jeu totalement abouti en largeur et profondeur",
        "Aucune orientation vers le ballon",
        "Maîtrise parfaite des attaques placées longues"
      ],
      answerIndex: 0,
      explanation:
        "L'initié commence à s'organiser, mais le jeu reste souvent proche du ballon et le dribble reste très utilisé."
    },
    {
      question: "Quels apprentissages sont liés au niveau initié ?",
      options: [
        "Appui, soutien, démarquage, protection du ballon, feinte et contre-pied individuel",
        "Uniquement la course sans ballon",
        "Uniquement la musculation",
        "L'entraînement individualisé expert seulement"
      ],
      answerIndex: 0,
      explanation:
        "Le niveau initié permet d'installer des repères autour du porteur et des réponses techniques variables."
    },
    {
      question: "Quel comportement correspond plutôt au confirmé ?",
      options: [
        "Espace de jeu effectif en largeur/profondeur, réseau d'échanges construit, défense en bloc",
        "Organisation en essaim autour du ballon",
        "Cible non construite",
        "Actions uniquement explosives sur le ballon"
      ],
      answerIndex: 0,
      explanation:
        "Le confirmé utilise mieux largeur, profondeur, communication et organisation collective."
    },
    {
      question: "Quels objectifs correspondent au niveau confirmé ?",
      options: [
        "Récupération collective, attaque placée ou rapide, jeu combiné et contre-pied collectif",
        "Découvrir seulement la cible à attaquer",
        "Rester centré uniquement sur le ballon",
        "Éviter les choix dans les exercices"
      ],
      answerIndex: 0,
      explanation:
        "Le confirmé peut travailler des notions collectives plus élaborées en attaque et en défense."
    },
    {
      question: "Quel comportement correspond plutôt au niveau expert ?",
      options: [
        "Jeu rapide et précis, transitions maîtrisées, réseau d'échanges abouti",
        "Jeu en grappe",
        "Cible non construite",
        "Joueurs statiques et non orientés"
      ],
      answerIndex: 0,
      explanation:
        "L'expert maîtrise davantage la vitesse, la précision, la transition et l'adaptation."
    },
    {
      question: "Au niveau expert, l'entraînement doit plutôt être...",
      options: [
        "Spécifique, organisé à travers un apprentissage différentiel et individualisé",
        "Identique à celui d'un débutant",
        "Sans choix ni adaptation",
        "Uniquement basé sur des files d'attente"
      ],
      answerIndex: 0,
      explanation:
        "Le module indique qu'à ce niveau l'entraînement technique devient plus spécifique et individualisé."
    },
    {
      question: "Dans le quiz final, quelles réponses définissent le football ?",
      options: [
        "Jeu individuel",
        "L'objectif est de marquer un but de plus que l'adversaire",
        "Le terrain est limité",
        "Codifié par des règles du jeu",
        "Opposition de 2 équipes"
      ],
      answerIndexes: [1, 2, 3, 4],
      explanation:
        "Le football n'est pas un jeu individuel : il oppose deux équipes, sur un terrain limité, avec des règles et un objectif de marque."
    },
    {
      question: "Dans le quiz final, quels sont les 3 types d'incertitudes ?",
      options: ["Temporelle", "Spatiale", "Arbitrale", "Tactique", "Événementielle"],
      answerIndexes: [0, 1, 4],
      explanation:
        "Les trois incertitudes du module sont temporelle, spatiale et événementielle."
    }
  ];

  const situationsAdditions = [
    {
      id: "connaissance-jeu-s4",
      title: "Identifier un niveau débutant",
      prompt:
        "Ton groupe joue en grappe, suit le ballon comme un essaim et ne construit pas encore la cible. Quel niveau observes-tu et quels objectifs proposes-tu ?",
      correction: [
        "Identifier un niveau débutant.",
        "Construire la notion de cible à attaquer.",
        "Faire découvrir partenaire et adversaire dans la recherche de possession.",
        "Utiliser des jeux simples avec ballon et cible claire.",
        "Faire découvrir les gestes techniques à travers le jeu."
      ],
      explanation:
        "Le débutant est centré sur le ballon ; l'objectif est de donner des repères simples de cible, partenaire et adversaire."
    },
    {
      id: "connaissance-jeu-s5",
      title: "Passer du niveau initié au confirmé",
      prompt:
        "Tes U13 sont organisés par poste près du ballon, mais jouent surtout direct et déséquilibrent par le dribble. Que peux-tu travailler ?",
      correction: [
        "Identifier des caractéristiques du niveau initié.",
        "Développer appui et soutien autour du porteur.",
        "Travailler le démarquage dans les intervalles.",
        "Varier les passes, contrôles, conduites et tirs.",
        "Créer des contraintes de temps ou d'espace pour enrichir les décisions."
      ],
      explanation:
        "L'initié doit apprendre à ne pas résoudre uniquement par le dribble et à utiliser davantage partenaires et espaces."
    },
    {
      id: "connaissance-jeu-s6",
      title: "Analyser les phases du jeu",
      prompt:
        "Pendant un match, ton équipe perd le ballon puis doit immédiatement se réorganiser. Comment expliques-tu ce moment aux joueurs ?",
      correction: [
        "Nommer le changement de possession du ballon.",
        "Identifier la phase de transition.",
        "Rappeler que l'équipe passe d'une situation offensive à une situation défensive.",
        "Donner une consigne simple : réagir vite, communiquer, protéger l'axe ou cadrer le porteur.",
        "Relier l'analyse à une situation d'entraînement."
      ],
      explanation:
        "La transition est une phase clé car elle lie les moments de possession et de non-possession."
    }
  ];

  function appendUnique(list, additions, key = (item) => item) {
    const known = new Set(list.map(key));
    for (const item of additions) {
      const value = key(item);
      if (!known.has(value)) {
        list.push(item);
        known.add(value);
      }
    }
  }

  appendUnique(theme.sheet, sheetAdditions);
  appendUnique(theme.essentials, essentialsAdditions);
  appendUnique(theme.mistakes, mistakesAdditions);
  appendUnique(theme.quiz, quizAdditions, (item) => item.question);
  appendUnique(theme.situations, situationsAdditions, (item) => item.id);

  theme.oralScript =
    "Pour connaître le rapport d'opposition, retiens ceci. Les actions des joueurs prennent du sens selon trois moments : possession, non-possession et changement de possession. En possession, l'équipe est offensive ; en non-possession, elle est défensive. On distingue cinq phases : conservation-progression, déséquilibre-finition, opposition à la progression du ballon, protection du but et transition. Pour observer le niveau de jeu, repère quatre niveaux : débutant, initié, confirmé, expert. Le débutant joue souvent en grappe autour du ballon. L'initié commence à s'organiser par poste mais reste proche du ballon. Le confirmé utilise mieux largeur, profondeur et réseau d'échanges. L'expert joue vite, précis, maîtrise les transitions et s'adapte au rapport de force.";
})();

window.CFI_REVISION_DATA.officialProgram = [
  {
    section: "Repères personnels",
    items: [
      {
        title: "Mon journal de bord",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["evaluation-action"],
        focus: "Garder une trace de ses séances, de ses constats et de ses axes de progrès."
      },
      {
        title: "Analyse réflexive",
        type: "e-Learning",
        foadStatus: "Terminé",
        themeIds: ["evaluation-action"],
        focus: "Analyser son action avec des faits observables et préparer les ajustements."
      },
      {
        title: "Questionnaire de fin de formation",
        type: "url",
        foadStatus: "À faire en fin de parcours",
        themeIds: ["connaissance-du-jeu", "evaluation-action", "seance-u10-u13"],
        focus: "Se tester après avoir consolidé les thèmes faibles et les questions ratées."
      }
    ]
  },
  {
    section: "Connaissance des publics",
    items: [
      {
        title: "Connaissance des publics - Les stades de développement",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["developpement-enfant"],
        focus: "Comprendre les différences de croissance, maturité, rythme et confiance."
      },
      {
        title: "Connaissance des publics - U10-U13",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["developpement-enfant", "posture-educateur"],
        focus: "Adapter l'encadrement aux caractéristiques des enfants U10-U13."
      },
      {
        title: "Article vestiaires - Déterminer les profils pour mieux encadrer",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["developpement-enfant", "posture-educateur", "gestion-parents"],
        focus: "Observer les profils pour adapter sa posture, ses attentes et son accompagnement."
      }
    ]
  },
  {
    section: "Connaissance du jeu et rapport d'opposition",
    items: [
      {
        title: "La connaissance du jeu",
        type: "e-Learning",
        foadStatus: "Terminé",
        themeIds: ["connaissance-du-jeu"],
        focus: "Maîtriser logique interne, incertitudes, espaces, niveaux et phases de jeu."
      },
      {
        title: "Article vestiaires - Foot à 8, les systèmes de jeu passés au crible",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["connaissance-du-jeu", "challenge-criterium"],
        focus: "Relier organisation de jeu, occupation de l'espace et apprentissages collectifs."
      },
      {
        title: "Organisation de la pratique - Foot à 8",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["challenge-criterium", "securite", "connaissance-du-jeu"],
        focus: "Organiser une pratique adaptée, sûre et cohérente avec les formes de jeu."
      }
    ]
  },
  {
    section: "Entraînement, séance et programmation",
    items: [
      {
        title: "L'entrainement",
        type: "e-Learning",
        foadStatus: "Terminé",
        themeIds: ["seance-u10-u13", "pedagogie-apprentissage"],
        focus: "Concevoir, animer, observer et ajuster l'entraînement."
      },
      {
        title: "La programmation U10-U11",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["seance-u10-u13", "pedagogie-apprentissage", "developpement-enfant"],
        focus: "Organiser des objectifs progressifs et adaptés aux U10-U11."
      },
      {
        title: "La programmation U12-U13",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["seance-u10-u13", "pedagogie-apprentissage", "connaissance-du-jeu"],
        focus: "Structurer les apprentissages en conservant plaisir, jeu et progression."
      },
      {
        title: "Coaching U6-U13",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["posture-educateur", "climat-entrainement", "pedagogie-apprentissage"],
        focus: "Coach positif : observer, questionner, encourager, cadrer et adapter."
      },
      {
        title: "Article vestiaires - Pause coaching en U13",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["posture-educateur", "pedagogie-apprentissage"],
        focus: "Utiliser un temps court pour questionner et donner un repère utile."
      }
    ]
  },
  {
    section: "Climat d'apprentissage et compétition",
    items: [
      {
        title: "Le climat d'entrainement",
        type: "e-Learning",
        foadStatus: "Terminé",
        themeIds: ["climat-entrainement"],
        focus: "Installer un cadre sécurisant, motivant et propice au droit à l'erreur."
      },
      {
        title: "Article vestiaires - Les 6 clés d'un bon climat d'apprentissage",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["climat-entrainement", "posture-educateur"],
        focus: "Renforcer confiance, engagement, coopération et plaisir d'apprendre."
      },
      {
        title: "Article vestiaires - Doit-on travailler l'esprit de compétition chez le jeune joueur",
        type: "fichier",
        foadStatus: "Terminé",
        themeIds: ["climat-entrainement", "posture-educateur", "pedagogie-apprentissage"],
        focus: "Utiliser la compétition comme support éducatif sans pression excessive."
      }
    ]
  },
  {
    section: "Protection, respect et lutte contre les discriminations",
    items: [
      {
        title: "Protéger nos licenciées et licenciés 1/3",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["securite", "violence-discrimination-respect"],
        focus: "Identifier les situations de risque et protéger les pratiquants."
      },
      {
        title: "Protéger nos licenciées et licenciés 2/3",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["securite", "violence-discrimination-respect"],
        focus: "Adopter les bons réflexes d'alerte, de transmission et de protection."
      },
      {
        title: "Protéger nos licenciées et licenciés 3/3",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["securite", "violence-discrimination-respect", "gestion-parents"],
        focus: "Agir avec le club, les familles et les référents quand une situation le nécessite."
      },
      {
        title: "Promouvoir la diversité et lutter contre toutes les formes de discriminations 1/2",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["violence-discrimination-respect", "education-integree-pef"],
        focus: "Repérer, prévenir et traiter les discriminations dans le cadre éducatif."
      },
      {
        title: "Promouvoir la diversité et lutter contre toutes les formes de discriminations 2/2",
        type: "e-Learning",
        foadStatus: "Pas terminé",
        themeIds: ["violence-discrimination-respect", "education-integree-pef"],
        focus: "Transformer les valeurs de respect et de diversité en comportements concrets."
      }
    ]
  }
];

(() => {
  const cases = [
    {
      themeId: "posture-educateur",
      question: "Un joueur U11 échoue plusieurs fois et se décourage. Quelle réaction est la plus juste ?",
      options: [
        "Le laisser chercher seul pour développer son autonomie.",
        "Simplifier temporairement la tâche, encourager et donner un objectif atteignable.",
        "Lui expliquer longtemps devant le groupe pour que tout le monde comprenne.",
        "Le changer de groupe pour qu'il soit avec les plus faibles."
      ],
      answerIndex: 1,
      difficulty: "hard",
      explanation: "La meilleure réponse adapte, encourage et maintient l'enfant dans l'activité.",
      whyCorrect: "Elle sécurise émotionnellement le joueur et lui permet de retrouver une réussite.",
      whyOthers: [
        "Le laisser seul peut renforcer le découragement.",
        "Une longue explication devant le groupe peut exposer l'enfant.",
        "Changer de groupe peut être vécu comme une sanction."
      ],
      principle: "Adapter sans humilier et favoriser la progression.",
      keywords: ["adaptation", "bienveillance", "progression", "plaisir"]
    },
    {
      themeId: "gestion-parents",
      question: "Un parent critique tes choix pendant un plateau. Quelle réponse tient le mieux le cadre ?",
      options: [
        "Répondre tout de suite devant les enfants.",
        "Modifier tes choix pour calmer le parent.",
        "Rester calme, protéger le groupe et proposer un échange à un moment adapté.",
        "Ignorer le parent même s'il perturbe l'activité."
      ],
      answerIndex: 2,
      difficulty: "hard",
      explanation: "L'éducateur garde le cadre et traite l'échange au bon moment.",
      whyCorrect: "Cette réponse évite l'escalade, protège les enfants et conserve une posture éducative.",
      whyOthers: [
        "Répondre devant les enfants met le conflit au centre.",
        "Changer ses choix sous pression fragilise le cadre.",
        "Ignorer durablement laisse la tension s'installer."
      ],
      principle: "Communiquer calmement sans perdre le cadre collectif.",
      keywords: ["cadre", "calme", "respect", "communication"]
    },
    {
      themeId: "violence-discrimination-respect",
      question: "Un joueur est moqué après une erreur technique. Quelle intervention est prioritaire ?",
      options: [
        "Stopper brièvement, protéger le joueur, nommer le comportement et rappeler le respect.",
        "Attendre la fin de séance pour ne pas couper le rythme.",
        "Dire au joueur moqué qu'il doit être plus solide mentalement.",
        "Punir tout le groupe par une course."
      ],
      answerIndex: 0,
      difficulty: "hard",
      explanation: "La priorité est de protéger et de réinstaller un climat de respect.",
      whyCorrect: "L'éducateur traite le comportement sans humilier et sécurise l'enfant ciblé.",
      whyOthers: [
        "Attendre laisse la moquerie produire ses effets.",
        "Demander à la victime d'être plus solide inverse la responsabilité.",
        "Punir tout le groupe ne traite pas clairement le comportement."
      ],
      principle: "Tolérance zéro sur les humiliations, avec un recadrage calme.",
      keywords: ["respect", "protection", "bienveillance", "climat positif"]
    },
    {
      themeId: "securite",
      question: "Un enfant arrive sans équipement adapté. Quelle décision est la plus professionnelle ?",
      options: [
        "Le faire participer normalement pour ne pas le frustrer.",
        "Évaluer le risque, adapter ou limiter la participation, puis prévenir si nécessaire.",
        "Le renvoyer sans explication.",
        "Lui prêter n'importe quel matériel disponible."
      ],
      answerIndex: 1,
      difficulty: "medium",
      explanation: "La sécurité passe avant la participation, tout en restant éducatif.",
      whyCorrect: "L'éducateur protège l'enfant et cherche une solution adaptée.",
      whyOthers: [
        "Participer sans équipement peut créer un risque.",
        "Renvoyer sans explication manque de bienveillance.",
        "Un matériel inadapté peut créer un autre risque."
      ],
      principle: "Sécuriser d'abord, adapter ensuite.",
      keywords: ["sécurité", "adaptation", "responsabilité", "famille"]
    },
    {
      themeId: "pedagogie-apprentissage",
      question: "Un exercice crée beaucoup d'attente et peu de ballons touchés. Quel ajustement est prioritaire ?",
      options: [
        "Garder l'exercice prévu pour respecter la séance écrite.",
        "Ajouter davantage de consignes.",
        "Réduire l'attente, multiplier les passages et simplifier l'organisation.",
        "Arrêter tout et faire uniquement un match libre."
      ],
      answerIndex: 2,
      difficulty: "hard",
      explanation: "L'éducateur remet les enfants en activité avec des répétitions utiles.",
      whyCorrect: "Moins d'attente et plus d'actions favorisent l'apprentissage par le jeu.",
      whyOthers: [
        "Respecter la fiche malgré l'échec bloque l'apprentissage.",
        "Ajouter des consignes peut ralentir encore plus.",
        "Le match libre ne répond pas toujours à l'objectif travaillé."
      ],
      principle: "Observer, simplifier et remettre rapidement en activité.",
      keywords: ["activité", "répétition", "apprentissage par le jeu", "adaptation"]
    },
    {
      themeId: "developpement-enfant",
      question: "Deux U12 ont le même âge mais un gros écart de maturité. Quelle lecture est la plus juste ?",
      options: [
        "Le plus mature doit forcément jouer avec les plus grands.",
        "Le moins mature manque surtout d'envie.",
        "L'âge ne suffit pas : il faut observer maturité, confiance et vécu.",
        "Il faut imposer exactement les mêmes contraintes à tous."
      ],
      answerIndex: 2,
      difficulty: "medium",
      explanation: "La croissance et la maturité varient fortement chez les enfants.",
      whyCorrect: "L'éducateur observe l'enfant réel et adapte sans étiqueter.",
      whyOthers: [
        "Surclasser automatiquement peut être inadapté.",
        "Relier la maturité à l'envie est une erreur.",
        "L'équité consiste parfois à adapter les moyens."
      ],
      principle: "Adapter aux différences individuelles.",
      keywords: ["maturité", "croissance", "adaptation", "confiance"]
    }
  ];

  const keywordsByTheme = {
    securite: ["sécurité", "prévention", "responsabilité", "cadre"],
    "violence-discrimination-respect": ["respect", "protection", "discrimination", "cadre"],
    "climat-entrainement": ["plaisir", "climat positif", "droit à l'erreur", "engagement"],
    "posture-educateur": ["bienveillance", "encouragement", "exemplarité", "adaptation"],
    "pedagogie-apprentissage": ["apprentissage par le jeu", "répétition", "questionnement", "adaptation"],
    "developpement-enfant": ["maturité", "croissance", "confiance", "différences individuelles"]
  };

  function difficulty(question, index) {
    if (question.difficulty) return question.difficulty;
    if (/parent|moqu|discrimin|refuse|dispute|crie|attente|maturit|équipement|perd/i.test(question.question)) {
      return "hard";
    }
    return index % 3 === 0 ? "easy" : index % 3 === 1 ? "medium" : "hard";
  }

  function enrich(theme, question, index) {
    question.difficulty = difficulty(question, index);
    question.keywords ||= keywordsByTheme[theme.id] || ["sécurité", "plaisir", "progression", "respect"];
    question.whyCorrect ||= question.explanation;
    question.principle ||=
      "La réponse attendue privilégie la sécurité, l'adaptation au niveau des enfants, le respect et la progression.";
    question.whyOthers ||= question.options
      .map((option, optionIndex) => {
        const correct = Array.isArray(question.answerIndexes)
          ? question.answerIndexes.includes(optionIndex)
          : question.answerIndex === optionIndex;
        return correct
          ? null
          : `${option} : moins adapté car cette option ne répond pas complètement aux principes FFF.`;
      })
      .filter(Boolean);
  }

  for (const item of cases) {
    const theme = window.CFI_REVISION_DATA.themes.find((entry) => entry.id === item.themeId);
    if (!theme || theme.quiz.some((question) => question.question === item.question)) continue;
    const { themeId, ...question } = item;
    theme.quiz.push(question);
  }

  for (const theme of window.CFI_REVISION_DATA.themes) {
    theme.quiz.forEach((question, index) => enrich(theme, question, index));
  }
})();
