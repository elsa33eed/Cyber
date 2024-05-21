const Ajv = require("ajv");
const ajv = new  Ajv();

const OrderItemSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        OrderID:{type: "integer"},
        ProductID:{type: "integer"},
        Quantity:{type: "integer"},
        Total: { type: "integer" }
    },
    required: ["OrderID","ProductID","Quantity", "Total"],
    additionalProperties: false
}
module.exports = ajv.compile(OrderItemSchema);
