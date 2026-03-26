import Link from "next/link";
import { notFound } from "next/navigation";
import { db, indexById } from "@/lib/data";

export function generateStaticParams() {
  return db.topics.map((topic) => ({ id: topic.id }));
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = db.topics.find((t) => t.id === id);
  if (!topic) notFound();

  const clusterMap = indexById(db.clusters);
  const sectorMap = indexById(db.sectors);
  const regionMap = indexById(db.regions);
  const entityMap = indexById(db.entities);
  const clusters = topic.clusterIds.map((cid) => clusterMap[cid]);
  const sectorIds = [...new Set(clusters.flatMap((c) => c.sectorIds))];
  const regionIds = [...new Set(clusters.flatMap((c) => c.regionIds))];
  const entityIds = [...new Set(clusters.flatMap((c) => c.entityIds))];

  return (
    <div className="space-y-5">
      <section className="panel p-5">
        <h1 className="text-3xl font-bold">{topic.name}</h1>
        <p className="mt-2 text-slate-700">{topic.description}</p>
        <p className="mt-2 text-sm text-slate-600">Trend direction: <span className="tag">{topic.trendLabel}</span></p>
        <p className="mt-2 text-sm text-slate-700">{topic.summary}</p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="panel p-4">
          <h2 className="font-semibold">Recent clusters</h2>
          <ul className="mt-2 space-y-2 text-sm">
            {clusters.map((cluster) => (
              <li key={cluster.id}><Link href={`/cluster/${cluster.id}`} className="hover:text-accent">{cluster.title}</Link></li>
            ))}
          </ul>
        </div>
        <div className="panel p-4">
          <h2 className="font-semibold">Emerging themes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
            <li>Policy implementation cadence and execution risk.</li>
            <li>Supply chain adaptation across regions.</li>
            <li>Labor availability relative to announced capacity.</li>
          </ul>
        </div>
      </section>

      <section className="panel p-4">
        <h2 className="font-semibold">Relevant sectors / regions / entities</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {sectorIds.map((sid) => <span key={sid} className="tag">{sectorMap[sid].name}</span>)}
          {regionIds.map((rid) => <span key={rid} className="tag">{regionMap[rid].name}</span>)}
          {entityIds.slice(0, 12).map((eid) => <span key={eid} className="tag">{entityMap[eid].name}</span>)}
        </div>
      </section>

      <section className="panel p-4 text-sm text-slate-700">
        <h2 className="font-semibold">Caveats / limitations</h2>
        <p className="mt-1">This topic page is based on a finite sample set and simplified clustering assumptions. It indicates relevance, not certainty.</p>
      </section>

      <Link href="/request-analysis" className="inline-block rounded-md bg-accent px-4 py-2 text-sm font-medium text-white">Request tailored analysis</Link>
    </div>
  );
}
