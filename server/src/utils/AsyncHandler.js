/**
 * asyncHandler - Utility function to wrap asynchronous route handlers and catch errors.
 * This allows us to avoid using try-catch blocks in every controller and ensures that errors are passed to the Express error handling middleware.
 * @param {function} requestHandler - The asynchronous route handler function to wrap.
 * @returns {function} A new function that wraps the original handler and catches any errors.
 */
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch(next);
  };
};

export default asyncHandler;
