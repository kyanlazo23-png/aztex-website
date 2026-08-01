"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Option = {
  label: string;
  score: number;
};

type Question = {
  id: string;
  category: "Organization" | "Cash Flow" | "Savings" | "Debt" | "Goals";
  prompt: string;
  options: Option[];
};

const questions: Question[] = [
  {
    id: "budget",
    category: "Organization",
    prompt: "How consistently do you follow a monthly budget or spending plan?",
    options: [
      { label: "I do not currently use one", score: 0 },
      { label: "I use one occasionally", score: 1 },
      { label: "I use one most months", score: 3 },
      { label: "I review and follow one every month", score: 4 },
    ],
  },
  {
    id: "accounts",
    category: "Organization",
    prompt: "How organized are your financial accounts, statements, and recurring obligations?",
    options: [
      { label: "They are difficult to track", score: 0 },
      { label: "Some information is organized", score: 1 },
      { label: "Most information is easy to locate", score: 3 },
      { label: "Everything is organized and reviewed regularly", score: 4 },
    ],
  },
  {
    id: "cashflow",
    category: "Cash Flow",
    prompt: "How clearly do you understand where your monthly income is going?",
    options: [
      { label: "I am usually unsure", score: 0 },
      { label: "I understand the major expenses", score: 2 },
      { label: "I track most income and spending", score: 3 },
      { label: "I track and review all major cash-flow activity", score: 4 },
    ],
  },
  {
    id: "surplus",
    category: "Cash Flow",
    prompt: "After regular expenses, how often do you have money available for savings or goals?",
    options: [
      { label: "Rarely or never", score: 0 },
      { label: "Some months", score: 1 },
      { label: "Most months", score: 3 },
      { label: "Every month through an established system", score: 4 },
    ],
  },
  {
    id: "emergency",
    category: "Savings",
    prompt: "How many months of essential expenses could your current emergency savings cover?",
    options: [
      { label: "Less than one month", score: 0 },
      { label: "One to two months", score: 2 },
      { label: "Three to five months", score: 3 },
      { label: "Six months or more", score: 4 },
    ],
  },
  {
    id: "saving",
    category: "Savings",
    prompt: "How consistently do you contribute toward savings or long-term goals?",
    options: [
      { label: "I am not currently contributing", score: 0 },
      { label: "I contribute when possible", score: 1 },
      { label: "I contribute most months", score: 3 },
      { label: "Contributions are automatic and consistent", score: 4 },
    ],
  },
  {
    id: "creditcard",
    category: "Debt",
    prompt: "Which statement best describes your credit-card balances?",
    options: [
      { label: "Balances are growing or difficult to manage", score: 0 },
      { label: "I carry balances and make gradual progress", score: 1 },
      { label: "Balances are limited and being paid down", score: 3 },
      { label: "I generally pay balances in full", score: 4 },
    ],
  },
  {
    id: "debtplan",
    category: "Debt",
    prompt: "Do you have a defined strategy for managing and reducing debt?",
    options: [
      { label: "No defined strategy", score: 0 },
      { label: "I know what I owe but do not have a formal plan", score: 1 },
      { label: "I have a plan and follow it most months", score: 3 },
      { label: "I follow a structured plan and track progress", score: 4 },
    ],
  },
  {
    id: "goals",
    category: "Goals",
    prompt: "How clearly defined are your short- and long-term financial goals?",
    options: [
      { label: "They are not currently defined", score: 0 },
      { label: "I have general goals", score: 1 },
      { label: "I have specific goals and approximate timelines", score: 3 },
      { label: "My goals, timelines, and required actions are documented", score: 4 },
    ],
  },
  {
    id: "review",
    category: "Goals",
    prompt: "How often do you review your financial progress?",
    options: [
      { label: "Rarely or never", score: 0 },
      { label: "Once or twice a year", score: 1 },
      { label: "Every few months", score: 3 },
      { label: "Monthly or through a consistent review process", score: 4 },
    ],
  },
];

const categories = ["Organization", "Cash Flow", "Savings", "Debt", "Goals"] as const;

function resultFor(score: number) {
  if (score >= 90) {
    return {
      label: "Strong Foundation",
      heading: "Your financial foundation appears well established.",
      message:
        "Your responses indicate consistent financial organization and disciplined habits. An AZTEX consultation can help you review priorities, strengthen your existing systems, and identify areas for continued improvement.",
      cta: "Schedule a Financial Review",
    };
  }

  if (score >= 70) {
    return {
      label: "Developing Strength",
      heading: "You have several effective financial habits in place.",
      message:
        "Your foundation is progressing, though additional structure in selected areas could improve consistency and support your long-term objectives. AZTEX can help convert existing habits into a more complete financial system.",
      cta: "Strengthen Your Financial System",
    };
  }

  if (score >= 50) {
    return {
      label: "Needs Attention",
      heading: "Several areas would benefit from greater structure.",
      message:
        "Your results suggest that organization, cash-flow management, savings, or debt planning may be limiting progress. AZTEX can help you establish clear priorities and a practical framework for improvement.",
      cta: "Schedule Your Consultation",
    };
  }

  return {
    label: "Foundation Opportunity",
    heading: "A structured financial foundation should be the immediate priority.",
    message:
      "Your responses indicate an opportunity to improve several foundational financial systems. AZTEX can help you organize your current position, develop an actionable plan, and establish consistent financial practices.",
    cta: "Begin Building Your Foundation",
  };
}

export default function FinancialScorePage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [completed, setCompleted] = useState(false);

  const question = questions[current];
  const progress = completed ? 100 : ((current + 1) / questions.length) * 100;

  const totalScore = useMemo(() => {
    const earned = Object.values(answers).reduce((sum, value) => sum + value, 0);
    const maximum = questions.length * 4;
    return Math.round((earned / maximum) * 100);
  }, [answers]);

  const categoryScores = useMemo(() => {
    return categories.map((category) => {
      const group = questions.filter((item) => item.category === category);
      const earned = group.reduce((sum, item) => sum + (answers[item.id] ?? 0), 0);
      return {
        category,
        score: Math.round((earned / (group.length * 4)) * 100),
      };
    });
  }, [answers]);

  const result = resultFor(totalScore);

  function selectAnswer(score: number) {
    const nextAnswers = { ...answers, [question.id]: score };
    setAnswers(nextAnswers);

    if (current === questions.length - 1) {
      setCompleted(true);
      return;
    }

    setCurrent((value) => value + 1);
  }

  function resetQuiz() {
    setAnswers({});
    setCurrent(0);
    setCompleted(false);
  }

  return (
    <main>
      <section className="border-b border-[color:var(--color-charcoal)]/10 bg-[color:var(--color-navy)] px-6 py-20 text-white sm:px-10 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[color:var(--color-gold)]">
            AZTEX Financial Score
          </p>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl">
            Evaluate the strength of your financial foundation.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Complete a brief assessment across financial organization, cash flow, savings, debt, and goal planning. Your results will include a score and practical next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 sm:px-10 lg:px-12 lg:py-24">
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--color-charcoal)]/55">
            <span>{completed ? "Assessment complete" : `Question ${current + 1} of ${questions.length}`}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-[color:var(--color-navy)]/10">
            <div
              className="h-full rounded-full bg-[color:var(--color-gold)] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {!completed ? (
          <div className="grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
            <aside className="rounded-[2rem] bg-[#f0eee8] p-8 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
                Current category
              </p>
              <h2 className="mt-5 text-3xl font-semibold text-[color:var(--color-navy)]">
                {question.category}
              </h2>
              <p className="mt-5 text-sm leading-7 text-[color:var(--color-charcoal)]/70">
                Select the response that most accurately reflects your current financial practices. The assessment is educational and is not a substitute for financial, investment, tax, or legal advice.
              </p>
            </aside>

            <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.18)] sm:p-10">
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-[color:var(--color-navy)] sm:text-4xl">
                {question.prompt}
              </h2>
              <div className="mt-9 grid gap-4">
                {question.options.map((option) => (
                  <button
                    key={option.label}
                    type="button"
                    onClick={() => selectAnswer(option.score)}
                    className="group flex min-h-16 w-full items-center justify-between rounded-2xl border border-[color:var(--color-charcoal)]/12 bg-[color:var(--color-white-warm)] px-5 py-4 text-left text-base font-medium text-[color:var(--color-charcoal)] transition hover:border-[color:var(--color-gold)] hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)]"
                  >
                    <span>{option.label}</span>
                    <span className="ml-5 text-xl text-[color:var(--color-gold)] transition-transform group-hover:translate-x-1">→</span>
                  </button>
                ))}
              </div>

              {current > 0 ? (
                <button
                  type="button"
                  onClick={() => setCurrent((value) => value - 1)}
                  className="mt-7 text-sm font-semibold text-[color:var(--color-navy)] underline decoration-[color:var(--color-gold)] underline-offset-4"
                >
                  Return to previous question
                </button>
              ) : null}
            </div>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
            <aside className="rounded-[2rem] bg-[color:var(--color-navy)] p-8 text-white sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[color:var(--color-gold)]">
                Your score
              </p>
              <div className="mt-7 flex items-end gap-3">
                <span className="font-serif text-7xl font-semibold leading-none text-white sm:text-8xl">{totalScore}</span>
                <span className="pb-2 text-xl text-white/55">/100</span>
              </div>
              <p className="mt-7 text-sm font-semibold uppercase tracking-[0.28em] text-[color:var(--color-gold)]">
                {result.label}
              </p>
              <button
                type="button"
                onClick={resetQuiz}
                className="mt-10 text-sm font-semibold text-white underline decoration-[color:var(--color-gold)] underline-offset-4"
              >
                Retake assessment
              </button>
            </aside>

            <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-8 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.18)] sm:p-10">
              <h2 className="text-4xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-navy)]">
                {result.heading}
              </h2>
              <p className="mt-6 text-base leading-8 text-[color:var(--color-charcoal)]/75">
                {result.message}
              </p>

              <div className="mt-9 space-y-5">
                {categoryScores.map((item) => (
                  <div key={item.category}>
                    <div className="flex items-center justify-between text-sm font-semibold text-[color:var(--color-navy)]">
                      <span>{item.category}</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-[color:var(--color-navy)]/10">
                      <div
                        className="h-full rounded-full bg-[color:var(--color-gold)]"
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl bg-[#f0eee8] p-6">
                <h3 className="text-xl font-semibold text-[color:var(--color-navy)]">Recommended next step</h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-charcoal)]/72">
                  Schedule an initial consultation to review your score, discuss the areas requiring the greatest attention, and determine whether AZTEX services align with your objectives.
                </p>
                <Link
                  href="/schedule"
                  className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[color:var(--color-navy)] px-7 py-3 text-sm font-semibold tracking-wide !text-white transition hover:bg-[#163552] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[color:var(--color-gold)]"
                >
                  {result.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
