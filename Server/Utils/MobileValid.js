const Ajv = require("ajv");
const ajv = new  Ajv();

const MobileSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        BrandName:{type: "string"},
        ModelName: {type: "string"},
        Picture:{type: "string"},
        OS:{type: "string"},
        Storage:{type: "string"},
        Color:{type: "string"},
        Screen:{type: "string"},
        Battery:{type: "string"},
        ReleaseYear:{type: "integer"},
        Description:{type: "string"},
        Quantity:{type: "integer"},
        Price:{type: "integer"}
    },
    required: ["BrandName","ModelName","Picture","OS","Storage","Color","Screen","Battery","ReleaseYear","Description","Quantity","Price"],
    additionalProperties: false
}
module.exports = ajv.compile(MobileSchema);
