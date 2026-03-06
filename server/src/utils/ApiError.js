/**
 * ApiError - Custom error class for API errors.
 * Extends the built-in Error class and includes additional properties for status code, success flag, and error details.
 * @param {number} statusCode - HTTP status code for the error.
 * @param {string} message - Error message to be sent in the response.
 * @param {array} errors - Optional array of specific error details (e.g., validation errors).
 */
class ApiError extends Error {
  constructor(statusCode, message = "Something went wrong", errors = []) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;
    this.name = "ApiError";
  }
}

export default ApiError;
