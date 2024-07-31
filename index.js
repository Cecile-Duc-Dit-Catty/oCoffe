require("dotenv").config();
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration du moteur de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));
app.use(express.static(path.join(__dirname, 'public')))


// Importer la route de la page d'accueil
const homeRouter = require('./app/router');  // Ici, on importe le routeur défini dans 'routes/home.js'

// Utiliser la route de la page d'accueil
app.use('/', homeRouter);  // On utilise le routeur pour les requêtes à la racine '/'

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});