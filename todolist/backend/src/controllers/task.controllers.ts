import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";
import { StatusCodes } from 'http-status-codes'; 

export class TaskController {
  static async create(req: Request, res: Response) {
    const task = await TaskService.create(req.body);

    return res.status(StatusCodes.CREATED).json(task);
  }

  static async list(req: Request, res: Response) {
    const task = await TaskService.findAll();

    return res.status(StatusCodes.OK).json(task);
  }
}