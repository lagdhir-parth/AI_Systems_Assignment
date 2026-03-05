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
