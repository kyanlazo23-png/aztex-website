import { NextResponse } from "next/server";

type CategoryScore = { category: string; score: number };
type Payload = {
  name: string;
  email: string;
  phone?: string;
  priority?: string;
  totalScore: number;
  resultLabel: string;
  resultHeading: string;
  resultMessage: string;
  categoryScores: CategoryScore[];
  consent: boolean;
};

const OWNER_EMAIL = "kyan.lz@outlook.com";

function escapePdfText(value: string) {
  return value.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/[^\x20-\x7E]/g, "-");
}

function wrapText(text: string, max = 82) {
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const candidate = line ? `${line} ${word}` : word;
    if (candidate.length > max) {
      if (line) lines.push(line);
      line = word;
    } else line = candidate;
  }
  if (line) lines.push(line);
  return lines;
}

function createPdf(data: Payload) {
  const lines = [
    "AZTEX",
    "FINANCIAL SCORE REPORT",
    "",
    `Prepared for: ${data.name}`,
    `Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`,
    "",
    `Overall Financial Score: ${data.totalScore}/100`,
    `Assessment: ${data.resultLabel}`,
    "",
    ...wrapText(data.resultHeading),
    "",
    ...wrapText(data.resultMessage),
    "",
    "CATEGORY RESULTS",
    ...data.categoryScores.map((item) => `${item.category}: ${item.score}%`),
    "",
    "PRIMARY PRIORITY",
    ...wrapText(data.priority?.trim() || "No additional priority was provided."),
    "",
    "RECOMMENDED NEXT STEP",
    ...wrapText("Review the areas requiring the greatest attention and consider scheduling an initial AZTEX consultation to establish clear priorities and a practical financial organization framework."),
    "",
    "IMPORTANT DISCLOSURE",
    ...wrapText("This report is provided for educational purposes only. AZTEX provides financial education, budgeting assistance, cash-flow organization, and goal planning. It does not provide investment, tax, legal, or insurance advice."),
  ];

  const commands: string[] = ["BT", "/F1 22 Tf", "72 742 Td", "0.055 0.145 0.24 rg", `(AZTEX) Tj`, "0 -30 Td", "/F1 11 Tf", "0.72 0.52 0.25 rg", `(FINANCIAL SCORE REPORT) Tj`, "0 -30 Td", "0.12 0.12 0.12 rg"];
  let currentSize = 10;
  for (const raw of lines.slice(2)) {
    const heading = raw === "CATEGORY RESULTS" || raw === "PRIMARY PRIORITY" || raw === "RECOMMENDED NEXT STEP" || raw === "IMPORTANT DISCLOSURE";
    const score = raw.startsWith("Overall Financial Score:");
    const size = score ? 16 : heading ? 11 : 10;
    if (size !== currentSize) {
      commands.push(`/F1 ${size} Tf`);
      currentSize = size;
    }
    commands.push(`0 -${heading ? 22 : 15} Td`, `(${escapePdfText(raw || " ")}) Tj`);
  }
  commands.push("ET");
  const stream = commands.join("\n");

  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >> endobj",
    `4 0 obj << /Length ${Buffer.byteLength(stream)} >> stream\n${stream}\nendstream endobj`,
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  for (const object of objects) {
    offsets.push(Buffer.byteLength(pdf));
    pdf += `${object}\n`;
  }
  const xref = Buffer.byteLength(pdf);
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  for (let i = 1; i <= objects.length; i++) pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF`;
  return Buffer.from(pdf).toString("base64");
}

function emailHtml(data: Payload, recipient: "client" | "owner") {
  const intro = recipient === "client"
    ? `Thank you for completing the AZTEX Financial Score. Your personalized report is attached.`
    : `A new visitor completed the AZTEX Financial Score and requested their report.`;
  const details = recipient === "owner" ? `<p><strong>Name:</strong> ${data.name}<br/><strong>Email:</strong> ${data.email}<br/><strong>Phone:</strong> ${data.phone || "Not provided"}<br/><strong>Priority:</strong> ${data.priority || "Not provided"}</p>` : "";
  return `<div style="font-family:Arial,sans-serif;max-width:640px;margin:auto;color:#222"><div style="background:#0e2740;padding:28px;color:white"><div style="font-family:Georgia,serif;font-size:32px;letter-spacing:6px">AZTEX</div></div><div style="padding:32px;border:1px solid #e7e1d7"><p>${intro}</p>${details}<h2 style="color:#0e2740">${data.totalScore}/100 — ${data.resultLabel}</h2><p>${data.resultMessage}</p><p><a href="https://aztex-financial-services.vercel.app/schedule" style="display:inline-block;background:#0e2740;color:white;text-decoration:none;padding:14px 22px;border-radius:999px">Schedule a Consultation</a></p><p style="font-size:12px;color:#666;margin-top:28px">For educational purposes only. AZTEX does not provide investment, tax, legal, or insurance advice.</p></div></div>`;
}

async function sendEmail(apiKey: string, from: string, to: string[], subject: string, html: string, attachment: string, replyTo?: string) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
      reply_to: replyTo,
      attachments: [{ filename: "AZTEX-Financial-Score-Report.pdf", content: attachment }],
    }),
  });
  if (!response.ok) throw new Error(await response.text());
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Payload;
    if (!data.name?.trim() || !data.email?.includes("@") || !data.consent) return NextResponse.json({ error: "Please provide a valid name, email, and consent." }, { status: 400 });
    if (!Number.isFinite(data.totalScore) || data.totalScore < 0 || data.totalScore > 100 || !Array.isArray(data.categoryScores)) return NextResponse.json({ error: "Invalid assessment results." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    if (!apiKey || !from) return NextResponse.json({ error: "Email delivery has not been configured." }, { status: 503 });

    const pdf = createPdf(data);
    await Promise.all([
      sendEmail(apiKey, from, [data.email], "Your AZTEX Financial Score Report", emailHtml(data, "client"), pdf, OWNER_EMAIL),
      sendEmail(apiKey, from, [OWNER_EMAIL], `New AZTEX Financial Score Lead: ${data.name}`, emailHtml(data, "owner"), pdf, data.email),
    ]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Financial score email error:", error);
    return NextResponse.json({ error: "We could not send the report. Please try again." }, { status: 500 });
  }
}
