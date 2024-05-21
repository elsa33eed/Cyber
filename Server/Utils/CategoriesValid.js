const Ajv = require("ajv");
const ajv = new  Ajv();

const CategorySchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        CategoryName:{type: "string"}
    },
    required: ["CategoryName"],
    additionalProperties: false
}
module.exports = ajv.compile(CategorySchema);
