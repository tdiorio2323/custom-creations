import { z } from "zod";

export const ContactSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email().optional(),
  message: z.string().min(10),
  consent: z.literal(true),
});

export const EstimateSchema = ContactSchema.extend({
  year: z.string().optional(),
  make: z.string().optional(),
  model: z.string().optional(),
  vin: z.string().optional(),
  service: z.enum(["repair","ceramic","ppf"]),
  panels: z.string().optional(),
  budget: z.string().optional(),
  urgency: z.enum(["asap","this-week","flex"]).optional(),
  photos: z.array(z.string().url()).optional(),
});
