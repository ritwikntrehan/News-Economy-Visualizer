export function ArchitectureDiagram() {
  const nodeCls = "rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm";
  return (
    <div className="panel p-4">
      <h3 className="mb-3 text-lg font-semibold">Phase 1 architecture diagram</h3>
      <div className="grid gap-2 text-center md:grid-cols-5">
        <div className={nodeCls}>Public-style sample records</div>
        <div className={nodeCls}>Tagging & topic classification</div>
        <div className={nodeCls}>Event clustering + entity extraction</div>
        <div className={nodeCls}>Sector + region exposure mapping</div>
        <div className={nodeCls}>Static monitor + narrative summaries</div>
      </div>
    </div>
  );
}
