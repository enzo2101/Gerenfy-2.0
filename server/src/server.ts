import express from 'express'
import { Router, Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config()

const PORT = 5000;

const app = express();

const route = Router()

app.use(express.json())

app.use(route);

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'hello world with Typescript' })
});



app.listen(PORT, () => `server running ${PORT}`);