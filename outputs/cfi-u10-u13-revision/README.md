# Révision CFI U10-U13

Application web statique pour réviser la certification CFI U10-U13 sur ordinateur ou téléphone.

## Lancer le projet

Option simple :

1. Ouvrir `index.html` dans un navigateur moderne.
2. La progression est sauvegardée automatiquement dans le `localStorage` du navigateur.

Option avec serveur local :

```bash
cd outputs/cfi-u10-u13-revision
python -m http.server 8000
```

Puis ouvrir `http://localhost:8000`.

## Déployer sur Vercel

Depuis ce dossier :

```bash
npx vercel
npx vercel --prod
```

Le projet est une application statique : aucun build n'est nécessaire. Les fichiers temporaires de serveur local et de tunnel sont exclus par `.vercelignore`.

## Structure

- `index.html` : structure HTML de l'application.
- `styles.css` : interface responsive.
- `app.js` : navigation, tableau de bord, QCM, synthèse vocale, situations, mode sombre, reprise et progression.
- `data.js` : contenus de révision, questions, corrections, résumés audio et planning 3 jours.
- `vercel.json` : configuration de déploiement statique Vercel.

## Modes disponibles

- Espace club :
  plusieurs éducateurs peuvent utiliser la même application avec des profils séparés. Chaque profil conserve sa progression, ses scores, ses erreurs et ses QCM.
- Diagnostic initial :
  test court et mélangé pour identifier rapidement les thèmes forts et les thèmes faibles avant de lancer la révision.
- Programme CFI :
  la page reprend les modules et fichiers du parcours fourni, puis les relie aux thèmes, fiches, QCM, audios et mises en situation de l'application.
- Révision intensive 3 jours :
  Jour 1 travaille la séance, la posture éducateur et la sécurité.
  Jour 2 travaille la pédagogie, le développement de l'enfant et le climat d'entraînement.
  Jour 3 sert à faire le QCM complet, reprendre les mises en situation, revoir violence/discrimination et faire le bilan.
- Révision libre :
  l'utilisateur choisit ses thèmes, refait les QCM, écoute les fiches, révise 10 minutes ou plusieurs heures, et reprend automatiquement sa progression.
- Révision des points faibles :
  l'application génère une session ciblée à partir des thèmes non maîtrisés et des scores insuffisants.
- Quiz par difficulté :
  l'utilisateur peut réviser en mode facile, moyen, difficile ou certification. Les réponses sont mélangées et la correction n'apparaît qu'après validation.
- QCM blanc final :
  session de 40 questions mélangées avec indication de préparation : prêt, presque prêt ou à revoir avant certification.
- Révision audio rapide :
  l'utilisateur peut écouter un thème ou enchaîner tous les résumés audio, choisir une voix française si disponible, régler la vitesse, régler la tonalité, mettre en pause et reprendre.
- Entraînement oral :
  l'utilisateur répond librement à des cas terrain, puis affiche une réponse-type attendue dans l'esprit FFF.

## Tableau de bord

Le tableau de bord affiche :

- progression globale ;
- nombre de QCM réalisés ;
- score moyen ;
- meilleurs thèmes ;
- thèmes à revoir ;
- dernière session ;
- diagnostic initial ;
- QCM blanc final ;
- questions maîtrisées ;
- temps de révision conseillé ;
- bouton pour continuer ;
- bouton pour réviser les points faibles ;
- bouton pour faire un QCM blanc ;
- bouton pour réinitialiser la progression locale.

## Boutons principaux

- `Réviser librement` : ouvre le mode libre.
- `Continuer ma progression` : reprend le dernier écran utile ou propose le prochain thème.
- `Diagnostic` : lance un test court pour situer le niveau du profil actif.
- `Points faibles` : lance un QCM ciblé sur les thèmes à revoir.
- `Mode facile`, `Mode moyen`, `Mode difficile` : lance des questions filtrées par niveau.
- `Quiz certification` : lance un quiz majoritairement composé de questions moyennes et difficiles.
- `Revoir mes erreurs` : lance un QCM uniquement sur les questions ratées mémorisées.
- `Faire un QCM complet` : lance toutes les questions disponibles.
- `QCM blanc final` : lance une session certification avec objectif 80 % minimum.
- `Sombre` / `Clair` : bascule l'interface en mode sombre ou clair. Le choix est sauvegardé dans le navigateur.
- `Réinitialiser ma progression` : efface les données locales après confirmation.

## Contenu inclus

Chaque thème contient maintenant :

- une fiche courte ;
- au moins 5 points essentiels ;
- au moins 5 erreurs à éviter ;
- 10 questions QCM avec corrections expliquées ;
- 3 mises en situation ;
- un résumé audio naturel.

Le système de QCM utilise maintenant :

- sélection de réponse puis bouton `Valider ma réponse` ;
- blocage du choix après validation ;
- mélange des questions et des réponses ;
- niveaux `easy`, `medium`, `hard` ;
- corrections détaillées : meilleure réponse, pourquoi les autres options sont moins adaptées, principe FFF, mots-clés ;
- ajout automatique des erreurs dans les questions à revoir ;
- suivi des questions maîtrisées après plusieurs réussites.

Un thème dédié `La connaissance du jeu` a été ajouté à partir du module CFI/FOAD :

- système entraînement : entraîneur, jeu, joueur ;
- définition du football ;
- logique interne du football ;
- incertitudes événementielle, temporelle et spatiale ;
- communication entre partenaires ;
- crises de nombre, de temps et d'espace ;
- espace de jeu effectif ;
- espaces de conservation, progression, déséquilibre et finition.
- rapport d'opposition et détermination des niveaux de jeu ;
- 3 moments du jeu : possession, non-possession, changement de possession ;
- 5 phases de jeu : conservation-progression, déséquilibre-finition, opposition à la progression, protection du but, transition ;
- 4 niveaux : débutant, initié, confirmé, expert ;
- observations et objectifs d'apprentissage associés à chaque niveau.

## Ajouter ou modifier du contenu

Tout le contenu est dans `data.js`.

Les correspondances du programme CFI sont dans `officialProgram`. Pour rattacher un module à un thème, ajoute simplement l'identifiant du thème dans `themeIds`.

Pour ajouter une question, ajoute un objet dans le tableau `quiz` d'un thème :

```js
{
  question: "Ta question ?",
  options: ["Bonne réponse", "Réponse 2", "Réponse 3"],
  answerIndex: 0,
  explanation: "Explication courte affichée après la réponse."
}
```

Pour ajouter une mise en situation, ajoute un objet dans `situations` :

```js
{
  id: "identifiant-unique",
  title: "Titre court",
  prompt: "Situation terrain...",
  correction: ["Point attendu 1", "Point attendu 2"],
  explanation: "Pourquoi cette correction est pertinente."
}
```

## Notes de contenu

Le contenu reste volontairement centré sur des principes généraux de formation :

- sécurité ;
- plaisir ;
- progression ;
- respect ;
- bienveillance ;
- adaptation au niveau des enfants ;
- apprentissage par le jeu ;
- posture éducative positive ;
- lutte contre la violence et les discriminations.

Les règles précises de compétition, plateau, challenge ou critérium peuvent varier selon les districts et les saisons. Vérifie toujours les documents transmis par ton club ou ton instance locale.
