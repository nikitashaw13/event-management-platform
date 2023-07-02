// index.ts
const express = require('express');
const bodyParser = require('body-parser');
import eventRoutes from './routes/eventRoutes';
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(bodyParser.json());

 app.get('/', (_req: Request, res: Response) => {
    return res.send('Express Typescript on Vercel');
  })

  app.get('/ping', (_req: Request, res: Response) => {
    return res.send('pong 🏓');
  })


app.use('/api', eventRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
