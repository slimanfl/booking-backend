import { Document } from 'mongoose';
export interface Event extends Document {
    readonly count: number;
    readonly meals: string;
    readonly section: string;
    readonly date: Date;
    readonly userId: string;
}
