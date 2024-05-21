const Ajv = require("ajv");
const ajv = new Ajv();

const CartItemSchema = {
    type: "object",
    properties: {
        _id: { type: "integer" },
        ShoppingCartID: { type: "integer" },
        ProductID: { type: "integer" },
        Quantity: { type: "integer" },
        Total: { type: "integer" }
    },
    required: ["ShoppingCartID", "ProductID", "Quantity", "Total"],
    additionalProperties: false
}
module.exports = ajv.compile(CartItemSchema);
