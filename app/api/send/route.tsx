import { EmailTemplate } from '@/app/[lang]/components/EmailTemplate';
import { Resend } from 'resend';
import { Locale } from '@/i18n.config';
import { NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail: string | undefined = process.env.FROM_EMAIL;

interface emailData {
  email: string;
  subject: string;
  message: string;
  name: string;
  lang: Locale;
}

export async function POST(req: Request, res: NextApiResponse) {
  try {
    const { email, subject, message, name, lang }: emailData = await req.json();
    const { data, error } = await resend.emails.send({
      from: fromEmail as string,
      to: [fromEmail as string, email],
      subject: subject,
      react: await EmailTemplate({
        firstName: name,
        message: message,
        currentLang: lang,
      }),
    });

    if (error) {
      return Response.json(error, { status: 400 });
    }
    return Response.json(data, { status: 200 });
  } catch (error) {
    error = JSON.stringify(error, Object.getOwnPropertyNames(error));
    return Response.json(error, { status: 400 });
  }
}
