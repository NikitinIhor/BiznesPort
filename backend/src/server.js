import cors from 'cors';
import express from 'express';
import pino from 'pino-http';
import env from './utils/env.js';

const startServer = () => {
  const app = express();

  const loger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(loger);
  app.use(cors());
  app.use(express.json());

  app.use((req, res) => {
    res.status(404).json({
      message: `${req.url} not found`,
    });
  });

  app.use((error, req, res, next) => {
    res.status(500).json({
      message: error.message,
    });
  });

  const PORT = Number(env('PORT', 3000));

  app.listen(PORT, () => console.log(`Servers is running on port ${PORT}`));
};

export default startServer;
