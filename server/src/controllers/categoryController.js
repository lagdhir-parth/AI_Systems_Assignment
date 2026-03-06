import AiLog from "../models/aiLog.js";
import Product from "../models/product.js";
import categoryPrompt from "../services/ai/categoryPrompt.js";
import { callAI } from "../services/ai/aiClient.js";
import jsonParser from "../utils/jsonParser.js";
import asyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * categoryController - Handles product category generation using AI.
 * @route POST /api/ai/category
 * @body {string} product_name - Name of the product.
 * @body {string} product_description - Description of the product.
 * @returns {object} AI-generated category info and SEO tags.
 */
const categoryController = asyncHandler(async (req, res) => {
  try {
    const { product_name, product_description } = req.body || {};

    // Safety check (middleware should handle this, but double safety is good)
    if (!product_name || !product_description) {
      throw new ApiError(
        400,
        "product_name and product_description are required"
      );
    }

    // Generate prompt
    const prompt = categoryPrompt(product_name, product_description);

    // Call AI
    const aiResponse = await callAI(prompt);

    const cleaned = jsonParser(aiResponse);

    const parsed = JSON.parse(cleaned);

    // Save prompt + response log
    await AiLog.create({
      module: "category-generator",
      prompt: prompt,
      response: cleaned,
    });

    // Save product with AI-generated category info
    await Product.create({
      product_name,
      product_description,
      primary_category: parsed.primary_category,
      sub_category: parsed.sub_category,
      seo_tags: parsed.seo_tags,
      sustainability_filters: parsed.sustainability_filters,
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Category generated successfully", parsed));
  } catch (error) {
    console.error("Category controller error:", error);

    throw new ApiError(
      500,
      "Failed to generate category. Please try again later.",
      error instanceof Error ? [error.message] : []
    );
  }
});

export { categoryController };
