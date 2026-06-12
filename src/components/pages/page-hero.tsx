import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  align?: "left" | "center";
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  align = "center",
}: PageHeroProps) {
  const isCenter = align === "center";

  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-primary px-4 py-24 text-white md:min-h-[720px] md:px-10">
      <Image src={image} alt={title} fill priority quality={100} className="object-cover opacity-45 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary/20" />
      <div
        className={`relative z-10 mx-auto w-full max-w-[1440px] ${
          isCenter ? "text-center" : "text-left"
        }`}
      >
        <div className={isCenter ? "mx-auto max-w-4xl" : "max-w-4xl"}>
          <p className="mb-5 font-display text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-5xl font-bold leading-[1.08] tracking-normal md:text-7xl">
            {title}
          </h1>
          <p className={`mt-7 text-lg leading-8 text-white/85 md:text-xl ${isCenter ? "mx-auto" : ""} max-w-3xl`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
