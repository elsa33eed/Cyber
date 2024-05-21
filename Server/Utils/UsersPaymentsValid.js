const Ajv = require("ajv");
const ajv = new  Ajv();
//identify ajv User Schema
const UsersPaymentSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        UserId:{type: "integer"},
        PaymentType:{type: "string"},
        Provider:{type: "string"},
        AccountNo:{type: "integer"},
        Expiry:{type: "string"}
    },
    required: ["UserId", "PaymentType", "Provider", "AccountNo", "Expiry"],
    additionalProperties: false
}
module.exports = ajv.compile(UsersPaymentSchema);
