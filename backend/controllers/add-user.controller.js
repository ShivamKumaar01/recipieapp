const {addUserService}=require('../service')

exports.addUser=async(req,res)=>{
    try{
        console.log("this is req",req.body.name,req.body.email)
        const user=await addUserService.addingUser(req.body.name,req.body.email,req.body.password)
        res.status(200).json({message:"user added successfully", user: user})
    }
    catch(error){
        console.log(error.message);
        return res.json({message:error.message})
    }
};