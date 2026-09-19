import express from 'express';
import { TaskController } from '../controllers/task.controllers';

const router = express.Router();

router.post('/', TaskController.create);

export default router;