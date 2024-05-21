const Ajv = require("ajv");
const ajv = new  Ajv();
//identify ajv User Schema
const RegisterationSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        FirstName:{type: "string",minLength:3},
        LastName:{type: "string",minLength:3},
        Username:{type: "string"},
        Email:{type: "string",pattern:"^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+(\.com){1}$"},
        Password:{type:"string",minLength:5},
        Telephone:{type:"string",pattern:"^[+]{1}[0-9]{12}$"},
        IsAdmin:{type:"boolean"}
    },
    required: ["Username", "Email", "Password", "IsAdmin"],
    additionalProperties: false
}
module.exports = ajv.compile(RegisterationSchema);
