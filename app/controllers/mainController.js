const dataMapper = require("../dataMapper");

const mainController = {

homePage: async (req, res) => {
  try {
     // On récupère tous les cafés via la méthode du dataMapper associée
    const cafes = await dataMapper.getAllCafes();

    res.status(200).render("index", { cafes });

  } catch (error) {
    console.error(error);
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }

},

catalogPage : async (req, res) => {
  try {
     // On récupère tous les cafés via la méthode du dataMapper associée
    const cafes = await dataMapper.getAllCafes();

    res.status(200).render("catalog", { cafes });

  } catch (error) {
    console.error(error);
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }

},

productPage: async (req, res) => {
  const referenceParam = req.params.reference;
 

  // Je nettoie la chaine pour enlever les caractères non numériques 
  const referenceCleaned = referenceParam.replace(/[^0-9]/g, '');
  const targetReference = parseInt(referenceCleaned, 10); 
 

  if (isNaN(targetReference)) {
    return res.status(400).send("La référence est invalide");
  }

  try {
    // On récupère le café recherché
    const cafe = await dataMapper.getOneCafe(targetReference);
    
    if (!cafe) {
      return res.status(404).send("Café non trouvé");
    }
    
    res.status(200).render("product", { cafe });

  } catch (error) {
    console.error(error);
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }
},
 
}

module.exports = mainController;