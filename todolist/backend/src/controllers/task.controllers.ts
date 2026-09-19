import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";
import { StatusCodes } from 'http-status-codes'; 


export class TaskController {
  static async create(req: Request, res: Response) {
    const { title } = req.body;
    const task = await TaskService.create(title);

    return res.status(StatusCodes.CREATED).json(task);
  }
}