const PaymentsDetailsValid = require("../Utils/PaymentsDetailsValid")
const PaymentsDetailsModel = require("../Models/PaymentsDetails")

const getAllPaymentsDetails = async (req, res) => {
    const PaymentsDetails = await PaymentsDetailsModel.getAllPaymentsDetails();
    res.json(PaymentsDetails);
}

const getPaymentDetailstByID = async (req, res) => {
    var ID = req.params.id;
    var foundedPaymentDetail = await PaymentsDetailsModel.getPaymentDetails(ID);
    res.json(foundedPaymentDetail);
}

const getPaymentsDetailsByOrderID = async (req, res) => {
    var ID = req.params.OrderID;
    var foundedPaymentsDetails = await PaymentsDetailsModel.getPaymentsDetailsByOrderID(ID);
    res.json(foundedPaymentsDetails);
}

const updatePaymentDetailsByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (PaymentsDetailsValid(data)) {
        var updatedPaymentDetails = await PaymentsDetailsModel.updatePaymentDetails(ID, data)
        res.json(updatedPaymentDetails)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deletePaymentDetailsByID = async (req, res) => {
    var ID = req.params.id
    await PaymentsDetailsModel.deletePaymentDetails(ID)
    res.json({ message: "Payment Details Deleted Succesfully"});
}

const deletePaymentDetailstByOrderID = async (req, res) => {
    var ID = req.params.OrderID
    await PaymentsDetailsModel.deletePaymentDetailstByOrderID(ID)
    res.json({ message: "Payment Details Deleted Succesfully"});

}
const addPaymentDetails = async (req, res) => {
    var data = req.body;
    if (PaymentsDetailsValid(data)) {
        var newPaymentDetails = await PaymentsDetailsModel.addPaymentDetails(data);
        res.json(newPaymentDetails);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllPaymentsDetails,
    getPaymentDetailstByID,
    getPaymentsDetailsByOrderID,
    updatePaymentDetailsByID,
    deletePaymentDetailsByID,
    deletePaymentDetailstByOrderID,
    addPaymentDetails
}