import cors from 'cors';
import express from 'express';
import pino from 'pino-http';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import messagesRouter from './routers/messages.js';
import ctrlWrapper from './utils/ctrlWrapper.js';
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

  app.use('/messages', ctrlWrapper(messagesRouter));

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = Number(env('PORT', 3000));

  app.listen(PORT, () => console.log(`Servers is running on port ${PORT}`));
};

export default startServer;
