const fs=require('fs');
const pdf=Buffer.from(
'%PDF-1.4\n1 0 obj<<>>endobj\n2 0 obj<</Length 44>>stream\nBT /F1 24 Tf 72 720 Td (Claim Checklist) Tj ET\nendstream\nendobj\n3 0 obj<</Type /Catalog /Pages 4 0 R>>endobj\n4 0 obj<</Type /Pages /Kids [5 0 R] /Count 1>>endobj\n5 0 obj<</Type /Page /Parent 4 0 R /MediaBox [0 0 612 792] /Contents 2 0 R /Resources<</Font<</F1 6 0 R>>>>>>endobj\n6 0 obj<</Type/Font /Subtype/Type1 /BaseFont/Helvetica>>endobj\nxref\n0 7\n0000000000 65535 f \n0000000010 00000 n \n0000000031 00000 n \n0000000131 00000 n \n0000000176 00000 n \n0000000244 00000 n \n0000000392 00000 n \ntrailer<</Size 7/Root 3 0 R>>\nstartxref\n492\n%%EOF'
,'binary');
require('fs').mkdirSync('public/pdfs',{recursive:true});
fs.writeFileSync('public/pdfs/claim-checklist.pdf',pdf);
console.log('wrote public/pdfs/claim-checklist.pdf');

