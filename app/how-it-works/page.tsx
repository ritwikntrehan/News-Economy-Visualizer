import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";

const sections = [
  ["Source data", "Phase 1 uses local sample records inspired by public news/event and economic datasets."],
  ["Article / event tagging", "Each record is tagged for topic, sector, region, and notable entities with simplified assumptions."],
  ["Topic clustering", "Records are grouped into event clusters by topical similarity, entities, and timing."],
  ["Entity extraction", "Recurring companies, agencies, and organizations are surfaced as key entities."],
  ["Sector mapping", "Clusters are linked to likely exposed sectors such as automotive, logistics, and semiconductors."],
  ["Region mapping", "Clusters include region relevance hints for areas such as the Midwest, Texas, and Pennsylvania."],
  ["Narrative generation", "Short thematic summaries are generated as concise interpretations for decision support."],
  ["Limitations", "This prototype does not claim complete coverage, real-time ingestion, or causal certainty."],
];

export default function HowItWorksPage() {
  return (
    <div className="space-y-5">
      <section className="panel p-5">
        <h1 className="text-3xl font-bold">How it works</h1>
        <p className="mt-2 text-slate-700">
          This site demonstrates the structure of an economic-news intelligence layer over public-style datasets.
          Phase 1 intentionally uses simplified assumptions and local sample data.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        {sections.map(([title, copy]) => (
          <section key={title} className="panel p-4">
            <h2 className="font-semibold">{title}</h2>
            <p className="mt-1 text-sm text-slate-700">{copy}</p>
          </section>
        ))}
      </div>

      <ArchitectureDiagram />
    </div>
  );
}
