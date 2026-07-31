import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function RetirementCalculatorPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Retirement Calculator"
        title="A dedicated space for future retirement planning tools."
        description="This page is prepared for an interactive calculator that helps clients model long-term savings and retirement readiness."
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">
            Retirement calculator coming soon.
          </h2>
          <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/90">
            This page is ready to host a responsive planning tool that helps you estimate retirement savings, timelines, and financial goals.
          </p>
          <div className="mt-10 space-y-4 rounded-[1.5rem] border border-[color:var(--color-navy)]/10 bg-[color:var(--color-navy)]/5 p-6">
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Placeholder</p>
            <p className="text-base leading-7 text-[color:var(--color-charcoal)]/85">
              In the future, this section will include inputs for current savings, target retirement age, expected returns, and personalized projections.
            </p>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[color:var(--color-navy)]/5 p-10 text-[color:var(--color-charcoal)]">
          <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">What this tool will provide</h3>
          <ul className="mt-7 space-y-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
            <li>Clear retirement projections and savings targets</li>
            <li>Responsive layout for desktop and mobile</li>
            <li>Guidance for aligning retirement goals with current cash flow</li>
          </ul>
          <Button href="/contact" className="mt-10">Discuss Retirement Planning</Button>
        </div>
      </div>
    </section>
  );
}
