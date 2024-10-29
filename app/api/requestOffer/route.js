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
      file: formData.get("requestOfferFile"), // Handle file (image or DXF)
    };

    console.log("POST request received", offer);

    let fileBuffer = null;
    let fileName = null;

    if (offer.file) {
      // Check if the file is an image or DXF
      const fileType = offer.file.type;
      const fileExtension = offer.file.name.split(".").pop();

      // Determine file name and buffer
      fileName = `reference-file.${fileExtension}`;
      fileBuffer = Buffer.from(await offer.file.arrayBuffer());
    }

    const response = await resend.emails.send({
      from: offer.email,
      to: "office@steeltech.store",
      subject: "CERERE OFERTA",
      html: `<h1>OFERTA </h1>
             <p><strong>NUME COMPLET:</strong> ${offer.fullName}</p>
             <p><strong>TELEFON:</strong> ${offer.phone}</p>
             <p><strong>EMAIL:</strong> ${offer.email}</p>
             <p><strong>DESCRIERE:</strong> ${offer.details}</p>
             ${
               offer.file
                 ? `<h2>Fisier de referinta atașat: ${offer.file.name}</h2>`
                 : ""
             }
            `,
      attachments: offer.file
        ? [
            {
              filename: fileName, // Use the file's actual extension
              content: fileBuffer,
              cid: "file001",
            },
          ]
        : [], // No attachment if no file
    });
    console.log("User email response:", response);

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
