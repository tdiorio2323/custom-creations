import { NextResponse } from "next/server";
import { BUSINESS } from "@/lib/seo";

export async function GET() {
  // Generate capabilities PDF content
  const pdfContent = generateCapabilitiesPDF();

  return new NextResponse(pdfContent.toString(), {
    headers: {
      "Content-Type": "text/plain",
      "Content-Disposition": "inline; filename=creation-customs-capabilities.txt",
    },
  });
}

function generateCapabilitiesPDF(): Buffer {
  // For MVP, return a simple text-based PDF placeholder
  // In production, use a proper PDF library like pdfkit or jsPDF

  const content = `
CREATION CUSTOMS - FLEET CAPABILITIES

Company Information:
${BUSINESS.name}
${BUSINESS.addressLine1}
${BUSINESS.city}, ${BUSINESS.state} ${BUSINESS.postalCode}
Phone: ${BUSINESS.phone}
Email: ${BUSINESS.email}

SERVICES OVERVIEW

1. COLLISION REPAIR
   - Full collision repair with certified technicians
   - OEM-quality parts and materials
   - Frame straightening and structural repair
   - Paint matching and refinishing
   - Insurance coordination with 1-14 day cycle times

2. CERAMIC COATING
   - Professional-grade ceramic protection
   - 2-7 year manufacturer warranties
   - Multi-stage paint correction
   - Certified products from IGL and Gtechniq
   - Reduces maintenance costs for fleet vehicles

3. PAINT PROTECTION FILM (PPF)
   - Self-healing PPF installation
   - Premium XPEL and 3M films
   - 10-year manufacturer warranty
   - Protects against rock chips and scratches
   - Available in gloss or matte finishes

4. DETAILING SERVICES
   - Appointment-only professional detailing
   - Certified products and techniques
   - Interior and exterior services
   - Fleet-specific packages available

5. FLEET SOLUTIONS
   - Networked partner model for specialized services
   - Flexible scheduling to minimize downtime
   - Volume pricing for fleet accounts
   - Dedicated account management
   - Priority service for commercial clients

WHY CHOOSE CREATION CUSTOMS

✓ Certified Products Only - We use only professional-grade, certified products
✓ Fast Turnaround - 1-14 day insurance cycle times
✓ Networked Partners - Access to specialized services when needed
✓ Commercial Experience - Proven track record with fleet services
✓ Quality Guarantee - Lifetime warranty on workmanship

INSURANCE & CLAIMS
We work with all major insurance carriers and handle the entire claims process.
Our streamlined approach keeps your vehicles on the road faster.

CONTACT US
For fleet estimates and consultations:
Phone: ${BUSINESS.phone}
Email: ${BUSINESS.email}

Hours:
Mon-Fri: 8:00 AM - 6:00 PM
Sat: 9:00 AM - 4:00 PM
Sun: Closed

Visit us online: https://customcreationssi.com
  `.trim();

  // Convert to basic PDF format
  // This is a minimal implementation - in production use a proper PDF library
  return Buffer.from(content, "utf-8");
}
