const { check } = require('express-validator/check');

module.exports = [
    check('username').isEmail(),
    check('password').isLength({ min: 3 })
];
