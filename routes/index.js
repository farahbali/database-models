const express = require('express');
const userController = require('../controller/user');

const router = express.Router();
// TODO move implementation to controller and service layer
router.get('/user/:id', userController.getUser);
router.get('/products/', userController.getAllProducts);
router.get('/types/', userController.getAllTypes);
router.get('/types/:id', userController.getProductById);
router.get('/sizePrice/', userController.getAllSizePrice);
module.exports = router;
