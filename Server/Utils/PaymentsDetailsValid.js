const Ajv = require("ajv");
const ajv = new Ajv();

const PaymentsDetailsSchema = {
    type: "object",
    properties: {
        _id: { type: "integer" },
        OrderId: { type: "integer" },
        Amount: { type: "integer" },
        Provider: { type: "string" },
        Status: { type: "string" }
    },
    required: ["OrderId", "Amount", "Provider", "Status"],
    additionalProperties: false
}
module.exports = ajv.compile(PaymentsDetailsSchema);
