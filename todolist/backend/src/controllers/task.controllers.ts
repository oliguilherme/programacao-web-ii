import { type Request, type Response } from "express";
import { TaskService } from "../services/task.services";
import { StatusCodes } from 'http-status-codes'; 
import type { CreateTaskInput, TasksIdParams, UpdateTaskCheckbox } from "../schemas/task.schema";

type CreateTaskLocals = {
  body: CreateTaskInput
}
type DeleteTaskLocals = {
  params: TasksIdParams
};
type UpdateTaskLocals = {
  body: UpdateTaskCheckbox,
  params: TasksIdParams
}
export class TaskController {
  static async create(req: Request, res: Response<unknown, CreateTaskLocals>) {
    const task = await TaskService.create(res.locals.body);

    return res.status(StatusCodes.CREATED).json(task);
  }

  static async list(req: Request, res: Response) {
    const task = await TaskService.findAll();

    return res.status(StatusCodes.OK).json(task);
  }

  static async delete(req: Request, res: Response<unknown, DeleteTaskLocals>) {
    await TaskService.delete(res.locals.params);
    
    return res.status(StatusCodes.NO_CONTENT).send();
  }

  static async update(req: Request, res: Response<unknown, UpdateTaskLocals>) {
    const task = await TaskService.update(res.locals.params, res.locals.body);
    
    return res.status(StatusCodes.OK).json(task);
  }
}