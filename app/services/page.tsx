import SectionTitle from "@/components/SectionTitle";

const services = [
  {
    title: "Financial Organization",
    description:
      "A structured review of income, expenses, savings, and financial obligations designed to create a clear and maintainable financial system.",
  },
  {
    title: "Cash Flow Planning",
    description:
      "A practical framework for allocating income, managing recurring obligations, and aligning monthly cash flow with clearly defined priorities.",
  },
  {
    title: "Budget Development",
    description:
      "A personalized budget designed to improve visibility, strengthen spending discipline, and support short- and long-term objectives.",
  },
  {
    title: "Goal Planning",
    description:
      "A structured process for defining financial priorities, establishing measurable milestones, and organizing the actions required to make progress.",
  },
  {
    title: "Financial Education",
    description:
      "Clear explanations and practical context that strengthen financial knowledge and support informed decision-making.",
  },
  {
    title: "Accountability Sessions",
    description:
      "Periodic reviews focused on implementation, measurable progress, and clearly defined next steps.",
  },
  {
    title: "Meeting Summaries",
    description:
      "A concise written record of key observations, agreed priorities, and action items following each consultation.",
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Services"
        title="Structured services for stronger financial organization."
        description="AZTEX provides financial organization, education, and accountability services designed to improve decision-making and support consistent implementation."
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
