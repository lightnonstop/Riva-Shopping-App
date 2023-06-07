const jwt = require('jsonwebtoken');

const generateUserToken = (id) => {
    return jwt.sign(
        { id }, 
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    );
}

module.exports = { generateUserToken };