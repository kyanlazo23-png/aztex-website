import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="About"
        title="A thoughtful partner for financial confidence."
        description="AZTEX Financial Services helps families and individuals build clarity, discipline, and long-term stability through planning, education, and consistent review."
      />
      <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <div className="space-y-10 rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Mission</p>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              We empower clients with the structure, knowledge, and accountability needed to make distinctly better financial choices on behalf of their families.
            </p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Values</p>
            <ul className="mt-5 space-y-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              <li>
                <strong className="text-[color:var(--color-navy)]">Clarity.</strong> Clear guidance without jargon, presented in a way every family can follow.
              </li>
              <li>
                <strong className="text-[color:var(--color-navy)]">Consistency.</strong> Regular check-ins and practical follow through to keep progress aligned with goals.
              </li>
              <li>
                <strong className="text-[color:var(--color-navy)]">Confidence.</strong> Financial knowledge and systems that allow clients to act with calm conviction.
              </li>
            </ul>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Vision</p>
            <p className="mt-5 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              To be a trusted advisor for clients who want their financial lives to feel more organized, more resilient, and better prepared for whatever comes next.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[color:var(--color-navy)]/5 p-10">
          <div className="rounded-[2rem] bg-[color:var(--color-navy)] px-10 py-12 text-[color:var(--color-navy)] shadow-[0_30px_80px_-50px_rgba(11,31,51,0.18)]">
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
              AZTEX is built for families who want premium financial support without the complexity.
            </h2>
            <p className="mt-8 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              We use a system-first approach that keeps planning straightforward, progress visible, and decisions grounded in what matters most.
            </p>
            <div className="mt-10">
              <Button href="/schedule">Schedule Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
