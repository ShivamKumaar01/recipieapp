const { getByCategoryService } = require("../service");
exports.recipieByCategory = async (req, res) => {
  try {
    console.log(req.params,"req.params me kch aa bhi raha hai ya nahi");
    const recipies = await getByCategoryService.getByCategory(req.params.category);
    if (!recipies) {
      return res.status(404).json({ message: "recipies not found" });
    }
    return res.json({ message: "all recipies is here ", recipies: recipies });
  } catch (error) {
    console.log(error);
    return res.status(404).json({ message: error.message });
  }
};
