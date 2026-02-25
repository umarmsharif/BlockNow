import { z } from "zod";

export const contactInfo = {
  businessName: "BlockNow",
  email: "Info@blocknow.co.uk",
  phone: "02034791300",
  address: "Unit 8A, Midas Business Centre, Wantz Road, Dagenham, RM10 8PS, UK",
  registeredIn: "United Kingdom",
} as const;

export const demoRequestSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().email("Enter a valid email"),
  role: z.string().trim().optional().default(""),
  businessName: z.string().trim().optional().default(""),
  otherInfo: z.string().trim().optional().default(""),
  desiredSlotDate: z.string().trim().min(1, "Preferred date is required"),
});

export type DemoRequest = z.infer<typeof demoRequestSchema>;

export type CreateDemoRequest = DemoRequest;

export type DemoRequestResponse = {
  ok: true;
  message: string;
};
