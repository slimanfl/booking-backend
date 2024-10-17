import { Document } from 'mongoose';

export interface User extends Document {
  readonly name: string;
  readonly age: number;
  readonly id: number;
  readonly email: string;
  readonly phone: string;
  readonly gender: string;
  readonly password: string;
  readonly image: string;
  readonly firstName: string;
  readonly lastName: string;
}
