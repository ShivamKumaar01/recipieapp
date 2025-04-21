const{recipies}=require('../models')
exports.getByCategory=async(category)=>{
    console.log(category);
    if(!category){
        return null;
    }
    const recipie=await recipies.findAll({where:{category}})
    if(!recipie){
        throw new Error("error in fetching data from recipie")
    }
    return recipie;
}