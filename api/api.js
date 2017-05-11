var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');

router.post('/signin', apiController.signin);
router.post('/query', apiController.authApiMiddleware, apiController.query);

module.exports = router;
