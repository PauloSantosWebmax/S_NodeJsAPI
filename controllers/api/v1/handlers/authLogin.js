const jwt = require('jsonwebtoken');

const authLogin = (req, res, next) => {

  if (!req.body.username || !req.body.password) {
    res.status(403).send('Unauthorized');
  }

  if (req.body.username != process.env.API_USERNAME || req.body.password != process.env.API_PASSWORD) {
    res.status(403).send('Unauthorized');
  }

  const token = jwt.sign({}, process.env.SECRET_KEY, { expiresIn: 4000 });

  res.json(token);
}

module.exports = authLogin;
