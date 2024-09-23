
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  console.log("mail bhejat bani");
  try {
    const data = await resend.emails.send({
      from: 'abcdz.36930@gmail.com',
      to: ['abcdz.36930@gmail.com'],
      subject: 'Hello world',
      react:  <>
                <h1>Hello world</h1>
                <p>This is a test email</p>
      </>
    });

    return Response.json(data);
  } catch (error) {
    console.log("grabad ho gail ba");
    // return Response.json({ error });
  }
}
