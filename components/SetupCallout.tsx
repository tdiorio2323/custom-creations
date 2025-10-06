export function SetupCallout({ text }: { text: string }) {
  return (
    <div className="card p-6 space-y-3">
      <h1 className="text-xl font-semibold text-white">Setup Required</h1>
      <p className="text-sm text-white/70">{text}</p>
    </div>
  );
}
