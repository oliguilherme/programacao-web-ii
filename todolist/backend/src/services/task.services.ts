import { TaskRepository } from "../repositories/task.repositories";

export class TaskService {
  static async create(title: string) {
    const cleanedTitle = title.trim();

    if (cleanedTitle === "") {
      throw new Error("O nome da tarefa não pode ser nulo!");
    }
  
    return await TaskRepository.create(title);
  }
}