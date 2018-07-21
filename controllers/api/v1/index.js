
const authLogin = require('./handlers/authLogin');
const authVerify = require('./handlers/authVerify');
const authApiMiddleware = require('./middlewares/authApiMiddleware');
const query = require('./handlers/query');

module.exports = {
  authLogin,
  authVerify,
  authApiMiddleware,
  query
}
