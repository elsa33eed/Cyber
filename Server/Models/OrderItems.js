const mongoose = require('./db');

const OrderItemSchema = new mongoose.Schema({
    "_id": { type: Number },
    "OrderID": { type: Number },
    "ProductID": { type: Number },
    "Quantity": { type: Number },
    "Total": { type: Number}
});
const OrderItem = mongoose.model("OrderItems", OrderItemSchema);

const getAllOrderItems = async () => {
    const OrderItems = await OrderItem.find({})
    return OrderItems;
}

const getOrderItem = async (id) => {
    const foundedOrderItem = await OrderItem.find({_id:id})
    return foundedOrderItem;
}

const getOrderItemsByOrderID = async (id) => {
    const foundedOrderItems = await OrderItem.find({OrderID:id})
    return foundedOrderItems;
}

const updateOrderItem = async (id, data)=>{
    var updatedOrderItem = await OrderItem.findByIdAndUpdate(id, data, {new:true, runValidators:true})
    return updatedOrderItem;
}

const deleteOrderItem = async (id)=>{
    await OrderItem.findByIdAndDelete(id)
}

const deleteOrderItemsByOrderID = async (id) => {
    var foundedOrderItems = await OrderItem.find({OrderID:id})
    foundedOrderItems.forEach(async (Item)=>{await OrderItem.findByIdAndDelete(Item._id)})
}

const addOrderItem = async (data)=>{
    var maxIdOrderItem = await OrderItem.findOne({}, { _id: 1 }, { sort: { _id: -1 } });
    var maxId = maxIdOrderItem ? maxIdOrderItem._id : 0;
    data._id = maxId+1;
    var newOrderItem = await new OrderItem(data);
    await newOrderItem.save();
    return newOrderItem  
}
module.exports= {
    getAllOrderItems,
    getOrderItem,
    getOrderItemsByOrderID,
    deleteOrderItemsByOrderID,
    updateOrderItem,
    deleteOrderItem,
    addOrderItem
}