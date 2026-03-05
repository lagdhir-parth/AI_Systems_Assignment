import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-(--background-color) text-(--text-color) p-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          AI Sustainable Commerce Dashboard
        </h1>

        <p className="mt-3 text-lg opacity-80">
          AI-powered tools for sustainable ecommerce businesses to automate
          product categorization and generate eco-friendly B2B proposals.
        </p>
      </div>

      {/* Modules Section */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Category Generator Card */}
        <div className="p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">
            AI Product Category Generator
          </h2>

          <p className="opacity-80 mb-4">
            Automatically categorize products and generate SEO tags with
            sustainability filters using AI.
          </p>

          <ul className="list-disc ml-5 mb-6 text-sm opacity-80">
            <li>Generate primary & sub category</li>
            <li>AI powered SEO tag suggestions</li>
            <li>Sustainability filter detection</li>
          </ul>

          <Link
            to="/category"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open Module
          </Link>
        </div>

        {/* Proposal Generator Card */}
        <div className="p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition">
          <h2 className="text-2xl font-semibold mb-2">
            AI B2B Proposal Generator
          </h2>

          <p className="opacity-80 mb-4">
            Generate sustainable corporate gifting proposals based on event
            type, company size, and budget.
          </p>

          <ul className="list-disc ml-5 mb-6 text-sm opacity-80">
            <li>AI generated product mix</li>
            <li>Budget allocation strategy</li>
            <li>Sustainability impact summary</li>
          </ul>

          <Link
            to="/proposal"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Open Module
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 text-sm opacity-60">
        Built for AI Commerce Systems Assignment
      </div>
    </div>
  );
};

export default Home;
