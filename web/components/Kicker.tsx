export default function Kicker({
  children,
  tone = "light",
  className = "",
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  const color = tone === "dark" ? "text-gold" : "text-clay";
  const line = tone === "dark" ? "bg-gold/50" : "bg-clay/40";

  return (
    <p
      className={`flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.22em] uppercase ${color} ${className}`}
    >
      <span aria-hidden className={`h-px w-7 ${line}`} />
      {children}
      <span aria-hidden className={`h-px w-7 ${line}`} />
    </p>
  );
}
