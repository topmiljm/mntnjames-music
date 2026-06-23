// /* eslint-env node */

// import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }

//   const { name, email, subject, message } = req.body;

//   try {
//     await resend.emails.send({
//       from: 'website@yourdomain.com',
//       to: process.env.CONTACT_EMAIL,
//       replyTo: email,
//       subject: `[Website Contact] ${subject}`,
//       html: `
//         <h2>New Contact Form Submission</h2>

//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Subject:</strong> ${subject}</p>

//         <p>${message}</p>
//       `,
//     });

//     res.status(200).json({ success: true });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ success: false });
//   }
// }

export default function handler(req, res) {
  res.status(200).json({
    success: true,
    message: "API route working"
  });
}