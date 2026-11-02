import { NextResponse } from "next/server";
import { EmailTemplate } from "@/components/emails/EmailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { name, phone, email, vehicle, service, message } = data;

    const contactEmail = process.env.CONTACT_EMAIL;
    const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!contactEmail || !contactFromEmail) {
      console.error("CONTACT_EMAIL ou CONTACT_FROM_EMAIL manquant");

      return NextResponse.json(
        {
          success: false,
          message: "Impossible d'envoyer la demande",
        },
        {
          status: 500,
        },
      );
    }

    const { data: emailData, error } = await resend.emails.send({
      from: `Flow Detailing <${contactFromEmail}>`,
      to: [contactEmail],
      subject: `Nouvelle demande de ${name}`,
      react: EmailTemplate({
        name,
        phone,
        email,
        vehicle,
        service,
        message,
      }),
    });

    if (error) {
      console.error(error);

      return NextResponse.json(
        {
          success: false,
          message: "Impossible d'envoyer la demande",
        },
        {
          status: 500,
        },
      );
    }

    console.log("E-mail envoyé :", emailData);

    return NextResponse.json(
      {
        success: true,
        message: "Demande envoyée",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Une erreur est survenue",
      },
      {
        status: 500,
      },
    );
  }
}
