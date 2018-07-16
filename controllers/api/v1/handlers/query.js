const connection = require('../../../../configs/mysql');

const query = (req, res, next) => {
  const query = req.body.query || null;

  if (query == null) {
      res.status(403).send({ message: 'missing query' });
  }

  connection.query(query, (error, results, fields) => {
      if (error) throw error;
      res.json(results);
  });
}

module.exports = query;
