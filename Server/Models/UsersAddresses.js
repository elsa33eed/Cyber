const mongoose = require('./db');

const UsersAddressesSchema = new mongoose.Schema({
    "_id": { type: Number },
    "UserId": { type: Number },
    "AddressLine": { type: String },
    "City": { type: String },
    "Country": { type: String },
});
const address = mongoose.model("UsersAddresses", UsersAddressesSchema);

const getAllAddresses = async () => {
    const addresses = await address.find({})
    return addresses;
}

const getAddress = async (id) => {
    const foundedAddress = await address.find({ _id: id })
    return foundedAddress;
}

const getAddressByUserID = async (id) => {
    const foundedAddress = await address.find({UserId:id})
    return foundedAddress;
}

const updateAddress = async (id, data) => {
    var updatedAddress = await address.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    return updatedAddress;
}

const deleteAddress = async (id) => {
    await address.findByIdAndDelete(id)
}

const addAddress = async (data) => {
    var maxIdAddress = await address.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdAddress ? maxIdAddress._id : 0;
    data._id = maxId + 1;
    var newAddress = await new address(data);
    await newAddress.save();
    return newAddress

}

module.exports = {
    getAllAddresses,
    getAddress,
    getAddressByUserID,
    updateAddress,
    deleteAddress,
    addAddress
}