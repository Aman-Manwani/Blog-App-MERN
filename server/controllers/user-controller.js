const user = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt  = require('jsonwebtoken')
const dotenv = require('dotenv');
const token = require('../models/token')

dotenv.config();

const userSignUp = async(req,res) => {
    try{
        const salt  = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password,salt)
        const userFromApi = {name:req.body.name,username:req.body.username,password:hashedPassword};
        const newUser = new user(userFromApi);
        await newUser.save()
        return res.status(200).json({msg:'user signed up from backend'})
    }
    catch(error){
        res.status(401).json({msg:error.message})
    }
}

const userLogin = async(req,res) => {
    const loginUser =await user.findOne({username:req.body.username})
    if(!loginUser){
        return res.status(400).json({msg:'username not found'});
    }
    try{
        let match = await bcrypt.compare(req.body.password,loginUser.password)
        if(match){
            const accessToken = jwt.sign(loginUser.toJSON(),process.env.ACCESS_SECRET_KEY,{expiresIn:'15m'})
            const refreshToken = jwt.sign(loginUser.toJSON(),process.env.REFRESH_SECRET_KEY)

            const newToken =await new token({token:refreshToken})
            newToken.save();

            return res.status(200).json({accessToken:accessToken,refreshToken:refreshToken,name:loginUser.name,username:loginUser.username});
        }else{
            return res.status(400).json({msg:'password is incorrect,Please try again'})
        }
    }
    catch(error){
        return res.status(400).json({msg:'Error while login in'})
    }
}

module.exports = {userSignUp,userLogin};