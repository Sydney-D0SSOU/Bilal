import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_INTERVAL_MS = 10_000;

const lastSubmissionByIp = new Map<string, number>();

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown;
};

function getClientIp(req: Request): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  }

  return req.headers.get("x-real-ip") ?? "unknown";
}

function validate(payload: ContactPayload) {
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const message = typeof payload.message === "string" ? payload.message.trim() : "";
  const company = typeof payload.company === "string" ? payload.company.trim() : "";

  if (company.length > 0) {
    return { error: "Requete invalide." };
  }

  if (!name) {
    return { error: "Le nom est requis." };
  }

  if (!EMAIL_REGEX.test(email)) {
    return { error: "Adresse email invalide." };
  }

  if (!message) {
    return { error: "Le message est requis." };
  }

  return { name, email, message };
}

function getRequiredEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing env var: ${name}`);
  }
  return value;
}

export async function POST(req: Request) {
  try {
    const payload = (await req.json()) as ContactPayload;
    const validated = validate(payload);

    if ("error" in validated) {
      return NextResponse.json({ error: validated.error }, { status: 400 });
    }

    const ip = getClientIp(req);
    const now = Date.now();
    const lastSubmission = lastSubmissionByIp.get(ip) ?? 0;

    if (now - lastSubmission < MIN_SUBMIT_INTERVAL_MS) {
      return NextResponse.json(
        { error: "Veuillez patienter avant un nouvel envoi." },
        { status: 429 }
      );
    }

    lastSubmissionByIp.set(ip, now);

    const smtpHost = getRequiredEnv("SMTP_HOST");
    const smtpPort = Number(process.env.SMTP_PORT ?? "587");
    const smtpUser = getRequiredEnv("SMTP_USER");
    const smtpPass = getRequiredEnv("SMTP_PASS");
    const smtpSecure = process.env.SMTP_SECURE === "true";
    const mailTo = getRequiredEnv("CONTACT_TO_EMAIL");
    const mailFrom = process.env.CONTACT_FROM_EMAIL ?? smtpUser;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      replyTo: validated.email,
      subject: `Nouveau message de ${validated.name}`,
      text: [
        `Nom: ${validated.name}`,
        `Email: ${validated.email}`,
        "",
        "Message:",
        validated.message,
      ].join("\n"),
      html: `
        <p><strong>Nom:</strong> ${validated.name}</p>
        <p><strong>Email:</strong> ${validated.email}</p>
        <p><strong>Message:</strong></p>
        <p>${validated.message.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Impossible d'envoyer le message pour le moment." },
      { status: 500 }
    );
  }
}
