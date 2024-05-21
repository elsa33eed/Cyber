const mongoose = require('./db');

const UsersPaymentSchema = new mongoose.Schema({
    "_id": { type: Number },
    "UserId": { type: Number },
    "PaymentType": { type: String },
    "Provider": { type: String },
    "AccountNo": { type: Number },
    "Expiry": { type: String },
});
const payment = mongoose.model("UsersPayment", UsersPaymentSchema);

const getAllPayments = async () => {
    const payments = await payment.find({})
    return payments;
}

const getPayment = async (id) => {
    const foundedPayment = await payment.find({ _id: id })
    return foundedPayment;
}

const getPaymentByUserID = async (id) => {
    const foundedPayment = await payment.find({UserId:id})
    return foundedPayment;
}

const updatePayment = async (id, data) => {
    var updatedPayment = await payment.findByIdAndUpdate(id, data, { new: true, runValidators: true })
    return updatedPayment;
}

const deletePayment = async (id) => {
    await payment.findByIdAndDelete(id)
}

const addPayment = async (data) => {
    var maxIdPayments = await payment.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdPayments ? maxIdPayments._id : 0;
    data._id = maxId + 1;
    var newPayment = await new payment(data);
    await newPayment.save();
    return newPayment

}

module.exports = {
    getAllPayments,
    getPayment,
    getPaymentByUserID,
    updatePayment,
    deletePayment,
    addPayment
}