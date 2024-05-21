const AddressesValid = require("../Utils/UsersAddressesValid")
const AddressesModel = require("../Models/UsersAddresses")

const getAllAddresses = async (req, res) => {
    const Addresses = await AddressesModel.getAllAddresses();
    res.json(Addresses);
}

const getAddressByID = async (req, res) => {
    var ID = req.params.id;
    var foundedAddress = await AddressesModel.getAddress(ID);
    res.json(foundedAddress);
}

const getAddressByUserID = async (req, res) => {
    var ID = req.params.UserId
    var foundedAddress = await CartItemsModel.getAddressByUserID(ID);
    res.json(foundedAddress);
}

const updateAddressByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (AddressesValid(data)) {
        var updatedAddress = await AddressesModel.updateAddress(ID, data)
        res.json(updatedAddress)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteAddressByID = async (req, res) => {
    var ID = req.params.id
    await AddressesModel.deleteAddress(ID)
    var data = await AddressesModel.getAllAddresses();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addAddress = async (req, res) => {
    var data = req.body;
    if (AddressesValid(data)) {
        var newAddress = await AddressesModel.addAddress(data);
        res.json(newAddress);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllAddresses,
    getAddressByID,
    getAddressByUserID,
    updateAddressByID,
    deleteAddressByID,
    addAddress
}