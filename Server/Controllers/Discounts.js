const DiscountsValid = require("../Utils/DiscountsValid")
const DiscountsModel = require("../Models/Discounts")

const getAllDiscounts = async (req, res) => {
    const Discounts = await DiscountsModel.getAllDiscounts();
    res.json(Discounts);
}

const getDiscountByID = async (req, res) => {
    var ID = req.params.id;
    var foundedDiscount = await DiscountsModel.getDiscount(ID);
    res.json(foundedDiscount);
}

const updateDiscountByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (DiscountsValid(data)) {
        var updatedDiscount = await DiscountsModel.updateDiscount(ID, data)
        res.json(updatedDiscount)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteDiscountByID = async (req, res) => {
    var ID = req.params.id
    await DiscountsModel.deleteDiscount(ID)
    var data = await DiscountsModel.getAllDiscounts();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addDiscount = async (req, res) => {
    var data = req.body;
    if (DiscountsValid(data)) {
        var newDiscount = await DiscountsModel.addDiscount(data);
        res.json(newDiscount);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllDiscounts,
    getDiscountByID,
    updateDiscountByID,
    deleteDiscountByID,
    addDiscount
}