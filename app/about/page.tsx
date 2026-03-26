export default function AboutPage() {
  const capabilities = [
    "Public data ingestion",
    "Event clustering",
    "Sector and region mapping",
    "Economic-news interpretation",
    "Product architecture",
  ];

  return (
    <div className="space-y-5">
      <section className="panel p-5">
        <h1 className="text-3xl font-bold">About this prototype</h1>
        <p className="mt-2 text-slate-700">
          News Economy Visualizer exists as a public demonstration of economic-signal product design. The aim is to show
          a credible method for structuring economic and policy-relevant news into decision-support views.
        </p>
      </section>

      <section className="panel p-5">
        <h2 className="text-xl font-semibold">Capability areas demonstrated</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
          {capabilities.map((capability) => (
            <li key={capability}>{capability}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
