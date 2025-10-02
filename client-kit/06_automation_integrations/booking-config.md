# Booking Platform Configuration (Cal.com)

## Appointment Types
1. **Collision Estimate (In-Shop)**
   - Duration: 45 min.
   - Availability: Mon-Fri 8am-4pm.
   - Buffer: 15 min before/after.
   - Intake questions: Vehicle info, insurance claim #, photos link.
2. **Ceramic Coating Consultation**
   - Duration: 30 min (virtual or in-person).
   - Buffer: 10 min after.
   - Collect paint condition notes.
3. **PPF Drop-Off**
   - Duration: 15 min.
   - Require deposit $100 (Stripe integration).
   - TODO: Confirm cancellation policy.

## Global Settings
- Display timezone: America/New_York.
- Confirmation emails branded with Custom Creations logo.
- SMS reminders 24 hours prior (enable Twilio integration).
- Limit bookings to 14 days in advance for collision.

## Automations
- Webhook to Next.js API → CRM create/update.
- Send pre-appointment checklist (see `care-instructions.md`).
- If deposit collected, sync to accounting (QuickBooks?).

## Embeds
- Use iframe on `/booking` page (already references env variable `NEXT_PUBLIC_CAL_URL`).
- Provide direct link in referral emails.
- TODO: Generate QR for front desk signage.

## Reporting
- Monthly export of bookings vs. show rate.
- Track conversion to closed repair order.
