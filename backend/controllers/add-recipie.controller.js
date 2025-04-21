const{addRecipieService}=require('../service');

exports.addRecipie = async (req, res) => {
    try {
      console.log("this is add recipie request",req)
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
  
