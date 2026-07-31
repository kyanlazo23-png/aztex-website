import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    title: "Budgeting",
    description:
      "A clear, personalized budget that helps you understand where money goes and how to redirect it toward what matters most.",
  },
  {
    title: "Cash-flow planning",
    description:
      "A practical plan for income, savings, and spending so each month feels more intentional and under control.",
  },
  {
    title: "Financial education",
    description:
      "Simple explanations, meaningful context, and thoughtful guidance that build confidence in financial decisions.",
  },
  {
    title: "Accountability",
    description:
      "Regular check-ins, timely progress reviews, and aligned next steps to keep goals moving forward.",
  },
  {
    title: "Meeting summaries",
    description:
      "Clear recaps after every conversation so your priorities remain visible and the next action is always well-defined.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Services"
        title="Comprehensive planning designed for daily financial clarity."
        description="AZTEX supports every stage of your financial life with a service suite that blends structure, education, and consistent follow through."
      />
      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(34,34,34,0.15)]">
            <h3 className="text-2xl font-semibold text-[color:var(--color-navy)]">
              {service.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[color:var(--color-charcoal)]/90">
              {service.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
