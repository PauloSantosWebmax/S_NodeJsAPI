var jwt = require('jsonwebtoken');
var connection = require('../configs/mysql');

module.exports = {

    authApiMiddleware: (req, res, next) => {

        var token = req.body.token || req.headers['authorization'].split('Bearer ')[1];

        if (token) {
            jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
                if (err) {
                    res.status(403).send({ message: 'invalid token' });
                } else {
                    next();
                }
            });
        } else {
            res.status(403).send({ message: 'missing token' });
        }

    },

    signin: (req, res, next) => {

        if (!req.body.username || !req.body.password) {
            res.status(403).send('Unauthorized');
        }

        if (req.body.username != process.env.API_USERNAME || req.body.password != process.env.API_PASSWORD) {
            res.status(403).send('Unauthorized');
        }

        var token = jwt.sign({}, process.env.SECRET_KEY , { expiresIn: 4000 });

        res.json(token);
    },

    query: (req, res, next) => {

       var query = req.body.query || null;

        if (query == null) {
            res.status(403).send({ message: 'missing query' });
        }

        connection.query(query, (error, results, fields) => {
            if (error) throw error;
            res.json(results);
        });
    }

};
