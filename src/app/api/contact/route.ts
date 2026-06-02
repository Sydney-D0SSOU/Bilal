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

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
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

    const safeName = escapeHtml(validated.name);
    const safeEmail = escapeHtml(validated.email);
    const safeMessage = escapeHtml(validated.message).replace(/\n/g, "<br/>");

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
        <div style="margin:0;padding:0;background:#1d1b20;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:linear-gradient(140deg,#525250 0%,#131313 64%);padding:32px 16px;font-family:'SF Pro Display',Arial,sans-serif;">
            <tr>
              <td align="center">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;background:#1d1b20;border:1px solid #404040;border-radius:16px;overflow:hidden;position:relative;">
                  <tr>
                    <td style="padding:24px 24px 12px 24px;">
                      <div style="font-family:'Clash Display','Arial Black',Arial,sans-serif;font-size:56px;line-height:1;font-weight:700;letter-spacing:1.4px;color:rgba(255,250,235,0.06);text-align:right;user-select:none;">
                        BILAL
                      </div>
                      <p style="margin:0 0 8px 0;color:#d4d4d4;font-size:14px;line-height:20px;letter-spacing:.25px;">
                        Nouveau message depuis le formulaire de contact
                      </p>
                      <h1 style="margin:0;color:#ffffff;font-size:28px;line-height:36px;font-weight:600;">
                        ${safeName}
                      </h1>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 24px;">
                      <div style="height:1px;background:#404040;"></div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:20px 24px 24px 24px;">
                      <p style="margin:0 0 6px 0;color:#a1a1a1;font-size:13px;line-height:18px;letter-spacing:.25px;text-transform:uppercase;">
                        Email
                      </p>
                      <p style="margin:0 0 18px 0;">
                        <a href="mailto:${safeEmail}" style="color:#fffaeb;text-decoration:underline;font-size:16px;line-height:24px;letter-spacing:.5px;">
                          ${safeEmail}
                        </a>
                      </p>
                      <p style="margin:0 0 6px 0;color:#a1a1a1;font-size:13px;line-height:18px;letter-spacing:.25px;text-transform:uppercase;">
                        Message
                      </p>
                      <div style="margin:0;padding:16px;border-radius:12px;background:rgba(212,212,212,.05);border:1px solid #404040;color:#ffffff;font-size:16px;line-height:24px;letter-spacing:.3px;white-space:normal;">
                        ${safeMessage}
                      </div>
                      <p style="margin:14px 0 0 0;color:rgba(255,250,235,.32);font-family:'Clash Display','Arial Black',Arial,sans-serif;font-size:13px;letter-spacing:1px;text-transform:uppercase;">
                        portfolio • bilalmaoudekassimou@gmail.com
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
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
