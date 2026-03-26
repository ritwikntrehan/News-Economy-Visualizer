import Link from "next/link";
import { notFound } from "next/navigation";
import { db, indexById } from "@/lib/data";

export function generateStaticParams() {
  return db.clusters.map((cluster) => ({ id: cluster.id }));
}

export default async function ClusterDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cluster = db.clusters.find((c) => c.id === id);
  if (!cluster) notFound();

  const articleMap = indexById(db.articles);
  const entityMap = indexById(db.entities);
  const sectorMap = indexById(db.sectors);
  const regionMap = indexById(db.regions);
  const exposures = db.exposures.filter((exposure) => exposure.clusterId === cluster.id);

  return (
    <div className="space-y-5">
      <section className="panel p-5">
        <p className="text-xs uppercase tracking-wider text-slate-500">Cluster detail · {cluster.dateRange}</p>
        <h1 className="mt-1 text-3xl font-bold">{cluster.title}</h1>
        <p className="mt-2 text-slate-700">{cluster.summary}</p>
        <span className="tag mt-3">Signal direction: {cluster.directionLabel}</span>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel p-4">
          <h2 className="font-semibold">Grouped sample headlines</h2>
          <ul className="mt-2 space-y-2 text-sm text-slate-700">
            {cluster.articleIds.map((aid) => (
              <li key={aid}>• {articleMap[aid].title}</li>
            ))}
          </ul>
        </div>
        <div className="panel p-4">
          <h2 className="font-semibold">Key entities</h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {cluster.entityIds.map((eid) => (
              <span key={eid} className="tag">{entityMap[eid].name}</span>
            ))}
          </div>
          <h3 className="mt-4 font-semibold">Related sectors</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {cluster.sectorIds.map((sid) => (
              <span key={sid} className="tag">{sectorMap[sid].name}</span>
            ))}
          </div>
          <h3 className="mt-4 font-semibold">Related regions</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {cluster.regionIds.map((rid) => (
              <span key={rid} className="tag">{regionMap[rid].name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="panel p-4">
        <h2 className="font-semibold">Likely first-order exposure</h2>
        <ul className="mt-2 space-y-2 text-sm text-slate-700">
          {exposures.map((exp) => (
            <li key={exp.id}>
              <strong>{exp.label}:</strong> {exp.rationale}
            </li>
          ))}
        </ul>
      </section>

      <section className="panel p-4 text-sm text-slate-700">
        <h2 className="font-semibold">Related labor / federal funding links</h2>
        <p className="mt-1">Where applicable, this cluster includes labor dynamics and federal program relevance in the grouped records.</p>
        <h3 className="mt-4 font-semibold">Limitations / caveats</h3>
        <ul className="mt-1 list-disc space-y-1 pl-5">
          {cluster.caveats.map((caveat) => (
            <li key={caveat}>{caveat}</li>
          ))}
        </ul>
      </section>

      <Link href="/request-analysis" className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">
        Request tailored analysis
      </Link>
    </div>
  );
}
