import * as z from 'zod';

export const createTaskSchema = z.object({
  title: z.string().trim().min(1, "O titulo nao pode estar vazio"),
});

export const taskIdParamsSchema = z.object({
  id: z.coerce.number().int().positive()
})

export type CreateTaskInput = z.infer<typeof createTaskSchema>;
export type TasksIdParams = z.infer<typeof taskIdParamsSchema>;