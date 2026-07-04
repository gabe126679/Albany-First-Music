import "@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const formData = await req.json();

    const {
      name,
      email,
      phone,
      instrument,
      genre,
      message,
    } = formData;

    if (!name || !email) {
      return Response.json(
        { error: "Missing required fields: name and email" },
        { status: 400, headers: corsHeaders }
      );
    }

    const applicantEmailBody = {
      from: "Albany First Music <onboarding@resend.dev>",
      to: [email],
      subject: "Your AFM Audition Application Was Received",
      html: `
        <p>Hi ${name},</p>

        <p>Your Albany First Music audition application has been received.</p>

        <p>We will review your application and manually send your audition reservation number soon.</p>

        <p>Thank you for applying.</p>

        <p>— Albany First Music</p>
      `,
    };

    const gabeEmailBody = {
      from: "AFM Website <onboarding@resend.dev>",
      to: ["Gabe.mcmahon94@gmail.com"],
      subject: `New AFM Audition Applicant: ${name}`,
      html: `
        <h2>New AFM Audition Application</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Instrument:</strong> ${instrument || "N/A"}</p>
        <p><strong>Genre:</strong> ${genre || "N/A"}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
      `,
    };

    const [applicantResponse, gabeResponse] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(applicantEmailBody),
      }),

      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gabeEmailBody),
      }),
    ]);

    if (!applicantResponse.ok || !gabeResponse.ok) {
      const applicantError = await applicantResponse.text();
      const gabeError = await gabeResponse.text();

      throw new Error(
        `Email failed. Applicant: ${applicantError}. Gabe: ${gabeError}`
      );
    }

    return Response.json(
      { success: true },
      { status: 200, headers: corsHeaders }
    );
  } catch (error) {
    return Response.json(
      { error: String(error) },
      { status: 500, headers: corsHeaders }
    );
  }
});