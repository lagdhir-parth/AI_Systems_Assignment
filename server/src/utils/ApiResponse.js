/**
 * ApiResponse - Standardized response format for API endpoints.
 * Includes status code, success flag, message, and data payload.
 * @param {number} statusCode - HTTP status code for the response.
 * @param {string} message - Message to be sent in the response.
 * @param {object} data - Data payload to be included in the response.
 */
class ApiResponse {
  constructor(statusCode, message = "Success", data) {
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.success = statusCode < 400;
  }
}

export default ApiResponse;
