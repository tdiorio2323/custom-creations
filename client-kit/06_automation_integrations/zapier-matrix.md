# Zapier Automation Matrix

| Trigger | Source App | Conditions | Actions | Destination |
| --- | --- | --- | --- | --- |
| Lead form submitted (`/estimate`) | Webflow/Next webhook | Service = Auto Body | 1. Send confirmation email (Gmail).<br>2. SMS alert to advisor (Twilio).<br>3. Create lead in CRM with tag `estimate`. | CRM, Twilio |
| Contact form submitted (`/contact`) | Next.js API | All | Create ticket in helpdesk, notify Slack channel `#new-leads`. | Slack, Helpdesk |
| Job marked “Ready for Pickup” | CRM status change | Stage = Completed | Send SMS + email with pickup instructions and care guide link. | Twilio, Gmail |
| Review request pending | Delivery date +1 | No review logged | Trigger review SMS/email (see `review-generation-system.md`). | Twilio, Gmail |
| Booking scheduled (Cal.com) | Cal.com webhook | Appointment type = Ceramic or PPF | Update CRM event, add to Google Calendar resource, send prep checklist. | CRM, Google Calendar |
| DocuSign envelope completed | DocuSign | Template = Repair Authorization | Save PDF to Drive, update CRM field `authorization_signed = true`. | Google Drive, CRM |
| Photo upload folder updated | Google Drive | New file in `Photos/RO#` | Notify marketing for social selection; log asset in Airtable. | Slack, Airtable |
| Low review alert (≤3 stars) | Google Reviews feed | Rating <= 3 | Create task for owner, send SMS alert. | Task manager, Twilio |

## Implementation Notes
- TODO: Confirm CRM platform for API integration.
- TODO: Validate Twilio vs. other SMS provider (cost, deliverability).
- Ensure PII is transmitted securely; use Zapier storage only when compliant.
