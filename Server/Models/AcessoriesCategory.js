const mongoose = require('./db');

const CategorySchema = new mongoose.Schema({
    "_id": { type: Number },
    "CategoryName": { type: String }
});
const Category = mongoose.model("Categories", CategorySchema);

const getAllCategories = async () => {
    const Categories = await Category.find({})
    return Categories;
}

const getCategory = async (id) => {
    const foundedCategory = await Category.find({_id:id})
    return foundedCategory;
}

const updateCategory = async (id, data)=>{
    var updatedCategory = await Category.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedCategory;
}

const deleteCategory = async (id)=>{
    await Category.findByIdAndDelete(id)
}

const addCategory = async (data)=>{
    var maxIdCategory = await Category.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdCategory ? maxIdCategory._id : 0;
    data._id = maxId+1;
    var newCategory = await new Category(data);
    await newCategory.save();
    return newCategory  
}
module.exports= {
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
    addCategory
}