import * as mongoose from 'mongoose';

export const EventSchema = new mongoose.Schema({
  count: Number,

  meals: String,

  section: String,

  date: Date,

  userId: String,
});
