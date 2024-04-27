const Ajv = require("ajv");
const ajv = new  Ajv();
//identify ajv User Schema
const LoginSchema = {
    type: "object",
    properties: {
        Email:{type: "string",pattern:"^[a-zA-Z0-9]+\@{1}[a-zA-Z0-9]+(.com){1}$"},
        Password:{type:"string",minLength:5}
    },
    required: ["Email","Password"],
    additionalProperties: false
}
module.exports = ajv.compile(LoginSchema);
