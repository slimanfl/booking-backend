import * as mongoose from 'mongoose';
export declare const EventSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    date?: NativeDate;
    count?: number;
    meals?: string;
    section?: string;
    userId?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    date?: NativeDate;
    count?: number;
    meals?: string;
    section?: string;
    userId?: string;
}>> & mongoose.FlatRecord<{
    date?: NativeDate;
    count?: number;
    meals?: string;
    section?: string;
    userId?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
