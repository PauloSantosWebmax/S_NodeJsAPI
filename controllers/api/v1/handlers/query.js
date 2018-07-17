const User = require('../../../../models/mongo/user');

const query = async (req, res, next) => {
  const query = req.body.query || null;

  // if (query == null) {
  //    res.status(403).send({ message: 'missing query' });
  //}

  const users = await User.find();

  res.send(users);
}

module.exports = query;
