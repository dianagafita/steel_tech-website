// import OfferEmailTemplate from "@/components/email/offer-email-template";
// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   try {
//     const formData = await req.formData(); // Parse form data
//     const offer = {
//       fullName: formData.get("requestOfferFullName"),
//       phone: formData.get("requestOfferPhone"),
//       email: formData.get("requestOfferEmail"),
//       details: formData.get("requestOfferDetails"),
//       image: formData.get("requestOfferImage"), // Optional image handling
//     };

//     console.log("POST request received", offer);

//     await resend.emails.send({
//       from: "SteelTech <florariahellen@hellenproparty.ro>",
//       to: ["gafita.diana12@gmail.com"],
//       subject: "CERERE OFERTA",
//       react: OfferEmailTemplate({ offer }), // Use your template with the offer data
//     });

//     return NextResponse.json(
//       { message: "Email sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error:", error);
//     return NextResponse.json(
//       { message: "Failed to send email.", error },
//       { status: 500 }
//     );
//   }
// }
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const formData = await req.formData();
    const offer = {
      fullName: formData.get("requestOfferFullName"),
      phone: formData.get("requestOfferPhone"),
      email: formData.get("requestOfferEmail"),
      details: formData.get("requestOfferDetails"),
      image: formData.get("requestOfferImage"),
    };

    console.log("POST request received", offer);

    let imageBuffer = null;
    if (offer.image) {
      imageBuffer = Buffer.from(await offer.image.arrayBuffer());
    }

    await resend.emails.send({
      from: "SteelTech <florariahellen@hellenproparty.ro>",
      to: ["gafita.diana12@gmail.com"],
      subject: "CERERE OFERTA",
      html: `<h1>OFERTA </h1>
             <p><strong>NUME COMPLET:</strong> ${offer.fullName}</p>
             <p><strong>TELEFON:</strong> ${offer.phone}</p>
             <p><strong>EMAIL:</strong> ${offer.email}</p>
             <p><strong>DESCRIERE:</strong> ${offer.details}</p>
             <h2>Imagine de referinta:</h2>
            `,
      attachments: [
        {
          filename: offer.image ? "reference-image.png" : null,
          content: imageBuffer,
          cid: "image001",
        },
      ].filter(Boolean),
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { message: "Failed to send email.", error },
      { status: 500 }
    );
  }
}
