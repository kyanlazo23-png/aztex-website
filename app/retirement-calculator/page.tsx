"use client";

import { useMemo, useState } from "react";
import SectionTitle from "@/components/SectionTitle";

type Projection = {
  year: number;
  balance: number;
  contributions: number;
  growth: number;
};

const money = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default function RetirementCalculatorPage() {
  const [currentBalance, setCurrentBalance] = useState(10000);
  const [years, setYears] = useState(30);
  const [annualContribution, setAnnualContribution] = useState(6000);
  const [annualReturn, setAnnualReturn] = useState(7);
  const [contributionIncrease, setContributionIncrease] = useState(0);

  const projections = useMemo<Projection[]>(() => {
    const safeYears = clamp(Math.round(years || 0), 1, 60);
    const rate = clamp(annualReturn || 0, 0, 20) / 100;
    const increase = clamp(contributionIncrease || 0, 0, 20) / 100;
    let balance = Math.max(currentBalance || 0, 0);
    let contribution = Math.max(annualContribution || 0, 0);
    let totalContributions = balance;

    const rows: Projection[] = [
      { year: 0, balance, contributions: totalContributions, growth: 0 },
    ];

    for (let year = 1; year <= safeYears; year += 1) {
      const monthlyRate = Math.pow(1 + rate, 1 / 12) - 1;
      const monthlyContribution = contribution / 12;

      for (let month = 0; month < 12; month += 1) {
        balance = balance * (1 + monthlyRate) + monthlyContribution;
      }

      totalContributions += contribution;
      rows.push({
        year,
        balance,
        contributions: totalContributions,
        growth: Math.max(balance - totalContributions, 0),
      });
      contribution *= 1 + increase;
    }

    return rows;
  }, [currentBalance, years, annualContribution, annualReturn, contributionIncrease]);

  const final = projections.at(-1) ?? projections[0];
  const width = 760;
  const height = 320;
  const padding = 28;
  const maxValue = Math.max(...projections.map((row) => row.balance), 1);
  const point = (row: Projection) => {
    const x = padding + (row.year / Math.max(projections.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - (row.balance / maxValue) * (height - padding * 2);
    return `${x},${y}`;
  };
  const contributionPoint = (row: Projection) => {
    const x = padding + (row.year / Math.max(projections.length - 1, 1)) * (width - padding * 2);
    const y = height - padding - (row.contributions / maxValue) * (height - padding * 2);
    return `${x},${y}`;
  };

  const fields = [
    ["Current retirement savings", currentBalance, setCurrentBalance, 0, 10000000, 1000],
    ["Years until retirement", years, setYears, 1, 60, 1],
    ["Annual contribution", annualContribution, setAnnualContribution, 0, 500000, 500],
    ["Assumed annual return (%)", annualReturn, setAnnualReturn, 0, 20, 0.1],
    ["Annual contribution increase (%)", contributionIncrease, setContributionIncrease, 0, 20, 0.1],
  ] as const;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
      <SectionTitle
        eyebrow="Retirement Calculator"
        title="See how consistent saving may grow over time."
        description="Adjust the assumptions below to create a hypothetical retirement projection and separate your contributions from estimated investment growth."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
        <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-7 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.2)] sm:p-9">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Your assumptions</h2>
          <div className="mt-8 space-y-6">
            {fields.map(([label, value, setter, min, max, step]) => (
              <label key={label} className="block">
                <span className="mb-2 block text-sm font-medium text-[color:var(--color-charcoal)]">{label}</span>
                <input
                  type="number"
                  value={value}
                  min={min}
                  max={max}
                  step={step}
                  onChange={(event) => setter(Number(event.target.value))}
                  className="w-full rounded-xl border border-[color:var(--color-charcoal)]/15 bg-[color:var(--color-white-warm)] px-4 py-3 text-[color:var(--color-charcoal)] outline-none transition focus:border-[color:var(--color-gold)] focus:ring-2 focus:ring-[color:var(--color-gold)]/20"
                />
              </label>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Estimated balance", final.balance],
              ["Total contributions", final.contributions],
              ["Estimated growth", final.growth],
            ].map(([label, value]) => (
              <div key={label as string} className="rounded-[1.5rem] bg-[color:var(--color-navy)] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.22em] text-white/60">{label}</p>
                <p className="mt-4 text-2xl font-semibold text-white">{money.format(value as number)}</p>
              </div>
            ))}
          </div>

          <div className="rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white p-5 shadow-[0_30px_80px_-50px_rgba(34,34,34,0.2)] sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Projected growth</h2>
                <p className="mt-2 text-sm text-[color:var(--color-charcoal)]/65">Balance compared with cumulative contributions</p>
              </div>
              <div className="flex gap-5 text-xs text-[color:var(--color-charcoal)]/70">
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-navy)]" />Balance</span>
                <span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-gold)]" />Contributions</span>
              </div>
            </div>
            <div className="mt-7 overflow-x-auto">
              <svg viewBox={`0 0 ${width} ${height}`} className="min-w-[620px] w-full" role="img" aria-label="Retirement projection chart">
                {[0.25, 0.5, 0.75, 1].map((ratio) => (
                  <line key={ratio} x1={padding} x2={width - padding} y1={height - padding - ratio * (height - padding * 2)} y2={height - padding - ratio * (height - padding * 2)} stroke="rgba(34,34,34,0.10)" strokeWidth="1" />
                ))}
                <polyline fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" points={projections.map(contributionPoint).join(" ")} />
                <polyline fill="none" stroke="var(--color-navy)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" points={projections.map(point).join(" ")} />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[2rem] border border-[color:var(--color-charcoal)]/10 bg-white">
        <div className="border-b border-[color:var(--color-charcoal)]/10 px-6 py-5 sm:px-8">
          <h2 className="text-2xl font-semibold text-[color:var(--color-navy)]">Year-by-year projection</h2>
        </div>
        <div className="max-h-[480px] overflow-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="sticky top-0 bg-[color:var(--color-white-warm)] text-[color:var(--color-charcoal)]/65">
              <tr><th className="px-6 py-4">Year</th><th className="px-6 py-4">Projected balance</th><th className="px-6 py-4">Contributions</th><th className="px-6 py-4">Estimated growth</th></tr>
            </thead>
            <tbody>
              {projections.map((row) => (
                <tr key={row.year} className="border-t border-[color:var(--color-charcoal)]/8">
                  <td className="px-6 py-4 font-medium text-[color:var(--color-navy)]">{row.year}</td>
                  <td className="px-6 py-4">{money.format(row.balance)}</td>
                  <td className="px-6 py-4">{money.format(row.contributions)}</td>
                  <td className="px-6 py-4">{money.format(row.growth)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-8 rounded-2xl bg-[color:var(--color-navy)]/5 p-5 text-sm leading-7 text-[color:var(--color-charcoal)]/70">
        Results are hypothetical estimates based on the assumptions entered. Actual returns, fees, taxes, inflation, and contribution timing can materially change outcomes. This calculator is for educational purposes only and does not provide investment, tax, legal, or retirement-planning advice.
      </p>
    </section>
  );
}
