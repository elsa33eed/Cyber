const OrderItemsValid = require("../Utils/OrderItemsValid")
const OrderItemsModel = require("../Models/OrderItems")

const getAllOrderItems = async (req, res) => {
    const OrderItems = await OrderItemsModel.getAllOrderItems();
    res.json(OrderItems);
}

const getOrderItemByID = async (req, res) => {
    var ID = req.params.id;
    var foundedOrderItem = await OrderItemsModel.getOrderItem(ID);
    res.json(foundedOrderItem);
}

const getOrderItemsByOrderID = async (req, res) => {
    var ID = req.params.OrderId
    var foundedOrderItems = await OrderItemsModel.getOrderItemsByOrderID(ID);
    res.json(foundedOrderItems);
}

const updateOrderItemByID = async (req, res) => {
    var ID = req.params.id;
    var data = req.body;
    if (OrderItemsValid(data)) {
        var updatedOrderItem = await OrderItemsModel.updateOrderItem(ID, data)
        res.json(updatedOrderItem)
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}

const deleteOrderItemsByOrderID = async (req,res) => {
    var ID = req.params.OrderId;
    await OrderItemsModel.deleteOrderItemsByOrderID(ID);
    res.json({ message: "Order Items Deleted Succesfully"});
}

const deleteOrderItemByID = async (req, res) => {
    var ID = req.params.id
    await OrderItemsModel.deleteOrderItem(ID)
    var data = await OrderItemsModel.getAllOrderItems();
    res.json({ message: "Deleted Succesfully", Data: data });
}

const addOrderItem = async (req, res) => {
    var data = req.body;
    if (OrderItemsValid(data)) {
        var newOrderItem = await OrderItemsModel.addOrderItem(data);
        res.json(newOrderItem);
    } else {
        res.status(400).json({ message: "Validation Error" });
    }
}
module.exports = {
    getAllOrderItems,
    getOrderItemByID,
    getOrderItemsByOrderID,
    deleteOrderItemsByOrderID,
    updateOrderItemByID,
    deleteOrderItemByID,
    addOrderItem
}