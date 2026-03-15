const jwt = require('jsonwebtoken');
const { errorHandler } = require('../utils/errorHandler');
const protect = async (req, res, next) => {
    try {
        let token;

        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
    }

        if (!token) {
            return res
        }

        //verify token
        const decoded = jwt.verify(token, "secretkey");
        req.user = decoded.id;
        next();
    } catch (error) {
        return errorHandler(res, error, "Invalid Token");
    }
};

const authorize = (roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: "Forbidden: You don't have permission to access this resource" });
        }
        next();
    };
};

module.exports = {
    protect,
    authorize
};

