import { Resend } from 'resend';
import VerificationEmailTemplate from '@/app/email-templates/verification-email-template';
import PassResetEmailTemplate from '@/app/email-templates/pass-reset-email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerificationEmail = async (
  email: string,
  token: string,
  userName: string
) => {
  const confirmLink = `${process.env.BASE_URL}/auth/new-verification?token=${token}`;

  await resend.emails.send({
    from: 'do-not-replay<office@bfscompany.rs>',
    to: email,
    subject: 'Email verification',
    react: VerificationEmailTemplate({
      urlLink: confirmLink,
      userName,
    }),
  });
};
export const sendPasswordResetEmail = async (
  email: string,
  token: string,
  userName: string
) => {
  const resetLink = `${process.env.BASE_URL}/auth/new-password?token=${token}`;

  await resend.emails.send({
    from: 'do-not-replay<office@bfscompany.rs>',
    to: email,
    subject: 'Reset password',
    react: PassResetEmailTemplate({
      urlLink: resetLink,
      userName,
    }),
  });
};

export const sendTwoFactorTokenEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: 'do-not-replay<office@bfscompany.rs>',
    to: email,
    subject: 'Vas 2FA borj ',
    html: `<p>Vas 2FA kod je: ${token}</p>`,
  });
};
