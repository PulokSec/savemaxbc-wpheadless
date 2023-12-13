import { render } from '@react-email/render';
import { NextRequest, NextResponse } from 'next/server';

import { sendEmail } from '@/lib/email-helper';

import AutoReply from '@/components/utils/email-template/auto_reply';
import ApplyNowEmail from '@/components/utils/email-template/contact_form';
export async function POST(request: NextRequest) {
  const body = await request.json();
  try {
    const {
      fromEmail,
      toEmail,
      emailSubject,
      name,
      mail,
      phone,
      field,
      message,
    } = body;

    await sendEmail({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      html: render(
        ApplyNowEmail({
          name,
          field,
          mail,
          phone,
          message,
        })
      ),
    });
    await sendEmail({
      from: fromEmail,
      to: mail,
      subject: 'Thank you so much for contacting us on our website ' + name,
      html: render(
        AutoReply({
          name,
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
