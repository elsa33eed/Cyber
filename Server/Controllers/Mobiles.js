const MobileValid = require("../Utils/MobileValid")
const MobileModel = require("../Models/Mobiles")

const getAllMobiles = async (req, res) => {
    const mobiles = await MobileModel.getAllMobiles();
    res.json(mobiles);
}

const getMobileByID = async (req, res) => {
    var ID = req.params.id;
    var foundedMobile = await MobileModel.getMobile(ID);
    res.json(foundedMobile);
}

const updateMobileByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (MobileValid(data)) {
        var updatedMobile = await MobileModel.updateMobile(ID, data)
        res.json(updatedMobile)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteMobileByID = async (req, res) => {
    var ID = req.params.id
    await MobileModel.deleteMobile(ID)
    var data = await MobileModel.getAllMobiles();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addMobile = async (req, res) => {
    var data = req.body;
    if (MobileValid(data)) {
        var newMobile = await MobileModel.addMobile(data);
        res.json(newMobile);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllMobiles,
    getMobileByID,
    updateMobileByID,
    deleteMobileByID,
    addMobile
}