import Button from "@/components/Button";
import Hero from "@/components/Hero";
import SectionTitle from "@/components/SectionTitle";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    title: "Financial Organization",
    description:
      "Structured planning that brings clarity to cash flow, savings, and long-term goals so clients can move forward with confidence.",
  },
  {
    title: "Financial Education",
    description:
      "Practical guidance for households and professionals seeking meaningful knowledge, better decisions, and a more resilient financial foundation.",
  },
  {
    title: "Accountability",
    description:
      "Regular review, progress tracking, and aligned priorities to ensure financial intentions are sustained over time.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        title="Helping individuals and families build financial confidence."
        description="AZTEX delivers modern planning, clear education, and disciplined accountability for every stage of your financial journey."
        ctaText="Schedule Consultation"
        ctaHref="/schedule"
      />

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <SectionTitle
          eyebrow="Our services"
          title="Focused support for practical financial clarity."
          description="We combine strategic oversight with everyday guidance so your plan is easy to understand and easier to follow."
        />
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="bg-[color:var(--color-navy)] px-6 py-20 text-[color:var(--color-white-warm)] sm:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">
                About AZTEX
              </p>
              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl">
                A thoughtful partner for families pursuing financial confidence.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[color:var(--color-white-warm)]/85">
              <p>
                We work with every client to establish the systems, knowledge, and accountability needed to keep plans on track — without unnecessary jargon.
              </p>
              <p>
                Our approach is grounded in measured discipline, tailored communication, and a long-term view that honors your priorities.
              </p>
              <Button href="/about" variant="secondary" className="text-[color:var(--color-white-warm)] border-white/30 hover:border-white/50">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">
              Insights & planning
            </p>
            <h2 className="text-3xl font-semibold leading-tight text-[color:var(--color-navy)] sm:text-4xl">
              Prepared for the next step in your financial story.
            </h2>
          </div>
          <Button href="/insights" variant="secondary" className="hidden md:inline-flex">
            View Insights
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(34,34,34,0.15)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">Perspective</p>
            <h3 className="mt-5 text-2xl font-semibold text-[color:var(--color-navy)]">
              Building the financial confidence to make stronger decisions.
            </h3>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-charcoal)]/90">
              Small practices and regular check-ins matter more than quick fixes. AZTEX helps families stay aligned to what matters most.
            </p>
          </article>
          <article className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(34,34,34,0.15)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">Focus</p>
            <h3 className="mt-5 text-2xl font-semibold text-[color:var(--color-navy)]">
              Planning that adapts to your needs instead of demanding them.
            </h3>
            <p className="mt-5 text-base leading-7 text-[color:var(--color-charcoal)]/90">
              From budgeting to meeting summaries, every recommendation is designed to feel manageable and meaningful.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
