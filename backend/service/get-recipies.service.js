const{recipies}=require('../models')
const{Like}=require('../models')
exports.getRecipies=async({query, user_id})=>{
    const {page, limit, category, isFav} = query
   console.log(category,"this is category")
   const whereobj={}

   if(category){
    whereobj["category"]=category
   }

   if(isFav==true){
    const recipie = await Like.findAll({ where: { recipieid: isFav, likedByWhom: user_id} })
    if (!recipie) {
        throw new Error("phle se hi like kiya hua hai")
    }
   }

    const recipie=await recipies.findAll({where:whereobj,page,limit,isFav})
   
    if(!recipie){
        throw new Error("error in gettting recipies")
    }
    return recipie;
}