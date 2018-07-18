const jwt = require('jsonwebtoken');
const { api } = $require('/configs');
const User = $require('/models/mongo/user');
const response = $require('/utils/response');

const authLogin = async (req, res, next) => {

  if (!req.body.username || !req.body.password) {
    res.status(403).send('Unauthorized');
  }

  const user = await User.findOne({ email: req.body.username });

  if (user == null || user instanceof Error) {
    return res.send(response(200, 'Can\'t login with those details.', null));
  }

  if (req.body.username != user.email || !user.hashCompare(req.body.password)) {
    return res.status(403).send({
      status: 403,
      message: 'Unauthorized',
    });
  } else {

    const token = jwt.sign({
      issuer: 'Express_api',
      jwtid: Math.ceil(Math.random() * 100),
      exp: Math.floor(Date.now() / 1000) + (60 * 60), // expires in 1 hour
    }, api.secretKey);

    res.json(token);
  }
}

module.exports = authLogin;
