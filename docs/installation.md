# Installation

```bash
# Cloner le projet
git clone REPO_SSH_URL

# Se déplacer dans le projet
cd REPO_NAME

# Ouvrir le projet dans VSCode
code .

# Installer les dépendances à la racine
npm install
```

## Mise en place de la base de données

```bash
# Se connecter à son client Postgres
sudo -i -u postgres psql

# Créer un utilisateur de base de données
CREATE USER ocoffe_admin WITH LOGIN PASSWORD 'ocoffee';

# Créer une base de données
CREATE DATABASE ocoffe WITH OWNER ocoffee_admin;

# Quitter psql
exit
```

## Mise en place de l'environnement de développement

```bash
# Créer un fichier d'environnement à la racine
cp .env.example .env

# Ajuster les valeurs du fichier .env
code .env

# Lancer les commandes de création de tables et d'échantillonnage
psql -U ocoffe_admin -d ocoffe -f ./app/ocoffe.sql
```

## Lancement du projet

```bash
#Lancer le serveur
nodemon index.js
```
