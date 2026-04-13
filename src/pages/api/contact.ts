export const prerender = false;

import "dotenv/config";
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";
import { google } from "googleapis";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const oauth2Client = new google.auth.OAuth2(
    process.env.GMAIL_CLIENT_ID,
    process.env.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({ refresh_token: process.env.GMAIL_REFRESH_TOKEN });
  const { token: accessToken } = await oauth2Client.getAccessToken();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_USER,
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
      accessToken: accessToken!,
    },
  });

  const isQuote = data.intent === "quote";
  const subject = isQuote
    ? `New Quote Request from ${data.name}`
    : `New Project Submission from ${data.name}`;

  const lines = [
    `Type: ${isQuote ? "Quote Request" : "Start a Project"}`,
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.business && `Business: ${data.business}`,
    data.projectType && `Project Type: ${data.projectType}`,
    data.goal && `Goal: ${data.goal}`,
    data.budget && `Budget: ${data.budget}`,
    data.timeline && `Timeline: ${data.timeline}`,
    `\n${isQuote ? "What they need" : "Details"}:\n${data.details}`,
  ]
    .filter(Boolean)
    .join("\n");

  await transporter.sendMail({
    from: process.env.GMAIL_USER,
    to: "garayidan@gmail.com",
    subject,
    text: lines,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
