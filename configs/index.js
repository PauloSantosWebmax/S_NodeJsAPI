
module.exports = {
  app: {
    port: process.env.APP_PORT,
  },
  api: {
    secretKey: process.env.API_SECRET_KEY,
    username: process.env.API_USERNAME,
    password: process.env.API_PASSWORD,
  },
  mongodb: {
    url: process.env.MONGO_DB,
  },
  mysql: {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    pass: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DATABASE,
  },
}
