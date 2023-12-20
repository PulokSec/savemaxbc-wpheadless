import { render } from '@react-email/render';
import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

import { sendEmail } from '@/lib/email-helper';

import ReplyEmail from '@/components/utils/email-template/auto_reply';
import ApplyNowEmail from '@/components/utils/email-template/contact_form';

const smtpOptions = {
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
};

const transporter = nodemailer.createTransport({
  ...smtpOptions,
});
export async function POST(request: NextRequest) {
  const formData: FormData = await request.formData();

  try {
    const chunks: Buffer[] = [];
    const cv = formData.get('cv') as File;
    const fileData = Buffer.concat(chunks);

    const filename = cv?.name;

    const attachments = [{ content: fileData, filename }];
    await transporter.sendMail({
      from: formData.get('fromEmail') as string,
      to: formData.get('toEmail') as string,
      subject: formData.get('emailSubject') as string,
      cc: formData.get('cc') as string,
      html: render(
        ApplyNowEmail({
          name: formData.get('name') as string,
          field: formData.get('field') as string,
          mail: formData.get('mail') as string,
          phone: formData.get('phone') as string,
          message: formData.get('message') as string,
        })
      ),
      attachments: attachments,
    });
    await sendEmail({
      from: formData.get('fromEmail') as string,
      to: formData.get('mail') as string,
      subject: formData.get('emailSubject') as string,
      cc: formData.get('cc') as string,
      html: render(
        ReplyEmail({
          name: formData.get('name') as string,
        })
      ),
    });
    return NextResponse.json(
      { message: 'Form Submission Success' },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: 'Error', error }, { status: 500 });
  }
}
