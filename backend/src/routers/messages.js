import { Router } from 'express';
import {
  createMessageController,
  deleteMessageController,
  getAllMessagesController,
  upsertMessageController,
} from '../controllers/messages.js';

const messagesRouter = Router();

messagesRouter.get('/', getAllMessagesController);

messagesRouter.post('/', createMessageController);

messagesRouter.post('/:id', upsertMessageController);

messagesRouter.delete('/:id', deleteMessageController);

export default messagesRouter;
