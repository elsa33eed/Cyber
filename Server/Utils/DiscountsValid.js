const Ajv = require("ajv");
const ajv = new  Ajv();

const DiscountSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        DiscountName:{type: "string"},
        Description:{type: "string"},
        DiscountPercent:{type: "integer"},
        Active:{type: "boolean"}
    },
    required: ["DiscountName","DiscountPercent", "Active"],
    additionalProperties: false
}
module.exports = ajv.compile(DiscountSchema);
