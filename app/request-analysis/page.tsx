export default function RequestAnalysisPage() {
  return (
    <div className="space-y-5">
      <section className="panel p-5">
        <h1 className="text-3xl font-bold">Request tailored monitoring</h1>
        <p className="mt-2 text-slate-700">
          Tailored monitoring and thematic analysis are available by pilot engagement. This form is a demo intake surface.
        </p>
      </section>

      <form action="mailto:analysis@example.com" method="post" encType="text/plain" className="panel grid gap-3 p-5 md:grid-cols-2">
        {[
          "Name",
          "Organization",
          "Role",
          "Topic of interest",
          "Sector",
          "Geography",
          "What they want monitored",
          "Website",
          "Notes",
        ].map((field) => (
          <label key={field} className={`text-sm ${field === "Notes" || field === "What they want monitored" ? "md:col-span-2" : ""}`}>
            <span className="mb-1 block text-slate-600">{field}</span>
            {field === "Notes" || field === "What they want monitored" ? (
              <textarea className="h-24 w-full rounded-md border border-slate-300 p-2" name={field} />
            ) : (
              <input className="w-full rounded-md border border-slate-300 p-2" name={field} />
            )}
          </label>
        ))}
        <div className="md:col-span-2">
          <button type="submit" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">Submit demo request</button>
          <p className="mt-2 text-xs text-slate-500">No backend is connected in phase 1. Configure mailto or replace with an external form endpoint.</p>
        </div>
      </form>
    </div>
  );
}
