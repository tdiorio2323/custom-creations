const BADGES = [
  "Insurance-Friendly",
  "OEM Paint Match",
  "Warranty Included",
];

export default function TrustBadges() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
      {BADGES.map((label) => (
        <div key={label} className="badge justify-center text-sm font-medium">
          {label}
        </div>
      ))}
    </div>
  );
}
