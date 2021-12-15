const jwt = require('jsonwebtoken');
const {APIsignature} = require('../config.json');

const auth = (req, res, next) => {
    const token = req.signedCookies.API_key;
    if (!token) {
        return res
            .status(403)
            .json({ data: null, status: 12 });
    }
    try {
      const data = jwt.verify(token, APIsignature);
      req.id = data.id;
      console.log(data.id);
      return next();
    } catch {
        return res
                .status(403)
                .json({ data: null, status: 10 });
    }
};

module.exports = auth;