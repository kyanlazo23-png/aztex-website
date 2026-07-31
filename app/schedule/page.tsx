import Link from "next/link";
import SectionTitle from "@/components/SectionTitle";

const expectations = [
  "Choose an available date and time.",
  "Receive a confirmation and calendar invitation.",
  "Complete the AZTEX Client Assessment before the meeting.",
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

          <div className="mt-9 rounded-2xl border border-white/15 bg-white/5 p-5">
            <p className="text-sm font-semibold text-white">Already booked?</p>
            <p className="mt-2 text-sm leading-6 text-white/75">
              Complete the Client Assessment before your consultation so AZTEX can prepare for the conversation.
            </p>
            <Link
              href="/client-assessment"
              className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[color:var(--color-navy)] transition hover:bg-white/90"
            >
              Complete client assessment
            </Link>
          </div>

          <div className="mt-8 border-t border-white/15 pt-8">
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

      <div className="mt-10 rounded-2xl border border-[color:var(--color-charcoal)]/10 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-8">
        <div>
          <h2 className="text-xl font-semibold text-[color:var(--color-navy)]">Need to cancel or reschedule?</h2>
          <p className="mt-2 text-sm leading-6 text-[color:var(--color-charcoal)]/70">
            Use the unique cancellation or rescheduling link included in your Calendly confirmation email.
          </p>
        </div>
        <Link
          href="/client-assessment"
          className="mt-5 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-navy)] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#163552] sm:mt-0"
        >
          Open client assessment
        </Link>
      </div>
    </section>
  );
}
