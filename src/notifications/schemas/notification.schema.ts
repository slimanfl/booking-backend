import * as mongoose from 'mongoose';

export const NotificationSchema = new mongoose.Schema({
  title: String,

  message: String,

  read: Boolean,

  createdAt: Date,
});
