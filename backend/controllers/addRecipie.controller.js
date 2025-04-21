const{addRecipieService}=require('../service');
// exports.addRecipie=async(req,res)=>{
//     try{
//         const { title, image, description, category } = req.body;
//   const userId = req.user.id;
//         console.log("this is recipie details:",req.body.image,req.body.title,req.body.description,req.body.category,req.user.id)
//         const recipie=await addRecipieService.addingRecipie(req.body.image,req.body.title,req.body.description,req.body.category,req.user.id)
//         res.status(200).json({message:"recipie added successfully", recipie: recipie})
//     }   
//     catch(error){
//         console.log(error);
//         return res.json({message:error.message})
//     }
// }
exports.addRecipie = async (req, res) => {
    try {
      const { title, image, description, category } = req.body;
      const userId = req.user.id;
  
      console.log("Recipe details:", title, image, description, category, userId);
  
      const recipie = await addRecipieService.addingRecipie(title, image, description, category, userId);
      res.status(200).json({ message: "Recipie added successfully", recipie });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  };
  
