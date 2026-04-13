export const prerender = false;

import "dotenv/config";
import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }) => {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
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
    from: `${data.name} <${process.env.SMTP_USER}>`,
    replyTo: `${data.name} <${data.email}>`,
    to: "garayidan@gmail.com, hello@idanjoshua.dev",
    subject,
    text: lines,
  });

  await transporter.sendMail({
    from: `Idan Joshua <${process.env.SMTP_USER}>`,
    to: data.email,
    subject: `Got your message, ${data.name.split(" ")[0]}!`,
    text: `Hi ${data.name.split(" ")[0]},\n\nThanks for reaching out! I've received your ${isQuote ? "quote request" : "project submission"} and I'll get back to you within 24 hours.\n\nHere's a summary of what you sent:\n\n${lines}\n\n— Idan Joshua\nhello@idanjoshua.dev\nidanjoshua.dev`,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
