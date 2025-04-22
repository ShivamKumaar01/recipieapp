const{loginUserService}=require('../service')
// exports.loginUser=async(req,res)=>{
//     try{
//         console.log("this is name and password",req.body.email,req.body.password);
//         const user=await loginUserService.LoginUser(req.body.email,req.body.password);
//         res.status(200).json({message:"user loggedin successfully", user: user})
//     }
//     catch(error){
//         console.log(error)
//         return res.json({message:error.message})
//     }

// }/


exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("Login credentials:", email, password);

    const { token, user } = await loginUserService.LoginUser(email, password);

    
    res.cookie('token', token, {
        httpOnly: false, // ❗️Set to false if you want to access it from JS (not recommended for sensitive info)
        secure: false,   // ❗️Set to true only when using HTTPS
        sameSite: 'lax', // or 'strict'
        path: '/',
        maxAge: 24 * 60 * 60 * 1000 // 1 day
      })

    return res.status(200).json({
      message: "User logged in successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};
