import nodemailer from 'nodemailer';

type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  html: string;
  cc?: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport({
    ...smtpOptions,
  });

  return await transporter.sendMail({
    ...data,
  });
};
