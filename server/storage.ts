import type { CreateDemoRequest } from "@shared/schema";

export interface IStorage {
  createDemoRequest(request: CreateDemoRequest): Promise<void>;
}

export class MemStorage implements IStorage {
  async createDemoRequest(_request: CreateDemoRequest): Promise<void> {
    return;
  }
}

export const storage = new MemStorage();
