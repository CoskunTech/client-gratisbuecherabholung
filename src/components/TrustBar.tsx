const regions = ["Basel & Baselland", "Zürich", "Aargau", "Solothurn"];

export default function TrustBar() {
  return (
    <div className="border-y border-neutral-200">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-4 px-6 py-5">
        {regions.map((r) => (
          <span
            key={r}
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-200 px-4 py-1.5 text-sm font-medium text-neutral-700"
          >
            📍 {r}
          </span>
        ))}
      </div>
    </div>
  );
}
