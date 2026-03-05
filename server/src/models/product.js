import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
      trim: true,
    },
    product_description: {
      type: String,
      required: true,
    },

    primary_category: {
      type: String,
      default: null,
    },

    sub_category: {
      type: String,
      default: null,
    },

    seo_tags: {
      type: [String],
      default: [],
    },

    sustainability_filters: {
      type: [String],
      enum: [
        "plastic-free",
        "compostable",
        "vegan",
        "recycled",
        "biodegradable",
      ],
      default: [],
    },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model("Product", productSchema);

export default Product;
