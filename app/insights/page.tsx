import SectionTitle from "@/components/SectionTitle";

const posts = [
  {
    title: "A Structured Approach to Financial Organization",
    excerpt:
      "How consistent financial systems and periodic review can improve visibility, discipline, and decision-making.",
  },
  {
    title: "The Role of Accountability in Financial Progress",
    excerpt:
      "Why defined priorities, documented action items, and regular follow-up are essential to consistent implementation.",
  },
  {
    title: "Balancing Long-Term Objectives with Financial Stability",
    excerpt:
      "A practical framework for evaluating competing priorities while maintaining appropriate financial resilience.",
  },
];

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Insights"
        title="Financial education for informed decision-making."
        description="Explore educational perspectives on financial organization, budgeting, accountability, and long-term planning."
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(34,34,34,0.15)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">Insight</p>
            <h3 className="mt-5 text-2xl font-semibold text-[color:var(--color-navy)]">
              {post.title}
            </h3>
            <p className="mt-4 text-base leading-7 text-[color:var(--color-charcoal)]/90">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
