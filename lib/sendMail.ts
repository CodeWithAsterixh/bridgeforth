export async function sendMail({ subject, text }: { subject: string; text: string }) {
  try {
    if (process.env.SMTP_HOST) {
      const nodemailer: any = await import('nodemailer');
      const transporter: any = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: process.env.SMTP_USER
          ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
          : undefined,
      });

      const mail = {
        from: process.env.FROM_EMAIL || 'no-reply@bridgeforthcg.com',
        to: process.env.TO_EMAIL || 'info@bridgeforthcg.com',
        subject,
        text,
      };

      await transporter.sendMail(mail);
      return { ok: true };
    } else {
      // eslint-disable-next-line no-console
      console.log('Email send (no SMTP):', { subject, text });
      return { ok: true };
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('sendMail error', err);
    return { ok: false, error: String(err) };
  }
}
