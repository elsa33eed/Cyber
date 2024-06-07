const Ajv = require("ajv");
const ajv = new Ajv();

const ProductSchema = {
    type: "object",
    properties: {
        _id: { type: "integer" },
        BrandName: { type: "string" },
        ModelName: { type: "string" },
        // Picture: { type: "string" },
        Picture: { type: "array", items: { type: "string" } },
        CategoryId: { type: "array", items: { type: "integer" } },
        // Color: { type: "string"  },
        Color: { type: "array", items: { type: "string" } },
        DiscountId: { type: "integer" },
        Description: { type: "string" },
        Quantity: { type: "integer" },
        Price: { type: "integer" },
        DiscountActive: { type: "boolean" },
        NewArrival: { type: "boolean" },
        BestSeller: { type: "boolean" },
        FeaturedProduct: { type: "boolean" }
    },
    required: ["BrandName", "ModelName", "Picture", "CategoryId", "Color", "DiscountId", "Description", "Quantity", "Price", "DiscountActive", "NewArrival", " BestSeller", "FeaturedProduct"],
    additionalProperties: true                                                                                                   
}
module.exports = ajv.compile(ProductSchema);
