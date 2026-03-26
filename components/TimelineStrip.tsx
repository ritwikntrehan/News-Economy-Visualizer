import { Cluster } from "@/lib/types";

export function TimelineStrip({ clusters }: { clusters: Cluster[] }) {
  return (
    <div className="panel p-4">
      <h3 className="font-semibold">Timeline strip</h3>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {clusters.map((cluster) => (
          <div key={cluster.id} className="min-w-48 rounded-lg border border-slate-200 bg-slate-50 p-2 text-xs">
            <p className="font-medium">{cluster.dateRange}</p>
            <p className="mt-1 text-slate-700">{cluster.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
