import Link from "next/link";
import { Cluster, Sector, Region } from "@/lib/types";

export function ClusterCard({ cluster, sectors, regions }: { cluster: Cluster; sectors: Sector[]; regions: Region[] }) {
  return (
    <article className="panel p-4">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-xs uppercase tracking-wide text-slate-500">{cluster.dateRange}</p>
        <span className="tag">{cluster.directionLabel}</span>
      </div>
      <h3 className="text-base font-semibold">
        <Link href={`/cluster/${cluster.id}`} className="hover:text-accent">
          {cluster.title}
        </Link>
      </h3>
      <p className="mt-2 text-sm text-slate-700">{cluster.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {sectors.slice(0, 3).map((sector) => (
          <span key={sector.id} className="tag">
            {sector.name}
          </span>
        ))}
        {regions.slice(0, 2).map((region) => (
          <span key={region.id} className="tag">
            {region.name}
          </span>
        ))}
      </div>
    </article>
  );
}
