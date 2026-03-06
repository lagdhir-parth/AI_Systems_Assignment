/**
 * categoryPrompt - Generates a prompt for AI to categorize a product and suggest SEO tags.
 * @param {string} product_name - Name of the product.
 * @param {string} product_description - Description of the product.
 * @returns {string} The prompt to send to the AI.
 */
const categoryPrompt = (product_name, product_description) => {
  const prompt = `
You are an AI assistant for a sustainable ecommerce platform.

Your task is to analyze a product and generate structured catalog metadata.

Product Name: ${product_name}
Product Description: ${product_description}

INSTRUCTIONS:

1. Select ONE primary category from the following list:

Home & Living
Kitchen
Personal Care
Office Supplies
Clothing & Accessories
Food & Beverage
Eco Lifestyle
Packaging
Cleaning Products

2. Suggest an appropriate sub_category.

3. Generate 5 to 10 SEO tags relevant to the product.

4. Identify sustainability filters ONLY from the allowed list below.

Allowed sustainability filters:
- plastic-free
- compostable
- vegan
- recycled
- biodegradable

IMPORTANT RULES:

- Return ONLY valid JSON.
- Do NOT include explanations or text outside JSON.
- Ensure SEO tags are short and search-friendly.
- Only include sustainability filters that logically apply.

JSON FORMAT:

{
 "primary_category": "string",
 "sub_category": "string",
 "seo_tags": ["tag1","tag2","tag3","tag4","tag5"],
 "sustainability_filters": ["filter1","filter2"]
}

If you cannot determine a value, infer the most reasonable option based on the product description.
`;

  return prompt;
};

export default categoryPrompt;
