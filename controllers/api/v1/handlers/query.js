const User = $require('/models/mongo/user');

const query = async (req, res, next) => {

  const users = await User.find();

  res.send(users);
}

module.exports = query;
