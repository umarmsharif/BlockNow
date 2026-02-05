import { useMutation } from "@tanstack/react-query";
import { api, type DemoRequestInput } from "@shared/routes";
import { z } from "zod";

function parseWithLogging<T>(schema: z.ZodSchema<T>, data: unknown, label: string): T {
  const result = schema.safeParse(data);
  if (!result.success) {
    console.error(`[Zod] ${label} validation failed:`, result.error.format());
    throw result.error;
  }
  return result.data;
}

export function useCreateDemoRequest() {
  return useMutation({
    mutationFn: async (input: DemoRequestInput) => {
      const validated = parseWithLogging(api.demoRequests.create.input, input, "demoRequests.create.input");

      const res = await fetch(api.demoRequests.create.path, {
        method: api.demoRequests.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (res.status === 400) {
        const err = parseWithLogging(api.demoRequests.create.responses[400], await res.json(), "demoRequests.create.400");
        throw new Error(err.field ? `${err.field}: ${err.message}` : err.message);
      }

      if (res.status === 500) {
        const err = parseWithLogging(api.demoRequests.create.responses[500], await res.json(), "demoRequests.create.500");
        throw new Error(err.message);
      }

      if (!res.ok) {
        const text = (await res.text()) || res.statusText;
        throw new Error(`${res.status}: ${text}`);
      }

      return parseWithLogging(api.demoRequests.create.responses[201], await res.json(), "demoRequests.create.201");
    },
  });
}
