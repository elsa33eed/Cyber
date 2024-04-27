const LaptopValid = require("../Utils/LaptopValid")
const LaptopModel = require("../Models/Labtops")

const getAllLaptops = async (req, res) => {
    const laptops = await LaptopModel.getAllLaptops();
    res.json(laptops);
}

const getLaptopByID = async (req, res) => {
    var ID = req.params.id;
    var foundedLaptop = await LaptopModel.getLaptop(ID);
    res.json(foundedLaptop);
}

const updateLaptopByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (LaptopValid(data)) {
        var updatedLaptop = await LaptopModel.updateLaptop(ID, data)
        res.json(updatedLaptop)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteLaptopByID = async (req, res) => {
    var ID = req.params.id
    await LaptopModel.deleteLaptop(ID)
    var data = await LaptopModel.getAllLaptops();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addLaptop = async (req, res) => {
    var data = req.body;
    if (LaptopValid(data)) {
        var newLaptop = await LaptopModel.addLaptop(data);
        res.json(newLaptop);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllLaptops,
    getLaptopByID,
    updateLaptopByID,
    deleteLaptopByID,
    addLaptop
}