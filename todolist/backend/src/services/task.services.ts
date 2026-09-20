import { TaskRepository } from "../repositories/task.repositories";
import { type CreateTaskInput } from "../schemas/task.schema";

export class TaskService {
  static async create(data: CreateTaskInput) {
    return await TaskRepository.create(data);
  }

  static async findAll() {
    return await TaskRepository.findAll();
  }
}