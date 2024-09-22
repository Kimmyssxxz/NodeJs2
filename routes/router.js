const express = require('express');
const router = express.Router();
const controller = require('../controller/UserController');

router.get('/', controller.index);
router.get('/vegetables', controller.vegetables);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/shop', controller.shop);


module.exports = router;
