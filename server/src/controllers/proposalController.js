import AiLog from "../models/aiLog.js";
import proposalPrompt from "../services/ai/proposalPrompt.js";
import { callAI } from "../services/ai/aiClient.js";
import jsonParser from "../utils/jsonParser.js";
import asyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";

/**
 * proposalController - Handles proposal generation using AI.
 * @route POST /api/ai/proposal
 * @body {string} budget - Budget for the event.
 * @body {string} event_type - Type of the event (e.g., conference, wedding).
 * @body {string} company_size - Size of the company (e.g., small, medium, large).
 * @returns {object} AI-generated proposal details.
 */
const proposalController = asyncHandler(async (req, res) => {
  try {
    const { budget, event_type, company_size } = req.body || {};

    // Safety validation (middleware should already check this)
    if (!budget || !event_type || !company_size) {
      throw new ApiError(
        400,
        "budget, event_type, and company_size are required"
      );
    }

    // Generate prompt
    const prompt = proposalPrompt(budget, event_type, company_size);

    // Call AI
    const aiResponse = await callAI(prompt);

    const cleaned = jsonParser(aiResponse);
    const parsed = JSON.parse(cleaned);

    // Log prompt and response
    await AiLog.create({
      module: "proposal-generator",
      prompt: prompt,
      response: aiResponse,
    });

    res
      .status(200)
      .json(new ApiResponse(200, "Proposal generated successfully", parsed));
  } catch (error) {
    console.error("Proposal controller error:", error);

    throw new ApiError(
      500,
      "Failed to generate proposal. Please try again later.",
      error instanceof Error ? [error.message] : []
    );
  }
});

export { proposalController };
