const router = require('express').Router();
const { api } = require('../controllers');

router.post('/', api.authLogin);
router.post('/query', api.authApiMiddleware, api.query);

module.exports = router;
