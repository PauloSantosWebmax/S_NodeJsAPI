const { check } = require('express-validator/check');

module.exports = [
    check('token').isLength({ min: 60 })
];
