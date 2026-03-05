const CategoryResult = ({ data }) => {
  if (!data) return null;

  return (
    <div className="mt-6 p-4 border rounded">
      <h3 className="font-bold text-lg">AI Result</h3>

      <p>
        <b>Primary Category:</b> {data.primary_category}
      </p>
      <p>
        <b>Sub Category:</b> {data.sub_category}
      </p>

      <div className="mt-2">
        <b>SEO Tags:</b>
        <ul className="list-disc ml-6">
          {data.seo_tags.map((tag, i) => (
            <li key={i}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="mt-2">
        <b>Sustainability Filters:</b>
        <ul className="list-disc ml-6">
          {data.sustainability_filters.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryResult;
