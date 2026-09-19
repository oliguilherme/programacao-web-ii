import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";

export class TaskController {
  static async create(req: Request, res: Response) {
    const { title } = req.body;
    const task = await TaskService.create(title);
    res.send(201).json(task);
  }
}