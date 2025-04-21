const{loginUserService}=require('../service')
exports.loginUser=async(req,res)=>{
    try{
        console.log("this is name and password",req.body.email,req.body.password);
        const user=await loginUserService.LoginUser(req.body.email,req.body.password);
        res.status(200).json({message:"user loggedin successfully", user: user})
    }
    catch(error){
        console.log(error)
        return res.json({message:error.message})
    }

}