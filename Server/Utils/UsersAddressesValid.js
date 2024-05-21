const Ajv = require("ajv");
const ajv = new  Ajv();
//identify ajv User Schema
const UsersAddressesSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        UserId:{type: "integer"},
        AddressLine:{type: "string"},
        City:{type: "string"},
        Country:{type: "string"}
    },
    required: ["UserId", "AddressLine", "City", "Country"],
    additionalProperties: false
}
module.exports = ajv.compile(UsersAddressesSchema);
