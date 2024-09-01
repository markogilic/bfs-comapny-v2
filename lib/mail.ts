import { Resend } from 'resend';
import VerificationEmailTemplate from '@/app/email-templates/verification-email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string,
  userName: string
) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'From BFS do-not-replay<onboarding@resend.dev>',
    to: [email],
    subject: 'Email verification',
    react: VerificationEmailTemplate({
      urlLink: confirmLink,
      userName,
    }),
  });
};
