type SectionLabelProps = {
  children: React.ReactNode;
  light?: boolean;
};

export function SectionLabel({ children, light = false }: SectionLabelProps) {
  return (
    <div className="inline-flex items-center gap-3">
      <span
        className={`h-1 w-12 ${light ? "bg-accent" : "bg-accent"}`}
        aria-hidden
      />
      <span
        className={`font-display text-sm font-semibold uppercase tracking-[0.12em] ${
          light ? "text-white/75" : "text-muted"
        }`}
      >
        {children}
      </span>
    </div>
  );
}
