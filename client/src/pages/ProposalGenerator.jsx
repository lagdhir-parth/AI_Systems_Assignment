import { useState } from "react";
import { generateProposal } from "../services/api";
import ProposalResult from "../components/ProposalResult";

const ProposalGenerator = () => {
  const [budget, setBudget] = useState("");
  const [eventType, setEventType] = useState("");
  const [companySize, setCompanySize] = useState("");

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!budget || !eventType || !companySize) {
      setError("Please fill all fields");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await generateProposal({
        budget,
        event_type: eventType,
        company_size: companySize,
      });

      setResult(res.data.data);
    } catch (err) {
      setError("Failed to generate proposal");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen p-10 bg-(--background-color) text-(--text-color)">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-2">AI B2B Proposal Generator</h2>

        <p className="mb-6 opacity-70">
          Generate sustainable corporate product proposals using AI.
        </p>

        {error && (
          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">
            {error}
          </div>
        )}

        <div className="space-y-4">
          <input
            type="number"
            className="border p-3 w-full rounded"
            placeholder="Budget (₹)"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="Event Type (Conference, Corporate Gift, Workshop)"
            value={eventType}
            onChange={(e) => setEventType(e.target.value)}
          />

          <input
            className="border p-3 w-full rounded"
            placeholder="Company Size"
            value={companySize}
            onChange={(e) => setCompanySize(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Proposal"}
          </button>
        </div>

        {result && (
          <div className="mt-8">
            <ProposalResult data={result} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProposalGenerator;
