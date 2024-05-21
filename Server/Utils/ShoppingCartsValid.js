const Ajv = require("ajv");
const ajv = new  Ajv();

const ShoppingCartSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        UserId:{type: "integer"},
        Total:{type: "integer"}
    },
    required: ["UserId","Total"],
    additionalProperties: false
}
module.exports = ajv.compile(ShoppingCartSchema);
