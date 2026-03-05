import ApiError from "../utils/ApiError.js";

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
