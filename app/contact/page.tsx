import Button from "@/components/Button";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Contact"
        title="Reach out to AZTEX Financial Services."
        description="Whether you want to ask a question, schedule a consultation, or discuss long-term planning, we’re here to help."
      />
      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-10 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.16)]">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Email</p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">hello@aztexfinancial.com</p>
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
              <p className="text-sm uppercase tracking-[0.36em] text-[color:var(--color-gold)]">Contact form</p>
              <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
                A professional contact form will be added here soon to collect inquiries, meeting requests, and financial planning questions.
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] bg-[color:var(--color-navy)]/5 p-10 text-[color:var(--color-charcoal)]">
          <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">Ready to start the next chapter?</h3>
          <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/90">
            AZTEX is here to help you align your finances with your family’s long-term plans. Reach out and request a consultation today.
          </p>
          <Button href="mailto:hello@aztexfinancial.com" className="mt-10">
            Email Us
          </Button>
        </div>
      </div>
    </section>
  );
}
