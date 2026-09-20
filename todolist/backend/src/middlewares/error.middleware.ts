import type { Response, Request, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ZodError } from 'zod';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ZodError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: "Dados inválidos",
      errors: err.issues
    })
  }
  console.log(err);
  res.status(500).json({ message: "Erro interno do servidor" });
}