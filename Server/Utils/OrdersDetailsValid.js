const Ajv = require("ajv");
const ajv = new Ajv();

const OrdersDetailsSchema = {
    type: "object",
    properties: {
        _id: { type: "integer" },
        UserId: { type: "integer" },
        Total: { type: "integer" },
        PaymentId: { type: "integer" }
    },
    required: ["UserId", "Total", "PaymentId"],
    additionalProperties: false
}
module.exports = ajv.compile(OrdersDetailsSchema);
