import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly id: string;
  readonly email: string;
  readonly phone: string;

  readonly password: string;
  readonly image: string;
  readonly role: string;
}
