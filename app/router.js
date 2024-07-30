const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
  try {
    // Lire le fichier JSON
    const data = fs.readFileSync(path.join(__dirname, 'cafes.json'), 'utf8');
    const cafes = JSON.parse(data);

    // Rendre la vue 'accueil' avec les données des cafés
    res.status(200).render('index', { cafes });
  } catch (error) {
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }
});

module.exports = router;
// const mainController = require("./controllers/mainController")
// const router = express.Router();