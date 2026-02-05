import type { Express } from "express";
import type { Server } from "http";
import { api } from "@shared/routes";
import { z } from "zod";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.post(api.demoRequests.create.path, async (req, res) => {
    try {
      const input = api.demoRequests.create.input.parse(req.body);
      await storage.createDemoRequest(input);
      return res.status(201).json({
        ok: true,
        message:
          "Thanks — we received your request. We'll contact you by email shortly.",
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        const first = err.errors[0];
        return res.status(400).json({
          message: first?.message ?? "Invalid request",
          field: first?.path?.join(".") ?? undefined,
        });
      }
      console.error(err);
      return res.status(500).json({ message: "Something went wrong" });
    }
  });

  return httpServer;
}
