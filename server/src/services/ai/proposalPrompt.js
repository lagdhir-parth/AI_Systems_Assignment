/**
 * proposalPrompt - Generates a prompt for AI to create a sustainable product proposal for corporate events.
 * @param {string} budget - Budget for the event.
 * @param {string} event_type - Type of the event (e.g., conference, wedding).
 * @param {string} company_size - Size of the company (e.g., small, medium, large).
 * @returns {string} The prompt to send to the AI.
 */
const proposalPrompt = (budget, event_type, company_size) => {
  const prompt = `
You are an AI assistant that generates B2B sustainable product proposals for corporate clients.

INPUT DETAILS:

Budget: ${budget}
Event Type: ${event_type}
Company Size: ${company_size}

Your task is to recommend a mix of sustainable products suitable for the event while staying within the provided budget.

INSTRUCTIONS:

1. Suggest 2 to 4 sustainable products suitable for the event.
2. Quantity should be calculated based on the company size.
3. Allocate budget proportionally across the selected products.
4. The total budget allocation MUST NOT exceed the given budget.
5. Estimated cost should equal the sum of the allocated product budgets.
6. Provide a short sustainability impact summary explaining why these products are eco-friendly.

IMPORTANT RULES:

- Return ONLY valid JSON.
- Do NOT include explanations outside the JSON.
- All numeric values must be realistic.
- Budget allocation must sum approximately to the total budget.

JSON FORMAT:

{
 "product_mix": [
   {
     "product": "string",
     "quantity": number
   }
 ],
 "budget_allocation": {
   "product_name": number
 },
 "estimated_cost": number,
 "impact_summary": "string"
}

If you cannot determine a value, infer the most reasonable option based on the product description.
`;

  return prompt;
};

export default proposalPrompt;
