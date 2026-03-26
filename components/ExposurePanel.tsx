import { Exposure, Region, Sector } from "@/lib/types";

export function ExposurePanel({ exposures, sectors, regions }: { exposures: Exposure[]; sectors: Record<string, Sector>; regions: Record<string, Region> }) {
  return (
    <div className="panel p-4">
      <h3 className="font-semibold">Exposure panel</h3>
      <ul className="mt-2 space-y-2 text-sm text-slate-700">
        {exposures.slice(0, 6).map((exp) => (
          <li key={exp.id}>
            <strong>{sectors[exp.sectorId].name}</strong> · {regions[exp.regionId].name} · {exp.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
