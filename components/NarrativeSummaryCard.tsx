export function NarrativeSummaryCard({ title, summary }: { title: string; summary: string }) {
  return (
    <div className="panel p-4">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-700">{summary}</p>
    </div>
  );
}
