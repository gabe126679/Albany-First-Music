import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: Request) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const applicant = await req.json();

    const applicantId = `AFM-2026-${String(applicant.applicant_number ?? '000').padStart(3, '0')}`;

    await resend.emails.send({
      from: 'Albany First Music <onboarding@resend.dev>',
      to: applicant.email,
      subject: 'Your Albany First Music Audition Application Has Been Received',
      text: `
Hi ${applicant.full_name},

Your Albany First Music audition application has been received.

Applicant ID:
${applicantId}

Audition Date:
October 11, 2026

Location:
Schacht Fine Arts Center / Schacht Theater
Troy, NY

Next Steps:
We will review your application and send your audition placement, arrival time, and preparation instructions by email.

Please prepare one original piece around 3 minutes long. Covers are allowed, but original work is preferred.

AFM exists to represent the highest quality art in the Capital Region. We believe creators should be judged by what they create, not by credentials.

Thank you for applying.

Albany First Music
      `,
    });

    await resend.emails.send({
      from: 'Albany First Music <onboarding@resend.dev>',
      to: process.env.AFM_NOTIFY_EMAIL!,
      subject: `New AFM Application: ${applicant.full_name}`,
      text: `
New AFM Application Received

Name: ${applicant.full_name}
Email: ${applicant.email}
Phone: ${applicant.phone || 'N/A'}
City: ${applicant.city_town}
Type: ${applicant.applicant_type}
Primary Instrument: ${applicant.primary_instrument}
Applicant ID: ${applicantId}

Favorite Bands:
${applicant.favorite_bands}

Representative Artists:
${applicant.representative_artists}

About:
${applicant.about_yourself}

Sample:
${applicant.sample_link || 'N/A'}

Social:
${applicant.social_links || 'N/A'}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);
    return Response.json({ success: false, error: 'Email failed' }, { status: 500 });
  }
};