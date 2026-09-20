import express from 'express';
import { TaskController } from '../controllers/task.controllers';
import { validate } from '../middlewares/validate.middleware';
import { createTaskSchema } from '../schemas/task.schema';

const router = express.Router();

router.get('/', TaskController.list);
router.post('/', validate(createTaskSchema), TaskController.create);


export default router;