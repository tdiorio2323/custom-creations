interface AlertBannerProps {
  kind?: "success" | "error" | "info";
  children: React.ReactNode;
}

export default function AlertBanner({ kind = "info", children }: AlertBannerProps) {
  const base = "rounded-lg border px-3 py-2 text-sm";
  const tone =
    kind === "success"
      ? "bg-green-50 border-green-300 text-green-800"
      : kind === "error"
        ? "bg-red-50 border-red-300 text-red-800"
        : "bg-black/5 border-black/20 text-black/80";
  return <div className={`${base} ${tone}`}>{children}</div>;
}
