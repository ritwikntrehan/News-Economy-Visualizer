import Link from "next/link";
import { db, indexById } from "@/lib/data";
import { ClusterCard } from "@/components/ClusterCard";

export default function Home() {
  const sectorMap = indexById(db.sectors);
  const regionMap = indexById(db.regions);
  const preview = db.clusters.slice(0, 3);

  return (
    <div className="space-y-8">
      <section className="panel p-6">
        <p className="text-xs uppercase tracking-wider text-slate-500">Signal monitor prototype</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight">Monitor economic and policy signals with clustered event context.</h1>
        <p className="mt-3 max-w-3xl text-slate-700">
          News Economy Visualizer helps teams interpret manufacturing, trade, labor, and federal funding signals through
          clustered events, sector exposure hints, region relevance, and thematic summaries.
        </p>
        <div className="mt-5 flex gap-3">
          <Link href="/monitor" className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">
            Open Monitor
          </Link>
          <Link href="/request-analysis" className="rounded-md border border-slate-300 px-4 py-2 text-sm font-medium">
            Request Analysis
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel p-5">
          <h2 className="text-xl font-semibold">Why this matters</h2>
          <p className="mt-2 text-sm text-slate-700">
            Economic and policy news is constant, but operators often lack a compact way to connect headlines to sectors,
            regions, labor signals, and federal funding exposure.
          </p>
        </div>
        <div className="panel p-5">
          <h2 className="text-xl font-semibold">Product value</h2>
          <p className="mt-2 text-sm text-slate-700">
            Clustered headlines, topic tagging, exposure mapping, narrative summaries, and signal tracking designed as a
            structured intelligence layer.
          </p>
        </div>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold">Workflow</h2>
        <div className="mt-3 grid gap-3 text-sm md:grid-cols-3">
          <div className="rounded-lg bg-slate-50 p-3">1. Detect signals from curated records.</div>
          <div className="rounded-lg bg-slate-50 p-3">2. Cluster events by topic, entities, and timing.</div>
          <div className="rounded-lg bg-slate-50 p-3">3. Interpret likely first-order sector and region exposure.</div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xl font-semibold">Monitor preview</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {preview.map((cluster) => (
            <ClusterCard
              key={cluster.id}
              cluster={cluster}
              sectors={cluster.sectorIds.map((id) => sectorMap[id])}
              regions={cluster.regionIds.map((id) => regionMap[id])}
            />
          ))}
        </div>
      </section>

      <p className="text-xs text-slate-500">
        Phase 1 is a curated prototype using local sample records inspired by public data sources. It is not a complete
        real-time news engine.
      </p>
    </div>
  );
}
