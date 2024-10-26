import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  phone: String,
  password: String,
  image: String,
  role : String
});
