const router = require('express').Router();
const { api } = require('../controllers');
const requests = require('./requests');

router.post('/', requests.authLogin, api.authLogin);
router.post('/verify', requests.authVerify, api.authVerify);
router.post('/query', api.authApiMiddleware, api.query);

module.exports = router;
