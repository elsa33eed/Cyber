const PaymentsValid = require("../Utils/UsersPaymentsValid")
const PaymentsModel = require("../Models/UsersPayments")

const getAllPayments = async (req, res) => {
    const Payments = await PaymentsModel.getAllPayments();
    res.json(Payments);
}

const getPaymentByID = async (req, res) => {
    var ID = req.params.id;
    var foundedPayment = await PaymentsModel.getPayment(ID);
    res.json(foundedPayment);
}

const getPaymentByUserID = async (req, res) => {
    var ID = req.params.UserId
    var foundedPayment = await PaymentsModel.getPaymentByUserID(ID);
    res.json(foundedPayment);
}

const updatePaymentByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (PaymentsValid(data)) {
        var updatedPayment = await PaymentsModel.updatePayment(ID, data)
        res.json(updatedPayment)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deletePaymentByID = async (req, res) => {
    var ID = req.params.id
    await PaymentsModel.deletePayment(ID)
    var data = await PaymentsModel.getAllPayments();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addPayment = async (req, res) => {
    var data = req.body;
    if (PaymentsValid(data)) {
        var newPayment = await PaymentsModel.addPayment(data);
        res.json(newPayment);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllPayments,
    getPaymentByID,
    getPaymentByUserID,
    updatePaymentByID,
    deletePaymentByID,
    addPayment
}