import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Contact"
        title="Contact AZTEX Financial Services."
        description="Contact AZTEX to learn more about our financial organization, education, and accountability services."
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Email</p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">kyan.lz@outlook.com</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">LinkedIn</p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
                <a href="#" className="underline decoration-[color:var(--color-gold)] decoration-2 underline-offset-4">
                  Connect on LinkedIn
                </a>
              </p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Response time</p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
                Inquiries are typically reviewed within one business day.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[color:var(--color-navy)]/5 p-10 text-[color:var(--color-charcoal)]">
          <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">Begin with a focused consultation.</h3>
          <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/90">
            Schedule an initial consultation to discuss your financial organization priorities, current challenges, and desired outcomes.
          </p>
          <Button href="/schedule" className="mt-10">
            Schedule Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
