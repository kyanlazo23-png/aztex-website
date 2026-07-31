type ServiceCardProps = {
  title: string;
  description: string;
};

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <article className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/90 p-8 shadow-[0_40px_80px_-40px_rgba(11,31,51,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_-40px_rgba(11,31,51,0.2)]">
      <div className="mb-6 h-12 w-12 rounded-3xl bg-[color:var(--color-navy)]/5 text-[color:var(--color-navy)] grid place-items-center text-xl font-semibold">
        {title.charAt(0)}
      </div>
      <h3 className="text-xl font-semibold leading-tight text-[color:var(--color-navy)]">
        {title}
      </h3>
      <p className="mt-4 text-base leading-7 text-[color:var(--color-charcoal)]">
        {description}
      </p>
    </article>
  );
}
