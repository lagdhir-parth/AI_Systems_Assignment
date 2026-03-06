/**
 * jsonParser - Utility function to parse AI responses that may contain markdown formatting.
 * AI responses may include markdown code blocks (```json ... ```) which need to be cleaned before parsing.
 * This function removes any markdown code block formatting and returns the cleaned JSON string.
 * @param {string} text - The raw AI response text that may contain markdown formatting.
 * @returns {string} The cleaned JSON string ready for parsing.
 * @throws {Error} If the input text cannot be cleaned or is not valid JSON.
 */
const parseAIJSON = (text) => {
  try {
    // Remove markdown code blocks if present
    const cleaned = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return cleaned;
  } catch (error) {
    throw new Error("Invalid JSON returned by AI");
  }
};

export default parseAIJSON;
