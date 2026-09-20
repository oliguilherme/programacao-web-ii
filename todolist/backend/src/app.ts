import express, { type Express, type Request, type Response } from 'express';
import taskRouter from './routes/task.routes';
import { errorMiddleware } from './middlewares/error.middleware';
import cors from 'cors';

const app: Express = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World');
});

app.use('/task', taskRouter)
app.use(errorMiddleware);

export default app;