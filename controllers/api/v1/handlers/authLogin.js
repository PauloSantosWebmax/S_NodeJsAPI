const jwt = require('jsonwebtoken');
const User = $require('/models/mongo/user');
const response = $require('/utils/response');
const { api } = $require('/configs');
const { validationResult } = require('express-validator/check');

const authLogin = async (req, res) => {

  const { username, password } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  if (!username || !password) {
    return res.status(403).send(response(403, 'Unauthorized, missing credentials.'));
  }

  const user = await User.findOne({ email: username });

  if (user == null || user instanceof Error) {
    return res.send(response(200, 'Can\'t login with those details.', null));
  }

  if (username != user.email || !user.hashCompare(password)) {
    return res.status(403).send(response(403, 'Unauthorized, login failed.'));
  } else {

    const token = jwt.sign({
      issuer: 'Express_api',
      jwtid: Math.ceil(Math.random() * 100),
      exp: Math.floor(Date.now() / 1000) + (60 * 60), // expires in 1 hour
    }, api.secretKey);

    return res.json(response(200, 'Authentication succefully.', { token }));
  }
}

module.exports = authLogin;
