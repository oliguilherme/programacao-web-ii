import { StatusCodes } from "http-status-codes";
import { AppError } from "../helpers/app-error";
import { TaskRepository } from "../repositories/task.repositories";
import type { CreateTaskInput, TasksIdParams, UpdateTaskCheckbox } from "../schemas/task.schema";

export class TaskService {
  static async create(data: CreateTaskInput) {
    return await TaskRepository.create(data);
  }

  static async findAll() {
    return await TaskRepository.findAll();
  }

  static async findById(data: TasksIdParams) {
    return await TaskRepository.findById(data);
  }

  static async delete(data: TasksIdParams) {
    const task = await TaskRepository.findById(data);
    if (!task) {
      throw new AppError("Tarefa não encontrada", StatusCodes.NOT_FOUND);
    }
    return await TaskRepository.delete(data);
  }

  static async update(id: TasksIdParams, data: UpdateTaskCheckbox) {
    const task = await TaskRepository.findById(id);
    if (!task) {
      throw new AppError("Tarefa não encontrada", StatusCodes.NOT_FOUND);   
    }
    return await TaskRepository.update(id, data);
  }
}