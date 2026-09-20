import express from 'express';
import { TaskController } from '../controllers/task.controllers';
import { validate } from '../middlewares/validate.middleware';
import { createTaskSchema, taskIdParamsSchema } from '../schemas/task.schema';

const router = express.Router();

router.get('/', TaskController.list);
router.post('/', validate(createTaskSchema, "body"), TaskController.create);
router.delete('/:id', validate(taskIdParamsSchema, "params"), TaskController.delete);


export default router;