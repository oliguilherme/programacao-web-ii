import { prisma } from "../lib/prisma";

export class TaskRepository {
  async create(title: string) {
    return prisma.task.create({ data: {title } });
  }
}