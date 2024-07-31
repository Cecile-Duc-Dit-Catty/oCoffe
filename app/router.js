const express = require('express');
const fs = require('fs');
const path = require('path');

const mainController = require('./controllers/mainController')

const router = express.Router();

router.get('/', mainController.homePage);

router.get('/catalogue', mainController.catalogPage);

router.get('/produit/:reference', mainController.productPage)


module.exports = router;
// const mainController = require("./controllers/mainController")
// const router = express.Router();