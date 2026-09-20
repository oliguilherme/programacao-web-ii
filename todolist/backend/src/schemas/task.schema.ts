import * as z from 'zod';

export const createTaskSchema = z.object({
  title: z.string().trim().min(1, "O titulo nao pode estar vazio"),
})

export type CreateTaskInput = z.infer<typeof createTaskSchema>;