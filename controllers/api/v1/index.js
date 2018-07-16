
const authLogin = require('./handlers/authLogin');
const authApiMiddleware = require('./middlewares/authApiMiddleware');
const query = require('./handlers/query');

module.exports = {
  authLogin,
  authApiMiddleware,
  query
}
