const { api } = $require('/configs');
const response = $require('/utils/response');
const jwt = require('jsonwebtoken');

const authApiMiddleware = (req, res, next) => {

  let token = null;

  if (req.body.token) {
    token = req.body.token;
  } else if (req.headers['authorization']) {
    token = req.headers['authorization'].split('Bearer ')[1]
  }

  if (token) {
    jwt.verify(token, api.secretKey, (err, decode) => {
      if (err) {
        res.status(403).send(response(403, err.message));
      } else {
        next();
      }
     });
  } else {
    res.status(403).send(response(403, 'Missing token.'));
  }
};

module.exports = authApiMiddleware;
