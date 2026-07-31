import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function SchedulePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Schedule"
        title="Book a consultation with AZTEX."
        description="This page is prepared for embedding scheduling tools such as Calendly, making it easy to reserve time for a conversation."
      />
      <div className="mt-16 rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
        <div className="space-y-6 text-[color:var(--color-charcoal)]">
          <p className="text-base leading-8">
            To schedule a consultation, select a time that works for you and begin a focused conversation about your financial goals.
          </p>
          <div className="h-[420px] rounded-[1.75rem] border border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-navy)]/5 p-6 text-[color:var(--color-charcoal)]">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">
                Calendly integration coming soon
              </p>
              <h2 className="mt-6 text-2xl font-semibold text-[color:var(--color-navy)]">
                Placeholder for embedded scheduling
              </h2>
              <p className="mt-4 max-w-md text-base leading-7 text-[color:var(--color-charcoal)]/75">
                This section will host the embedded scheduling component so clients can book appointments directly from the site.
              </p>
              <Button href="mailto:hello@aztexfinancial.com" className="mt-8">Contact via Email</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
