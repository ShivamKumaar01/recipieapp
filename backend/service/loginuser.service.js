const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {Users}=require('../models')
exports.LoginUser=async(email,password)=>{
    console.log("this is email and password of LoginUser",email,password,"hulu hulu")

    if(!email ||!password){
        throw new Error("email or password is missing");
    }
    const user=await Users.findOne(({ where: { email } }));
    if(!user){
        throw new Error("Invalid email or password");

    }
    const isMatch=await bcrypt.compare(password,user.password);
    if(!isMatch){
        throw new Error("Invalid email or password");
    }
    // if pass match then generate token 
    const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
         "zenmonk",
        {
          expiresIn: "1d" 
        }
    );
    if(!token){
        throw new Error("Failed to generate token");
    }
    return{token,user}

}
