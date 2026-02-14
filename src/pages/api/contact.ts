import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

type Data = {
  success: boolean;
  error?: string;
};

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
      secure: false, // true si port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_FROM, // pour tester, tu t'envoies à toi-même
      replyTo: email,
      subject: `Message test - ${name}`,
      html: `<p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    console.error("Erreur SMTP:", err);
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return res.status(500).json({ success: false, error: message });
  }
}
