import Button from "@/components/Button";

type HeroProps = {
  title: string;
  description: string;
  ctaText: string;
  ctaHref: string;
};

export default function Hero({ title, description, ctaText, ctaHref }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-[3rem] bg-[color:var(--color-navy)] px-6 py-16 text-[color:var(--color-white-warm)] sm:px-10 md:px-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_40%)]" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10">
        <div className="max-w-4xl">
          <p className="mb-6 text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">
            AZTEX Financial Services
          </p>
          <h1 className="text-5xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-[color:var(--color-white-warm)]/90 sm:text-xl">
            {description}
          </p>
        </div>
        <div>
          <Button href={ctaHref} className="shadow-[0_24px_60px_-30px_rgba(0,0,0,0.45)]">
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
}
