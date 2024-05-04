const Ajv = require("ajv");
const ajv = new  Ajv();
//identify ajv User Schema
const RegisterationSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        Username:{type: "string",minLength:3},
        Email:{type: "string",pattern:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+(\.com){1}$"},
        Password:{type:"string",minLength:5},
        IsAdmin:{type:"boolean"}
    },
    required: ["Username", "Email", "Password", "IsAdmin"],
    additionalProperties: false
}
module.exports = ajv.compile(RegisterationSchema);
