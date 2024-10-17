import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
  id: Number,
  email: String,
  phone: String,
  gender: String,
  password: String,
  image: String,
  firstName: String,
  lastName: String,
});
