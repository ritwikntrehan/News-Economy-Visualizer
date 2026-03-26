import Link from "next/link";
import { ClusterCard } from "@/components/ClusterCard";
import { FilterBar } from "@/components/FilterBar";
import { TimelineStrip } from "@/components/TimelineStrip";
import { NarrativeSummaryCard } from "@/components/NarrativeSummaryCard";
import { ExposurePanel } from "@/components/ExposurePanel";
import { db, indexById } from "@/lib/data";

export default function MonitorPage() {
  const topicMap = indexById(db.topics);
  const sectorMap = indexById(db.sectors);
  const regionMap = indexById(db.regions);

  const topicCounts = db.topics.map((t) => ({ ...t, count: t.clusterIds.length }));

  return (
    <div className="space-y-5">
      <div className="panel p-4">
        <h1 className="text-2xl font-bold">Signal Monitor</h1>
        <p className="mt-1 text-sm text-slate-700">
          Compact dashboard for clustered events in manufacturing, trade, labor, and federal funding.
        </p>
        <p className="mt-2 text-xs text-slate-500">Prototype note: uses curated and simplified local sample data.</p>
      </div>

      <FilterBar />
      <TimelineStrip clusters={db.clusters.slice(0, 10)} />

      <section className="grid gap-5 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <h2 className="text-lg font-semibold">Top signal clusters</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {db.clusters.slice(0, 8).map((cluster) => (
              <ClusterCard
                key={cluster.id}
                cluster={cluster}
                sectors={cluster.sectorIds.map((id) => sectorMap[id])}
                regions={cluster.regionIds.map((id) => regionMap[id])}
              />
            ))}
          </div>
        </div>

        <aside className="space-y-4">
          <div className="panel p-4">
            <h3 className="font-semibold">Topic distribution</h3>
            <div className="mt-3 space-y-2 text-sm">
              {topicCounts.map((topic) => (
                <div key={topic.id}>
                  <div className="flex justify-between">
                    <Link href={`/topic/${topic.id}`} className="hover:text-accent">
                      {topic.name}
                    </Link>
                    <span>{topic.count}</span>
                  </div>
                  <div className="mt-1 h-1.5 rounded bg-slate-100">
                    <div className="h-1.5 rounded bg-accent" style={{ width: `${topic.count * 14}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="panel p-4">
            <h3 className="font-semibold">Affected sectors / regions</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {db.sectors.slice(0, 6).map((sector) => (
                <span key={sector.id} className="tag">{sector.name}</span>
              ))}
              {db.regions.slice(0, 7).map((region) => (
                <span key={region.id} className="tag">{region.name}</span>
              ))}
            </div>
          </div>

          <NarrativeSummaryCard title="Recent narrative summary" summary={db.clusters[0].summary} />

          <ExposurePanel exposures={db.exposures} sectors={sectorMap} regions={regionMap} />

          <div className="panel p-4">
            <h3 className="font-semibold">Cross-topic overlaps</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
              {db.articles.slice(0, 5).map((article) => (
                <li key={article.id}>{article.title} ({article.topicIds.map((id) => topicMap[id].name).join(" + ")})</li>
              ))}
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}
