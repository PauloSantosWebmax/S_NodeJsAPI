const User = $require('/models/mongo/user');

const query = async (req, res, next) => {

/*
  let user = new User();
  user.name = 'Santos';
  user.email = 'tm.paulo.santos@gmail.com';
  user.password = user.encrypt('123');
  user.save();

  res.send(user);
*/
  const user = await User.findOne({ email: 'tm.paulo.santos@gmail.com' });
  
  res.send(user);
}

module.exports = query;
