import { sendMail } from "@/lib/mailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // Extract form fields
    const data = {
      year: formData.get("year") as string,
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      vin: formData.get("vin") as string,
      name: formData.get("name") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      notes: formData.get("notes") as string,
    };

    // Extract photos
    const photos: File[] = [];
    let photoIndex = 0;
    while (formData.get(`photo_${photoIndex}`)) {
      const photo = formData.get(`photo_${photoIndex}`) as File;
      photos.push(photo);
      photoIndex++;
    }

    // Server-side lead tracking
    console.log("💰 Estimate Lead", {
      timestamp: new Date().toISOString(),
      name: data.name,
      phone: data.phone,
      email: data.email || null,
      vehicle: data.year && data.make ? `${data.year} ${data.make} ${data.model}` : "Not provided",
      photosCount: photos.length,
    });

    // TODO: Wire up email or database storage
    // For now, just log the data
    console.log("Estimate data:", data);
    console.log("Photos uploaded:", photos.map(p => p.name));

    await sendMail({
      to: process.env.CONTACT_TO || "info@creationcustomsllc.com",
      subject: "New Estimate Request",
      text: `
New Estimate Request:

Vehicle: ${data.year} ${data.make} ${data.model}
VIN: ${data.vin || "Not provided"}

Contact Information:
Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

Notes: ${data.notes || "None"}

Photos uploaded: ${photos.length}
      `.trim(),
      replyTo: data.email
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Error processing estimate:", error);
    return Response.json({ error: "Failed to process estimate" }, { status: 500 });
  }
}
