import type { VercelRequest, VercelResponse } from "@vercel/node";
import { z } from "zod";

const demoRequestSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  role: z.string().optional(),
  businessName: z.string().optional(),
  desiredSlotDate: z.string().min(1),
  otherInfo: z.string().optional(),
});

const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "umarmsharif@gmail.com";

async function sendEmailNotification(input: z.infer<typeof demoRequestSchema>) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) {
    console.warn("RESEND_API_KEY not set, skipping email notification");
    return;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "BlockNow <noreply@blocknow.co.uk>",
      to: [NOTIFY_EMAIL],
      subject: `New Demo Request from ${input.firstName} ${input.lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <table style="border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${input.firstName} ${input.lastName}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${input.email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Role</td><td style="padding:8px;">${input.role || "-"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Business</td><td style="padding:8px;">${input.businessName || "-"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Preferred Date</td><td style="padding:8px;">${input.desiredSlotDate}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Other Info</td><td style="padding:8px;">${input.otherInfo || "-"}</td></tr>
        </table>
      `,
    }),
  });

  if (!res.ok) {
    const body = await res.text();
    console.error("Failed to send email via Resend:", res.status, body);
  }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const input = demoRequestSchema.parse(req.body);

    try {
      await sendEmailNotification(input);
    } catch (err) {
      console.error("Failed to send email notification:", err);
    }

    return res.status(201).json({
      ok: true,
      message: "Thanks — we received your request. We'll contact you by email shortly.",
    });
  } catch (err) {
    if (err instanceof z.ZodError) {
      const first = err.errors[0];
      return res.status(400).json({
        message: first?.message ?? "Invalid request",
        field: first?.path?.join(".") ?? undefined,
      });
    }
    console.error(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
}
