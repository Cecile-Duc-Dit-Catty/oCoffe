# oCoffe

## Contexte

Projet MVC - du **29/07/24** au **01/08/24**

J'ai du réaliser en 4 jour le projet oCoffe, celui-ci est le tout premier que j'ai réalisé de la série. Malheureusement par manque de temps j'ai du faire des choix donc je n'ai pas encore implémenté toutes les fonctonnalitées ni pu faire des améliorations en terme d'UI/UX. Celles-ci seront ajouté ultérieurement.

**/!\ Le projet est uniquement développé pour le format ordinateur, la version responsive arrivera ultèrieurement.**

## Structure du projet :

### Dossier app :

- Un dossier controllers qui contient le fichier maincontroller.js
- Un dossier views :
  - partials : dossier qui contient le footer.ejs le header.ejs ainsi que le page404.ejs pour le rendu dynamique.
  - 3 autres fichiers index.ejs, product.ejs, catalog.ejs pour le rendu dynamique.

### Dossier docs:

- installation.md : contient une courte série d'instruction pour lancer le projet.

### Racine du dossier :

- index.js : le point d'entrée principal de l'application avec Node.js/Express
- package.json : contient les dependances & les scripts à installer avec nodemon
- .env.example : les variables d'environnement

### Dossier public :

- Un dossier assets qui contient :
  - css : contient tous les fichiers css des différentes pages
  - images : contient les images de cafés, les images portent le nom du numero des différents cafés référencées en BDD (<numero>.png).
