import cors from 'cors';
import express from 'express';
import pino from 'pino-http';
import { movieRouter } from './routers/movies.js';
import { env } from './utils/env.js';

const PORT = Number(env('PORT'));

export const startServer = () => {
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(logger);
  app.use(cors());
  app.use(express.json());

  app.use('/movies', movieRouter);

  //   routes

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  app.use((error, req, res, next) => {
    const { status = 500, message } = error;
    res.status(status).json({
      message,
    });
  });

  app.listen(3333, () => console.log(`server is running on port:${PORT}`));
};
