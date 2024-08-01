const dataMapper = require("../dataMapper");

const mainController = {

getCategorys: async (req, res, next) => {
  
  try {
    
    res.locals.categories = await dataMapper.getCafesByCategory();

    // On passe la fonction next afin de ne pas s'arrêter à cette méthode
    next();

  } catch (error) {
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }
},

homePage: async (req, res) => {
  try {
     // On récupère tous les cafés via la méthode du dataMapper associée
    const cafes = await dataMapper.getLatestProduct();

    res.status(200).render("index", { cafes });

  } catch (error) {
    console.error(error);
    
    res.status(500).send(`Erreur côté serveur: ${error}`);
  }

},

catalogPage: async (req, res) => {
  try {
    // Récupérer le nom de la catégorie à partir des paramètres de requête
    const categoryName = req.query.coffes__byCategory || '';

    // Récupérer toutes les catégories
    const categories = await dataMapper.getAllCategories();

    // Si une catégorie est spécifiée, récupérer les cafés filtrés par catégorie
    // Sinon, récupérer tous les cafés
    const cafes = categoryName
      ? await dataMapper.getCafesByCategory(categoryName)
      : await dataMapper.getAllCafes();

    // Rendre la vue avec les cafés, les catégories, et le nom de la catégorie filtrée
    res.status(200).render("catalog", { cafes, categories, categoryName });
  } catch (error) {
    console.error('Error in catalogPage:', error);
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