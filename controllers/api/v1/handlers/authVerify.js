const jwt = require('jsonwebtoken');
const response = $require('/utils/response');
const { api } = $require('/configs');
const { validationResult } = require('express-validator/check');

const authVerify = async (req, res) => {

    const token = req.body.token || null;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }

    if (token === null) {
        return res.status(403).send(response(403, 'Token is missing.'));
    } else {
        jwt.verify(token, api.secretKey, (err) => {
            if (err) {
                return res.status(403).send(response(403, err.message));
            } else {
                return res.send(response(200, 'Token is valid.'));
            }
        });
    }
};

module.exports = authVerify;
