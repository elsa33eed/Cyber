const CategoriesValid = require("../Utils/CategoriesValid")
const CategoriesModel = require("../Models/Categories")

const getAllCategories = async (req, res) => {
    const Categories = await CategoriesModel.getAllCategories();
    res.json(Categories);
}

const getCategoryByID = async (req, res) => {
    var ID = req.params.id;
    var foundedCategory = await CategoriesModel.getCategory(ID);
    res.json(foundedCategory);
}

const updateCategoryByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (CategoriesValid(data)) {
        var updatedCategory = await CategoriesModel.updateCategory(ID, data)
        res.json(updatedCategory)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteCategoryByID = async (req, res) => {
    var ID = req.params.id
    await CategoriesModel.deleteCategory(ID)
    var data = await CategoriesModel.getAllCategories();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addCategory = async (req, res) => {
    var data = req.body;
    if (CategoriesValid(data)) {
        var newCategory = await CategoriesModel.addCategory(data);
        res.json(newCategory);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllCategories,
    getCategoryByID,
    updateCategoryByID,
    deleteCategoryByID,
    addCategory
}