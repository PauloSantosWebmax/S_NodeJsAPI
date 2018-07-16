const jwt = require('jsonwebtoken');

const authLogin = (req, res, next) => {

  if (!req.body.username || !req.body.password) {
    res.status(403).send('Unauthorized');
  }

  if (req.body.username != /*process.env.API_USERNAME*/'paulo' || req.body.password != /*process.env.API_PASSWORD*/'123') {
    res.status(403).send('Unauthorized');
  }

  const token = jwt.sign({}, /*process.env.SECRET_KEY*/'123456', { expiresIn: 4000 });

  res.json(token);
}

module.exports = authLogin;
