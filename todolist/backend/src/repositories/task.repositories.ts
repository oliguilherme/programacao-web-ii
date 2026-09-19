import { prisma } from "../lib/prisma";

export class TaskRepository {
  static async create(title: string) {
    return prisma.task.create({ data: {title } });
  }
}