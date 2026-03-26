export function FilterBar() {
  const selects = ["Topic", "Sector", "Region", "Signal Type", "Time Window"];
  return (
    <section className="panel mb-5 grid grid-cols-1 gap-3 p-4 md:grid-cols-5">
      {selects.map((name) => (
        <label key={name} className="text-xs font-medium text-slate-600">
          {name}
          <select className="mt-1 w-full rounded-md border border-slate-300 bg-slate-50 px-2 py-1.5 text-sm">
            <option>All</option>
          </select>
        </label>
      ))}
    </section>
  );
}
