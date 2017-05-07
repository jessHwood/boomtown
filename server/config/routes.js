var express = require('express');
var router = express.Router();
//require controllers
var resultController = require('../controllers/resultController');
var ownerController = require('../controllers/ownerController');


//OWNER ROUTES
router.get('/api/owners', ownerController.index);
router.post('/api/owners', ownerController.create);
router.get('/api/owners/:id', ownerController.show);
router.put('/api/owners/:id', ownerController.update);
router.delete('api/owners/:id', ownerController.destroy);

//RETURN id ROUTES
router.get('/api/id/name/:name', ownerController.getByName);
router.get('/api/id/shop/:shopName', ownerController.getByShop);
router.get('/api/id/email/:email', ownerController.getByEmail);

//RESULT ROUTES
router.get('/api/results', resultController.index);
//in order to create a new result an Owner id must be passed in as a url parameter
router.post('/api/results/:ownerId', resultController.create);
router.get('/api/results/:id', resultController.show);
router.put('/api/results/:id', resultController.update);
router.delete('/api/results/:id', resultController.destroy);


module.exports = router;