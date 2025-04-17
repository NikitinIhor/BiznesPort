import MessageCollection from '../db/models/message.js';

export const getAllMessages = () => MessageCollection.find();

export const createMessage = payload => MessageCollection.create(payload);

export const upsertMessage = (filter, data, options = {}) =>
  MessageCollection.findOneAndUpdate(filter, data, {
    new: true,
    upsert: true,
    ...options,
  });

export const deleteMessage = filter =>
  MessageCollection.findOneAndDelete(filter);
