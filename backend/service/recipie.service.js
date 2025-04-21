

const{recipies}=require('../models')

exports.addingRecipie=async(title,image,description,category,id)=>{
    console.log("this is the details to add in db",title,image,description,category,id)
    if(!title|| !image||!description|| !category  ){
        throw new Error("bhai sara detail enter karo yaar");
    }
    if(category=="Breakfast"||category=="Lunch"||category=="Dinner"||category=="Salad"||category=="Chinise"){
        const recipie=await recipies.create({image,title,description,category,belongsTo:id})
        return recipie;

    }
    else{
        throw new Error("kya yaar category kch bhi enter kar rahe ho")
    }
}