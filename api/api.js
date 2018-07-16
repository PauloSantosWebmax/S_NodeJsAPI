const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.post('/signin', apiController.signin);
router.post('/query', apiController.authApiMiddleware, apiController.query);

module.exports = router;
