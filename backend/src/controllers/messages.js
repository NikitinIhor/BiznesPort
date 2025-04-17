import {
  createMessage,
  deleteMessage,
  getAllMessages,
  upsertMessage,
} from '../services/mesasges.js';

export const getAllMessagesController = async (req, res) => {
  const data = await getAllMessages();

  res.json({
    status: 200,
    message: `Successfully found all messages`,
    data,
  });
};

export const createMessageController = async (req, res) => {
  const data = await createMessage(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully added message`,
    data,
  });
};

export const upsertMessageController = async (req, res) => {
  const { id } = req.params;
  const data = await upsertMessage({ _id: id }, req.body);

  res.status(200).json({
    status: 200,
    message: `Successfully upserted message`,
    data,
  });
};

export const deleteMessageController = async (req, res) => {
  const { id } = req.params;
  const data = await deleteMessage({ _id: id });

  if (!data) {
    res.status(404).json({
      message: `Message with id: ${id} not found`,
    });
  }

  res.status(204).json({
    status: 204,
    message: `Successfully deleted message`,
  });
};
