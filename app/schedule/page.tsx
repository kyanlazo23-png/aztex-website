import SectionTitle from "@/components/SectionTitle";

const expectations = [
  "Choose an available date and time.",
  "Receive a confirmation and calendar invitation.",
  "Meet virtually for a focused financial-organization consultation.",
  "Receive a written summary and practical next steps after the meeting.",
];

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Schedule"
        title="Schedule your consultation."
        description="Select a time that works for you. Calendly checks your availability in real time and automatically sends the meeting invitation and confirmation details."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <aside className="rounded-[2rem] bg-[color:var(--color-navy)] p-8 text-white sm:p-10">
          <p className="text-sm uppercase tracking-[0.3em] text-[color:var(--color-gold)]">
            What to expect
          </p>
          <ol className="mt-8 space-y-7">
            {expectations.map((item, index) => (
              <li key={item} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/25 text-sm text-white">
                  {index + 1}
                </span>
                <p className="pt-1 text-sm leading-7 text-white/85">{item}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 border-t border-white/15 pt-8">
            <p className="text-sm leading-7 text-white/70">
              AZTEX currently provides budgeting assistance, cash-flow organization, goal planning, and financial education. Services do not include investment, tax, legal, or insurance advice.
            </p>
          </div>
        </aside>

        <div className="overflow-hidden rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white shadow-[0_30px_80px_-50px_rgba(34,34,34,0.2)]">
          <iframe
            title="Schedule an Initial Financial Consultation with AZTEX"
            src="https://calendly.com/kyan-lz/initial-financial-consultation?hide_gdpr_banner=1&background_color=ffffff&text_color=222222&primary_color=0b1f33"
            className="h-[780px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
