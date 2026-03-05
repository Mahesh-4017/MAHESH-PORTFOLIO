export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q ?? "").trim();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-3xl font-semibold">Search</h1>
      <p className="mt-2 text-gray-600">
        Query: <span className="font-medium text-black">{q || "empty"}</span>
      </p>

      <div className="mt-8 rounded-2xl border p-6 text-gray-600">
        Next: filter your projects and blog posts by this query.
      </div>
    </div>
  );
}
