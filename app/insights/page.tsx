import SectionTitle from "@/components/SectionTitle";

const posts = [
  {
    title: "A practical approach to financial planning",
    excerpt:
      "How simple systems and regular reviews can help families make decisions with greater confidence.",
  },
  {
    title: "Why accountability matters",
    excerpt:
      "Thoughtful follow-up and meaningful summaries can keep progress moving even when priorities shift.",
  },
  {
    title: "Balancing ambition with stability",
    excerpt:
      "The value of measured planning when your goals and circumstances evolve over time.",
  },
];

export default function InsightsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Insights"
        title="Professional perspectives on financial confidence."
        description="Explore thoughtful notes on planning, budgeting, accountability, and the mindset needed to navigate life’s financial moments."
      />
      <div className="mt-16 grid gap-8 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white/95 p-8 shadow-[0_24px_60px_-40px_rgba(34,34,34,0.15)]">
            <p className="text-sm uppercase tracking-[0.32em] text-[color:var(--color-gold)]">Article</p>
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
