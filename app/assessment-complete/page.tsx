import Link from "next/link";

export default function AssessmentCompletePage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-4xl items-center px-6 py-20 sm:px-10 lg:px-12">
      <section className="w-full rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-8 text-center shadow-[0_30px_80px_-50px_rgba(34,34,34,0.18)] sm:p-12">
        <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
          Assessment received
        </p>
        <h1 className="mt-5 text-4xl font-semibold text-[color:var(--color-navy)] sm:text-5xl">
          Thank you for completing your assessment.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[color:var(--color-charcoal)]/80">
          Your responses have been sent to AZTEX and will be reviewed before your consultation. Please keep your Calendly confirmation email for the meeting link and any cancellation or rescheduling options.
        </p>
        <Link
          href="/"
          className="mt-9 inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-navy)] px-7 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#163552]"
        >
          Return to homepage
        </Link>
      </section>
    </main>
  );
}
