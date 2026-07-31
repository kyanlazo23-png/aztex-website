export default function ClientAssessmentPage() {
  const inputClass =
    "mt-2 w-full rounded-xl border border-[color:var(--color-charcoal)]/15 bg-white px-4 py-3 text-[color:var(--color-charcoal)] outline-none transition focus:border-[color:var(--color-navy)] focus:ring-2 focus:ring-[color:var(--color-navy)]/10";
  const labelClass = "block text-sm font-semibold text-[color:var(--color-navy)]";

  return (
    <main className="mx-auto max-w-5xl px-6 py-20 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
          Client assessment
        </p>
        <h1 className="mt-5 text-4xl font-semibold text-[color:var(--color-navy)] sm:text-5xl">
          Help us prepare for your consultation.
        </h1>
        <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/80">
          This questionnaire gives AZTEX a clear picture of your goals, cash flow, and current financial organization. Most clients complete it in about 8–10 minutes.
        </p>
      </div>

      <form
        action="https://formsubmit.co/kyan.lz@outlook.com"
        method="POST"
        className="mt-12 space-y-10 rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-7 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.18)] sm:p-10"
      >
        <input type="hidden" name="_subject" value="New AZTEX Client Assessment" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://aztex-financial-services.vercel.app/assessment-complete" />
        <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Contact information</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className={labelClass}>
              Full name
              <input className={inputClass} name="Full name" required />
            </label>
            <label className={labelClass}>
              Email address
              <input className={inputClass} type="email" name="Email" required />
            </label>
            <label className={labelClass}>
              Phone number
              <input className={inputClass} type="tel" name="Phone" />
            </label>
            <label className={labelClass}>
              Occupation
              <input className={inputClass} name="Occupation" />
            </label>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Goals and priorities</h2>
          <div className="mt-6 space-y-6">
            <label className={labelClass}>
              What prompted you to schedule this consultation?
              <textarea className={`${inputClass} min-h-28`} name="Reason for consultation" required />
            </label>
            <label className={labelClass}>
              What would a successful financial outcome look like one year from now?
              <textarea className={`${inputClass} min-h-28`} name="One-year success goal" required />
            </label>
            <label className={labelClass}>
              Primary area of focus
              <select className={inputClass} name="Primary focus" required defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Build a budget</option>
                <option>Improve cash flow</option>
                <option>Organize spending</option>
                <option>Build an emergency fund</option>
                <option>Organize debt payoff</option>
                <option>Prepare for a major purchase</option>
                <option>Improve financial habits</option>
                <option>Other</option>
              </select>
            </label>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Financial snapshot</h2>
          <p className="mt-3 text-sm leading-6 text-[color:var(--color-charcoal)]/70">
            Estimates are acceptable. Do not enter account numbers, Social Security numbers, passwords, or login credentials.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className={labelClass}>
              Monthly take-home income ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Monthly take-home income" />
            </label>
            <label className={labelClass}>
              Approximate monthly expenses ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Monthly expenses" />
            </label>
            <label className={labelClass}>
              Checking balance ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Checking balance" />
            </label>
            <label className={labelClass}>
              Savings balance ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Savings balance" />
            </label>
            <label className={labelClass}>
              Emergency fund ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Emergency fund" />
            </label>
            <label className={labelClass}>
              Approximate total debt ($)
              <input className={inputClass} type="number" min="0" step="0.01" name="Total debt" />
            </label>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Current habits and challenges</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <label className={labelClass}>
              Do you currently use a budget?
              <select className={inputClass} name="Uses a budget" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Yes, consistently</option>
                <option>Sometimes</option>
                <option>No</option>
              </select>
            </label>
            <label className={labelClass}>
              How often do you review your finances?
              <select className={inputClass} name="Review frequency" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Daily</option>
                <option>Weekly</option>
                <option>Monthly</option>
                <option>Rarely</option>
              </select>
            </label>
          </div>
          <label className={`${labelClass} mt-6`}>
            What is your biggest financial challenge right now?
            <textarea className={`${inputClass} min-h-28`} name="Biggest challenge" required />
          </label>
          <label className={`${labelClass} mt-6`}>
            Anything else AZTEX should know before the meeting?
            <textarea className={`${inputClass} min-h-28`} name="Additional information" />
          </label>
        </section>

        <section className="rounded-2xl bg-[color:var(--color-navy)]/5 p-6">
          <label className="flex items-start gap-3 text-sm leading-6 text-[color:var(--color-charcoal)]/80">
            <input type="checkbox" name="Acknowledgment" value="Accepted" required className="mt-1 h-4 w-4" />
            <span>
              I understand that AZTEX currently provides budgeting assistance, financial organization, cash-flow planning, and financial education. These services do not include investment, tax, legal, or insurance advice.
            </span>
          </label>
        </section>

        <button
          type="submit"
          className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[color:var(--color-navy)] px-7 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-[#163552] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)] sm:w-auto"
        >
          Submit client assessment
        </button>
      </form>

      <p className="mt-6 text-sm leading-6 text-[color:var(--color-charcoal)]/65">
        Please do not submit Social Security numbers, full account numbers, passwords, tax identification numbers, or copies of identification through this form.
      </p>
    </main>
  );
}
