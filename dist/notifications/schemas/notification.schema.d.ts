import * as mongoose from 'mongoose';
export declare const NotificationSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt?: NativeDate;
    message?: string;
    title?: string;
    read?: boolean;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt?: NativeDate;
    message?: string;
    title?: string;
    read?: boolean;
}>> & mongoose.FlatRecord<{
    createdAt?: NativeDate;
    message?: string;
    title?: string;
    read?: boolean;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
