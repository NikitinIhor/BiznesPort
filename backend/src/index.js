import { initMongoDB } from './db/initMongoDB.js';
import { startServer } from './server.js';

const bootsprap = async () => {
  await initMongoDB();
  startServer();
};

bootsprap();
