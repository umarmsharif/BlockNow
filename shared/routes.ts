import { z } from "zod";
import { demoRequestSchema } from "./schema";

export const errorSchemas = {
  validation: z.object({
    message: z.string(),
    field: z.string().optional(),
  }),
  internal: z.object({
    message: z.string(),
  }),
} as const;

export const api = {
  demoRequests: {
    create: {
      method: "POST" as const,
      path: "/api/demo-requests",
      input: demoRequestSchema,
      responses: {
        201: z.object({
          ok: z.literal(true),
          message: z.string(),
        }),
        400: errorSchemas.validation,
        500: errorSchemas.internal,
      },
    },
  },
} as const;

export function buildUrl(
  path: string,
  params?: Record<string, string | number>
): string {
  let url = path;
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      url = url.replace(`:${key}`, String(value));
    }
  }
  return url;
}

export type DemoRequestInput = z.infer<typeof api.demoRequests.create.input>;
export type DemoRequestCreateResponse = z.infer<
  (typeof api.demoRequests.create.responses)[201]
>;
export type ValidationError = z.infer<typeof errorSchemas.validation>;
export type InternalError = z.infer<typeof errorSchemas.internal>;
