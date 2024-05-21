const OrdersDetailsValid = require("../Utils/OrdersDetailsValid")
const OrdersDetailsModel = require("../Models/OrdersDetails")
const OrderItemsModel = require("../Models/OrderItems")
const PaymentsDetailsController = require("./PaymentsDetails")

const getAllOrdersDetails = async (req, res) => {
    const OrdersDetails = await OrdersDetailsModel.getAllOrdersDetails();
    res.json(OrdersDetails);
}

const getOrderDetailstByID = async (req, res) => {
    var ID = req.params.id;
    var foundedOrderDetail = await OrdersDetailsModel.getOrderDetails(ID);
    res.json(foundedOrderDetail);
}

const getOrdersDetailsByUserID = async (req, res) => {
    var ID = req.params.UserID;
    var foundedOrdersDetails = await OrdersDetailsModel.getOrdersDetailsByUserID(ID);
    res.json(foundedOrdersDetails);
}

const updateOrderDetailsByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (OrdersDetailsValid(data)) {
        var updatedOrderDetails = await OrdersDetailsModel.updateOrderDetails(ID, data)
        res.json(updatedOrderDetails)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteOrderDetailsByID = async (req, res) => {
    var ID = req.params.id
    await OrderItemsModel.deleteOrderItemsByOrderID(ID)
    // PaymentsDetailsController.deletePaymentDetailstByOrderID(ID)
    await OrdersDetailsModel.deleteOrderDetails(ID)
    var data = await OrdersDetailsModel.getAllOrdersDetails();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addOrderDetails = async (req, res) => {
    var data = req.body;
    if (OrdersDetailsValid(data)) {
        var newOrderDetails = await OrdersDetailsModel.addOrderDetails(data);
        res.json(newOrderDetails);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllOrdersDetails,
    getOrderDetailstByID,
    getOrdersDetailsByUserID,
    updateOrderDetailsByID,
    deleteOrderDetailsByID,
    addOrderDetails
}