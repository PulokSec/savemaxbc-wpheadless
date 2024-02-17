import { render } from '@react-email/render';
import { NextRequest, NextResponse } from 'next/server';

import { sendEmail } from '@/lib/email-helper';

import ReplyEmail from '@/components/utils/email-template/auto_reply';
import ConfirmationEmail from '@/components/utils/email-template/confirmationMail';
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
      cc,
      title,
    } = body;

    await sendEmail({
      from: fromEmail,
      to: toEmail,
      subject: emailSubject,
      cc: cc,
      html: render(
        ApplyNowEmail({
          name,
          field,
          mail,
          phone,
          message,
          title,
          emailSubject
        })
      ),
    });
    await sendEmail({
      from: fromEmail,
      to: mail,
      subject: 'Form Submission Confirmation - Save Max Westcoast Realty Inc.',
      cc: cc,
      html: render(
        ConfirmationEmail({
          name,
        })
      ),
    });
    await sendEmail({
      from: fromEmail,
      to: mail,
      subject: 'Thank you so much for contacting us on our website ' + name,
      cc: cc,
      html: render(
        ReplyEmail({
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
