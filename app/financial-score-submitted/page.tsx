import Link from "next/link";

export default function FinancialScoreSubmittedPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10 lg:px-12 lg:py-32">
      <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
        Results submitted
      </p>
      <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.05em] text-[color:var(--color-navy)] sm:text-6xl">
        Thank you for completing the AZTEX Financial Score.
      </h1>
      <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[color:var(--color-charcoal)]/72">
        Your contact information and score summary have been submitted. AZTEX will review the results and may follow up regarding the areas identified in your assessment.
      </p>
      <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
        <Link href="/schedule" className="inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-navy)] px-7 py-3 text-sm font-semibold tracking-wide !text-white transition hover:bg-[#163552]">
          Schedule a Consultation
        </Link>
        <Link href="/" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[color:var(--color-navy)] px-7 py-3 text-sm font-semibold tracking-wide text-[color:var(--color-navy)] transition hover:bg-[color:var(--color-navy)] hover:!text-white">
          Return Home
        </Link>
      </div>
      <p className="mx-auto mt-12 max-w-2xl text-xs leading-6 text-[color:var(--color-charcoal)]/55">
        AZTEX provides financial organization, budgeting assistance, and financial education. It does not provide investment, tax, legal, or insurance advice.
      </p>
    </main>
  );
}
