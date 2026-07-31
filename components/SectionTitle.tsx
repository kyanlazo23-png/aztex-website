type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[color:var(--color-charcoal)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold leading-[1.05] tracking-[-0.025em] text-[color:var(--color-navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-8 text-[color:var(--color-charcoal)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
