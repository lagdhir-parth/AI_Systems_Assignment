import mongoose from "mongoose";

/**
 * productSchema - Mongoose schema for sustainable products.
 * This schema defines the structure of documents in the Product collection, which includes fields for product name, description, category, SEO tags, and sustainability filters.
 * The sustainability filters are restricted to a predefined set of allowed values.
 * Each product document also includes timestamps for when it was created and last updated.
 */
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
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
