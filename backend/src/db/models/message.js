import { Schema, model } from 'mongoose';

const messageSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const MessageCollection = new model('message', messageSchema);

export default MessageCollection;
