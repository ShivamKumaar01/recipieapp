const { getAllRecipiesService } = require("../service");
exports.getAllRecipie=async(req,res)=>{
    try{
        console.log("this is get all recipie reques",req.user.id);
        const userId = req.user.id;

        const recipies=await getAllRecipiesService.getRecipies({query: req.query, user_id: userId});

  
        // const recipies=await getAllRecipiesService.getRecipies(req.query.category,req.query.page,req.query.limit,req.query.isFav,userId);
        if (!recipies) {
            return res.status(404).json({ message: "recipies not found" });
          }
          return res.json({ message: "all recipies is here ", recipies: recipies });
    }catch(error){
        return res.json({message:error.message})
    }

}