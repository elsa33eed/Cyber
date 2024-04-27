const Ajv = require("ajv");
const ajv = new  Ajv();

const AccessorySchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        BrandName:{type: "string"},
        ModelName: {type: "string"},
        Picture:{type: "string"},
        CategoryId:{type: "integer"},
        Color:{type: "string"},
        ReleaseYear:{type: "integer"},
        Description:{type: "string"},
        Quantity:{type: "integer"},
        Price:{type: "integer"}
    },
    required: ["BrandName","ModelName","Picture","CategoryId","Color","ReleaseYear","Description","Quantity","Price"],
    additionalProperties: false
}
module.exports = ajv.compile(AccessorySchema);
