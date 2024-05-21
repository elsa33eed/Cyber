const mongoose = require('./db');

const PaymentDetailsSchema = new mongoose.Schema({
    "_id": { type: Number },
    "OrderId": { type: Number },
    "Amount": { type: Number },
    "Provider": { type: String },
    "Status": { type: String }
});
const paymentDetails = mongoose.model("PaymentsDetails", PaymentDetailsSchema);

const getAllPaymentsDetails = async () => {
    const PaymentsDetails = await paymentDetails.find({})
    return PaymentsDetails;
}

const getPaymentDetails = async (id) => {
    const foundedPaymentDetails = await paymentDetails.find({ _id: id })
    return foundedPaymentDetails;
}

const getPaymentDetailstByOrderID = async (id) => {
    const foundedPaymentDetails = await paymentDetails.find({ OrderId: id })
    return foundedPaymentDetails;
}

const updatePaymentDetails = async (id, data) => {
    var updatedPaymentDetails = await paymentDetails.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    return updatedPaymentDetails;
}

const deletePaymentDetails = async (id) => {
    await paymentDetails.findByIdAndDelete(id)
}

const deletePaymentDetailstByOrderID = async (id) => {
    await paymentDetails.findOneAndDelete({ OrderId: id })
}

const addPaymentDetails = async (data) => {
    var maxIdPaymentDetails = await paymentDetails.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdPaymentDetails ? maxIdPaymentDetails._id : 0;
    data._id = maxId + 1;
    var newPaymentDetails = await new paymentDetails(data);
    await newPaymentDetails.save();
    return newPaymentDetails
}
module.exports = {
    getAllPaymentsDetails,
    getPaymentDetails,
    getPaymentDetailstByOrderID,
    updatePaymentDetails,
    deletePaymentDetails,
    deletePaymentDetailstByOrderID,
    addPaymentDetails
}