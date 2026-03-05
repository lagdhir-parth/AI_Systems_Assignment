import { useState } from "react";
import { generateCategory } from "../services/api";
import CategoryResult from "../components/CategoryResult";

const CategoryGenerator = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!productName || !description) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await generateCategory({
        product_name: productName,
        product_description: description,
      });

      setResult(res.data.data);
    } catch (err) {
      setError("Failed to generate category");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen p-10 bg-(--background-color) text-(--text-color)">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">
          AI Product Category Generator
        </h2>

        <p className="mb-6 opacity-70">
          Generate product categories, SEO tags and sustainability filters using
          AI.
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            className="border p-3 w-full rounded"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <textarea
            className="border p-3 w-full rounded"
            rows="4"
            placeholder="Product Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Category"}
          </button>
        </div>

        {result && (
          <div className="mt-8">
            <CategoryResult data={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryGenerator;
