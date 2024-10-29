import { Document } from 'mongoose';
export interface Notification extends Document {
    readonly title: string;
    readonly message: string;
    readonly read: boolean;
    readonly createdAt: Date;
}
