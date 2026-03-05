import axios from "axios";
import env from "../../config/env.js";

async function callAI(prompt) {
  let response;
  try {
    response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "deepseek/deepseek-chat",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "http://localhost:5000",
          "X-Title": "AI Commerce Assignment",
        },
      }
    );
  } catch (err) {
    console.error(
      "Error calling AI:",
      err.response ? err.response.data : err.message
    );
    throw new Error("Failed to get response from AI");
  }

  if (!response.data?.choices?.length) {
    throw new Error("Invalid AI response format");
  }

  return response.data.choices[0].message.content;
}

export { callAI };
