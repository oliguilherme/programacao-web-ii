import { prisma } from "../lib/prisma";
import type { CreateTaskInput, TasksIdParams } from "../schemas/task.schema";

export class TaskRepository {
  static async create(data: CreateTaskInput) {
    return prisma.task.create({ data });
  }

  static async findAll() {
    return prisma.task.findMany();
  }

  static async findById(data: TasksIdParams) {
    return prisma.task.findUnique({ where: data })
  }

  static async delete(data: TasksIdParams) {
    return prisma.task.delete({ where: data });
  }
}