export default function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-white-warm)] py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 text-sm text-[color:var(--color-charcoal)] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-12">
        <p className="max-w-xl leading-7">
          AZTEX Financial Services provides thoughtful planning and disciplined support for families pursuing long-term financial confidence.
        </p>
        <p className="uppercase tracking-[0.32em] text-[color:var(--color-charcoal)]/80">
          © {new Date().getFullYear()} AZTEX Financial Services
        </p>
      </div>
    </footer>
  );
}
