import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";
import { StatusCodes } from 'http-status-codes'; 
import type { TasksIdParams } from "../schemas/task.schema";

export class TaskController {
  static async create(req: Request, res: Response) {
    const task = await TaskService.create(req.body);

    return res.status(StatusCodes.CREATED).json(task);
  }

  static async list(req: Request, res: Response) {
    const task = await TaskService.findAll();

    return res.status(StatusCodes.OK).json(task);
  }

  static async delete(req: Request, res: Response) {
    const data = req.params as unknown as TasksIdParams;
    const task = await TaskService.delete(data);
    
    return res.status(StatusCodes.NO_CONTENT).json(task);
  }
}