const AccessoriesValid = require("../Utils/AccessoriesValid")
const AccessoriesModel = require("../Models/Accessories")

const getAllAccessories = async (req, res) => {
    const Accessories = await AccessoriesModel.getAllAccessories();
    res.json(Accessories);
}

const getAccessoriesByCategory = async(req,res) => {
    Category =req.params.categoryId
    const Accessories = await AccessoriesModel.getAccessoriesByCategory(Category);
    res.json(Accessories);
}

const getAccessoryByID = async (req, res) => {
    var ID = req.params.id;
    var foundedAccessory = await AccessoriesModel.getAccessory(ID);
    res.json(foundedAccessory);
}

const updateAccessoryByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (AccessoriesValid(data)) {
        var updatedAccessory = await AccessoriesModel.updateAccessory(ID, data)
        res.json(updatedAccessory)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteAccessoryByID = async (req, res) => {
    var ID = req.params.id
    await AccessoriesModel.deleteAccessory(ID)
    var data = await AccessoriesModel.getAllAccessories();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addAccessory = async (req, res) => {
    var data = req.body;
    if (AccessoriesValid(data)) {
        var newAccessory = await AccessoriesModel.addAccessory(data);
        res.json(newAccessory);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllAccessories,
    getAccessoriesByCategory,
    getAccessoryByID,
    updateAccessoryByID,
    deleteAccessoryByID,
    addAccessory
}