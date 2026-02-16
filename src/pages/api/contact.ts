import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  error?: string;
};

// Charte graphique Rengus Digital
const BRAND = {
  primary: "#2A3C8E",
  white: "#FFFFFF",
  black: "#000000",
  accent: "#b1112a",
  grayBg: "#f4f4f4",
  grayPreheader: "#eaeaea",
  grayText: "#555555",
  grayLight: "#999999",
} as const;

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rengus-digital.com";
const LOGO_URL = `${BASE_URL}/images/Plan%20de%20travail%201.png`;

function buildEmailHtml(name: string, email: string, message: string): string {
  const escapedMessage = message
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\n/g, "<br />");
  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message - Rengus Digital</title>
</head>
<body style="margin:0; padding:0; background-color:${BRAND.grayBg}; font-family: Arial, Helvetica, sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background-color:${BRAND.grayBg};">
    <tr>
      <td style="background-color:${BRAND.grayPreheader}; padding:10px 20px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="font-size:12px; color:${BRAND.grayLight}; width:50%;">Nouveau message depuis le formulaire de contact</td>
            <td style="font-size:12px; color:${BRAND.grayLight}; text-align:right; width:50%;"><a href="${BASE_URL}" style="color:${BRAND.primary}; text-decoration:none;">Voir le site</a></td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td style="padding:0;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="margin:0 auto; max-width:600px; background-color:${BRAND.white};">
          <tr>
            <td style="background-color:${BRAND.primary}; padding:32px 24px; text-align:center;">
              <img src="${LOGO_URL}" alt="Rengus Digital" width="220" height="auto" style="display:inline-block; max-width:220px; height:auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding:32px 24px;">
              <p style="margin:0 0 20px 0; font-size:15px; line-height:1.6; color:${BRAND.grayText};">${escapedMessage}</p>
              <p style="margin:0; font-size:14px; color:${BRAND.grayText};"><strong>Expéditeur :</strong> ${name}<br /><strong>Email :</strong> <a href="mailto:${email}" style="color:${BRAND.primary}; text-decoration:none;">${email}</a></p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: "Tous les champs sont requis" });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const fromAddress = process.env.SMTP_FROM || process.env.EMAIL_FROM;
    if (!fromAddress) {
      return res.status(500).json({ success: false, error: "SMTP_FROM ou EMAIL_FROM non configuré" });
    }
    await transporter.sendMail({
      from: fromAddress,
      to: fromAddress,
      replyTo: email,
      subject: `Contact Rengus Digital - ${name}`,
      html: buildEmailHtml(name, email, message),
    });

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    console.error("Erreur SMTP:", err);
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return res.status(500).json({ success: false, error: message });
  }
}
