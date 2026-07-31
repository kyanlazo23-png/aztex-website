import Button from "@/components/Button";

const pillars = [
  {
    number: "01",
    title: "Financial Organization",
    description:
      "Bring income, expenses, savings, and priorities into one practical system that is clear enough to use every month.",
  },
  {
    number: "02",
    title: "Financial Education",
    description:
      "Understand the concepts behind your financial decisions through straightforward, judgment-free education.",
  },
  {
    number: "03",
    title: "Accountability",
    description:
      "Turn intentions into consistent action through defined next steps, progress reviews, and ongoing structure.",
  },
];

const process = [
  {
    step: "01",
    title: "Schedule",
    description: "Choose a consultation time and complete the short intake questions during booking.",
  },
  {
    step: "02",
    title: "Assess",
    description: "We review your goals, current habits, cash flow, and the challenges creating the most stress.",
  },
  {
    step: "03",
    title: "Organize",
    description: "Together, we build a practical financial system centered on your priorities and circumstances.",
  },
  {
    step: "04",
    title: "Act",
    description: "You leave with clear next steps, useful resources, and a plan you can put into practice.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-[color:var(--color-charcoal)]/10">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-[color:var(--color-navy)] lg:block" />
        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-stretch lg:grid-cols-[1.18fr_0.82fr]">
          <div className="flex flex-col justify-center px-6 py-24 sm:px-10 lg:px-12 lg:py-28">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
              Financial organization · Education · Accountability
            </p>
            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-[color:var(--color-navy)] sm:text-6xl lg:text-[5.25rem]">
              Financial clarity starts with organization.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[color:var(--color-charcoal)]/78 sm:text-xl">
              AZTEX helps individuals and families build practical budgets, organize cash flow, and develop stronger financial habits through clear education and disciplined follow-through.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="/schedule">Schedule Consultation</Button>
              <Button href="/insights" variant="secondary">
                Explore Insights
              </Button>
            </div>
            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-[color:var(--color-charcoal)]/10 pt-7 text-sm text-[color:var(--color-charcoal)]/65">
              <span>Judgment-free guidance</span>
              <span>Practical financial systems</span>
              <span>Educational, not advisory</span>
            </div>
          </div>

          <aside className="relative flex items-center bg-[color:var(--color-navy)] px-6 py-16 text-white sm:px-10 lg:bg-transparent lg:px-14 lg:py-24">
            <div className="w-full">
              <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
                The AZTEX approach
              </p>
              <div className="mt-10 space-y-8">
                {pillars.map((pillar) => (
                  <div key={pillar.number} className="border-t border-white/16 pt-7">
                    <div className="flex items-start gap-5">
                      <span className="pt-1 text-xs tracking-[0.28em] text-[color:var(--color-gold)]">
                        {pillar.number}
                      </span>
                      <div>
                        <h2 className="text-2xl font-semibold tracking-[-0.025em] text-white">
                          {pillar.title}
                        </h2>
                        <p className="mt-3 text-sm leading-7 text-white/72">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
              What we do
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[color:var(--color-navy)] sm:text-5xl">
              A stronger financial foundation, built one decision at a time.
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-charcoal)]/10 md:grid-cols-3">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="bg-white p-8 sm:p-9">
                <p className="text-xs tracking-[0.32em] text-[color:var(--color-gold)]">{pillar.number}</p>
                <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-0.03em] text-[color:var(--color-navy)]">
                  {pillar.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[color:var(--color-charcoal)]/72">
                  {pillar.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0eee8] px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
              Our process
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[color:var(--color-navy)] sm:text-5xl">
              Clear steps. Practical outcomes.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[color:var(--color-charcoal)]/72">
              Every engagement follows a focused process designed to reduce uncertainty and turn financial goals into manageable action.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <article key={item.step} className="border-t border-[color:var(--color-navy)]/22 pt-6">
                <p className="text-xs tracking-[0.32em] text-[color:var(--color-gold)]">{item.step}</p>
                <h3 className="mt-6 text-2xl font-semibold text-[color:var(--color-navy)]">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-charcoal)]/72">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-10 lg:px-12 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
              About AZTEX
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-[color:var(--color-navy)] sm:text-5xl">
              Financial guidance should feel understandable, useful, and human.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-[color:var(--color-charcoal)]/78">
              AZTEX was created to help people build financial confidence through organization and education—not pressure, judgment, or unnecessary complexity. Our current services focus on budgeting, cash-flow organization, goal planning, and accountability.
            </p>
            <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/66">
              The aim is simple: give clients a clear view of where they stand, a practical system they can maintain, and the knowledge to make more confident decisions over time.
            </p>
            <div className="mt-8">
              <Button href="/about" variant="secondary">Learn About AZTEX</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-12 lg:pb-32">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[color:var(--color-navy)] px-8 py-14 text-white sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
              Begin with clarity
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-tight tracking-[-0.045em] text-white sm:text-5xl">
              Build a financial system that supports the life you are working toward.
            </h2>
          </div>
          <div className="mt-8 shrink-0 lg:mt-0 lg:pl-12">
            <Button href="/schedule" className="bg-white !text-[color:var(--color-navy)] hover:bg-white/90">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
