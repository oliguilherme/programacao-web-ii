import type { Response, Request, NextFunction } from 'express';

export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(err);
  res.status(500).json({ message: "Erro interno do servidor" });
}