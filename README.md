# technical-test-front

Ce projet utilise un framework répondant au doux nom de Vuetify, c'est l'unique chose que vous allez avoir à utiliser pour ce projet alors autant avoir un petit lien vers sa documentation (que vous trouverez en bas de cette page).

Tout est déjà installé et prêt à l'emploi, vous n'avez en réalité qu'à écrire les 2 components représentant nos 2 pages.

Trêve de blabla, passons à la pratique :

L'installation du projet nécessite node.js et npm (le gestionnaire de paquet de node.js).
Si vous ne l'avez pas encore, voici un lien pour l'installer : (https://nodejs.org/en/download/)

Ensuite dans un terminal à la racine du projet, executer les commandes suivantes :

```bash
cd top_series
npm install
npm run serve
```

Puis rendez-vous sur l'adresse web inscrite dans votre terminal.

Le but du jeu étant de changer le contenu de cette page pour afficher notre liste de séries,
rendez-vous donc dans votre éditeur de texte préféré et ouvrez le fichier suivant :

top_series/src/App.vue

Ce fichier est le composant Vuetify que l'application va exécuter quand on tape la commande :
```bash
npm run serve
```

Il se décompose en 2 parties :

-le template (l'html de la page)

-le script (le javascript de la page)

Dans le script on importe 2 fichiers (2 autres composants) que je vous invite à ouvrir :

top_series/src/components/ranking_1-to-5.vue
top_series/src/components/ranking_6-to-10.vue

Ce sont ces fichiers qu'il va falloir modifier pour obtenir notre classement des séries.
Actuellement le fichier App.vue affiche les 2 composants l'un à la suite de l'autre, (dans le template ce sont les lignes de 4 à 7).

Voici le lien vers la documentation de Vuetify : (https://vuetifyjs.com/en/getting-started/quick-start)

A vous de jouer maintenant !

Ps : Quand vous modifiez et sauvegardez un fichier les changements s'effectuent automatiquement dans votre navigateur, pas besoin de relancer le serveur.
