import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";
import { createTaskSchema } from "../schemas/task.schema";
import { StatusCodes } from 'http-status-codes'; 
import { AppError } from "../helpers/app-error";


export class TaskController {
  static async create(req: Request, res: Response) {
    const data = createTaskSchema.parse(req.body);
    const task = await TaskService.create(data);

    return res.status(StatusCodes.CREATED).json(task);
  }
}