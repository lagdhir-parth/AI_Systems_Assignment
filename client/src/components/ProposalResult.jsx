const ProposalResult = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mt-6 p-4 border rounded">
      <h3 className="text-lg font-bold">Proposal Result</h3>

      <h4 className="mt-2 font-semibold">Product Mix</h4>
      <ul className="list-disc ml-6">
        {data.product_mix.map((p, i) => (
          <li key={i}>
            {p.product} — {p.quantity} units
          </li>
        ))}
      </ul>

      <h4 className="mt-2 font-semibold">Budget Allocation</h4>
      <ul className="list-disc ml-6">
        {Object.entries(data.budget_allocation).map(([k, v]) => (
          <li key={k}>
            {k}: {v}
          </li>
        ))}
      </ul>

      <p className="mt-2">
        <b>Estimated Cost:</b> {data.estimated_cost}
      </p>

      <p className="mt-2">
        <b>Impact Summary:</b> {data.impact_summary}
      </p>
    </div>
  );
};

export default ProposalResult;
