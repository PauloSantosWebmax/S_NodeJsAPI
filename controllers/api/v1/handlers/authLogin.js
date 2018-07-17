const { api } = $require('/configs');
const jwt = require('jsonwebtoken');

const authLogin = (req, res, next) => {

  if (!req.body.username || !req.body.password) {
    res.status(403).send('Unauthorized');
  }

  if (req.body.username != api.username || req.body.password != api.password) {
    res.status(403).send('Unauthorized');
  }

  const token = jwt.sign({
    issuer: 'Express_api',
    jwtid: Math.ceil(Math.random() * 100),
    exp: Math.floor(Date.now() / 1000) + (60 * 60), // expires in 1 hour
  }, api.secretKey);

  res.json(token);
}

module.exports = authLogin;
