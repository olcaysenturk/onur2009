import type { InfoCard as InfoCardType } from "@/lib/pages";
import Image from "next/image";

type InfoCardProps = {
  card: InfoCardType;
  large?: boolean;
};

export function InfoCard({ card, large = false }: InfoCardProps) {
  const Icon = card.icon;

  return (
    <article
      className={`group relative overflow-hidden rounded-lg border border-outline/40 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
        card.inverted ? "bg-primary text-white" : "bg-surface text-ink"
      } ${large ? "md:col-span-2" : ""}`}
    >
      {card.image ? (
        <div className="-mx-7 -mt-7 mb-7 h-48 overflow-hidden">
          <Image
            src={card.image}
            alt={card.title}
            width={720}
            height={420}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ) : null}
      {card.inverted ? <div className="absolute inset-x-0 top-0 h-1.5 bg-accent" /> : null}
      <div
        className={`mb-7 flex h-14 w-14 items-center justify-center rounded-lg transition-colors ${
          card.inverted
            ? "bg-white/10 text-accent"
            : "bg-surface-muted text-primary group-hover:bg-accent group-hover:text-white"
        }`}
      >
        <Icon aria-hidden className="h-6 w-6" />
      </div>
      <h3 className={`mb-3 font-display text-2xl font-semibold ${card.inverted ? "text-white" : "text-primary"}`}>
        {card.title}
      </h3>
      <p className={`leading-7 ${card.inverted ? "text-white/78" : "text-muted"}`}>{card.description}</p>
    </article>
  );
}
