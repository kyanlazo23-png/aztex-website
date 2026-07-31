import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="About"
        title="A disciplined approach to financial organization."
        description="AZTEX Financial Services helps individuals and families strengthen financial organization, improve decision-making, and establish sustainable financial practices through education, structure, and accountability."
      />
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10 rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Mission</p>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              We help individuals and families establish the financial structure, knowledge, and accountability required to make informed and confident financial decisions.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Values</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              <li>
                <strong className="text-[color:var(--color-navy)]">Clarity.</strong> Financial concepts explained with precision, transparency, and practical application.
              </li>
              <li>
                <strong className="text-[color:var(--color-navy)]">Discipline.</strong> Consistent financial organization supported by measurable progress and accountable execution.
              </li>
              <li>
                <strong className="text-[color:var(--color-navy)]">Education.</strong> Building the knowledge required to make informed financial decisions independently.
              </li>
              <li>
                <strong className="text-[color:var(--color-navy)]">Integrity.</strong> Professional guidance grounded in honesty, transparency, and the client&apos;s stated objectives.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Vision</p>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              To become a trusted financial organization and education firm for individuals and families seeking long-term financial confidence.
            </p>
          </div>
        </div>

        <div className="rounded-[2rem] bg-[color:var(--color-navy)]/5 p-10">
          <div className="rounded-[2rem] bg-[color:var(--color-navy)] px-10 py-12 text-white shadow-[0_30px_80px_-50px_rgba(11,31,51,0.18)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
              Our approach
            </p>
            <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Financial organization designed for lasting confidence.
            </h2>
            <p className="mt-8 text-base leading-8 text-white/80">
              AZTEX combines structured financial organization, practical education, and consistent accountability to help clients make informed decisions with greater confidence and consistency.
            </p>
            <Link
              href="/schedule"
              className="mt-10 inline-flex min-h-12 items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold tracking-wide !text-[color:var(--color-navy)] transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[color:var(--color-gold)]"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
