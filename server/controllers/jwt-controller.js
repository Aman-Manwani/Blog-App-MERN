const { json } = require('body-parser');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken')

dotenv.config();

const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token==null){
        return res.status(401).json({msg: 'token is missing'});
    }

    jwt.verify(token,process.env.ACCESS_SECRET_KEY,(error,user) => {
        if(error){
            return res.status(403).json({msg:'invalid token'});
        }
        req.user = user;
        next();
    })
}

module.exports = authenticateToken;

