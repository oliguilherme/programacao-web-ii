import { prisma } from "../lib/prisma";
import { type CreateTaskInput } from "../schemas/task.schema";

export class TaskRepository {
  static async create(data: CreateTaskInput) {
    return prisma.task.create({ data });
  }

  static async findAll() {
    return prisma.task.findMany();
  }
}