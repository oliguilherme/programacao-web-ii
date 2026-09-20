import type { Request, Response, NextFunction  } from "express";
import { ZodType } from "zod";

type RequestPart = "body" | "params" | "query";

export function validate(schema: ZodType, part: RequestPart) {
  return (req: Request, res: Response, next: NextFunction) => {
    const data = schema.parse(req[part]);

    if (part === "body") {
      req.body = data;
    }

    if (part === "params") {
      Object.assign(req.params, data);
    }
    next();
  }
}