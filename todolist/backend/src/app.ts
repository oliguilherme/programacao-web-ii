import express, { type Express, type Request, type Response } from 'express';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Express = express();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World');
});

app.use(errorMiddleware);

export default app;