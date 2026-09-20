import { prisma } from "../lib/prisma";
import type { CreateTaskInput, TasksIdParams, UpdateTaskCheckbox } from "../schemas/task.schema";

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

  static async update(id: TasksIdParams, data: UpdateTaskCheckbox) {
    return prisma.task.update({
      where: id,
      data
    });
  }
}