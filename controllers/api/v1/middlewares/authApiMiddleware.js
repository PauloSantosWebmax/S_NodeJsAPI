const { api } = $require('/configs');
const jwt = require('jsonwebtoken');

const response = (status, message) => {
  return {
    status: status,
    message: message
  }
};

const authApiMiddleware = (req, res, next) => {

  const token = req.body.token || req.headers['authorization'].split('Bearer ')[1];

  if (token) {
    jwt.verify(token, api.secretKey, (err, decode) => {
      if (err) {
        res.status(403).send(response(403, 'invalid token'));
      } else {
        next();
      }
     });
  } else {
    res.status(403).send(response(403, 'missing token'));
  }
};

module.exports = authApiMiddleware;
