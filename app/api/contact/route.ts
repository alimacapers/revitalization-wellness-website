import { NextResponse } from 'next/server';

function clean(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as Record<string, unknown>;
    const name = clean(body.name, 100);
    const email = clean(body.email, 200);
    const inquiryType = clean(body.inquiryType, 80) || 'General inquiry';
    const message = clean(body.message, 3000);
    const website = clean(body.website, 200);
    const consent = clean(body.consent, 10);

    if (website) return NextResponse.json({ ok: true });
    if (!name || !email || !message || consent !== 'yes' || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !toEmail || !fromEmail) {
      console.error('Contact form email environment variables are not configured.');
      return NextResponse.json({ error: 'Contact form is not configured.' }, { status: 503 });
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: email,
        subject: `RWC website: ${inquiryType}`,
        text: `New website inquiry\n\nName: ${name}\nEmail: ${email}\nType: ${inquiryType}\n\nMessage:\n${message}`,
      }),
    });

    if (!emailResponse.ok) {
      console.error('Resend error:', await emailResponse.text());
      return NextResponse.json({ error: 'Unable to send message.' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 });
  }
}
