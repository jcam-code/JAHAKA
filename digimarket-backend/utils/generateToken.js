const jwt = require('jsonwebtoken');

const generateToken = (payload, expiresIn = '30d') => {
    return jwt.sign(payload, "secretkey", { expiresIn });
};

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, "refreshSecretKey", { expiresIn: '7d' });
};

module.exports = { generateToken, generateRefreshToken };