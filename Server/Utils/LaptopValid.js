const Ajv = require("ajv");
const ajv = new  Ajv();

const LaptopSchema = {
    type: "object",
    properties: {
        _id: {type: "integer"},
        BrandName:{type: "string"},
        ModelName: {type: "string"},
        Picture:{type: "string"},
        Processor:{type: "string"},
        Hard:{type: "string"},
        GraphicCard:{type:"string"},
        Color:{type: "string"},
        Screen:{type: "string"},
        Ram:{type: "string"},
        ReleaseYear:{type: "integer"},
        Description:{type: "string"},
        Quantity:{type: "integer"},
        Price:{type: "integer"}
    },
    required: ["BrandName","ModelName","Picture","Processor","GraphicCard","Hard","Color","Screen","Ram","ReleaseYear","Description","Quantity","Price"],
    additionalProperties: false
}
module.exports = ajv.compile(LaptopSchema);
