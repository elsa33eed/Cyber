const mongoose = require('./db');

const OrderDetailsSchema = new mongoose.Schema({
    "_id": { type: Number },
    "UserId": { type: Number },
    "Total": { type: Number },
    "PaymentId": { type: Number }
});
const orderDetails = mongoose.model("OrdersDetails", OrderDetailsSchema);

const getAllOrdersDetails = async () => {
    const OrdersDetails = await orderDetails.find({})
    return OrdersDetails;
}

const getOrderDetails = async (id) => {
    const foundedOrderDetails = await orderDetails.find({ _id: id })
    return foundedOrderDetails;
}

const getOrdersDetailstByUserID = async (id) => {
    const foundedOrdersDetails = await orderDetails.find({ UserId: id })
    return foundedOrdersDetails;
}

const updateOrderDetails = async (id, data) => {
    var updatedOrderDetails = await orderDetails.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    return updatedOrderDetails;
}

const deleteOrderDetails = async (id) => {
    await orderDetails.findByIdAndDelete(id)
}

const addOrderDetails = async (data) => {
    var maxIdOrderDetails = await orderDetails.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdOrderDetails ? maxIdOrderDetails._id : 0;
    data._id = maxId + 1;
    var newOrderDetails = await new orderDetails(data);
    await newOrderDetails.save();
    return newOrderDetails
}
module.exports = {
    getAllOrdersDetails,
    getOrderDetails,
    getOrdersDetailstByUserID,
    updateOrderDetails,
    deleteOrderDetails,
    addOrderDetails
}