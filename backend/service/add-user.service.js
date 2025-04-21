const { Users } = require('../models');

const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.addingUser=async(name,email,password)=>{
    if(!name ||!email||!password){
        throw new Error("please fill all the details");
        
    }
    const user=await Users.findOne({ where: { email } });
    if(user){
        throw new Error("this email is already exist");
    }
    const hashedPassword=await bcrypt.hash(password,saltRounds)
    if(!hashedPassword){
        throw new Error("error in hashing password");
    }
    const newuser=await Users.create({ name, email, password:hashedPassword });
    return newuser;

}
