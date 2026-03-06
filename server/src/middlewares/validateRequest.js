import ApiError from "../utils/ApiError.js";

/**
 * validateCategoryRequest - Middleware to validate category generation requests.
 * Ensures product_name and product_description are present and non-empty.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 * @param {function} next - Express next middleware function.
 * @throws {ApiError} 400 if validation fails.
 */
const validateCategoryRequest = (req, res, next) => {
  const { product_name, product_description } = req.body || {};

  if (!product_name || product_name.trim() === "") {
    throw new ApiError(400, "product_name is required");
  }

  if (!product_description || product_description.trim() === "") {
    throw new ApiError(400, "product_description is required");
  }

  next();
};

/**
 * validateProposalRequest - Middleware to validate proposal generation requests.
 * Ensures budget, event_type, and company_size are present and valid.
 * @route POST /api/ai/proposal
 * @body {string} budget - Budget for the event.
 * @body {string} event_type - Type of the event (e.g., conference, wedding).
 * @body {string} company_size - Size of the company (e.g., small, medium, large).
 * @returns {object} AI-generated proposal details.
 * @throws {ApiError} 400 if validation fails.
 */
const validateProposalRequest = (req, res, next) => {
  const { budget, event_type, company_size } = req.body || {};

  if (!budget || isNaN(budget)) {
    throw new ApiError(400, "Valid budget is required");
  }

  if (!event_type || event_type.trim() === "") {
    throw new ApiError(400, "event_type is required");
  }

  if (!company_size || isNaN(company_size)) {
    throw new ApiError(400, "Valid company_size is required");
  }

  next();
};

export { validateCategoryRequest, validateProposalRequest };
