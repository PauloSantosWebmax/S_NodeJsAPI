const jwt = require('jsonwebtoken');

const authApiMiddleware = (req, res, next) => {

  const token = req.body.token || req.headers['authorization'].split('Bearer ')[1];

  if (token) {
    jwt.verify(token, /*process.env.SECRET_KEY*/'123456', (err, decode) => {
      if (err) {
        res.status(403).send({ message: 'invalid token' });
      } else {
        next();
      }
     });
  } else {
    res.status(403).send({ message: 'missing token' });
  }
}

module.exports = authApiMiddleware;
