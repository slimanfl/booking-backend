import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    image?: string;
    role?: string;
    id?: string;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    image?: string;
    role?: string;
    id?: string;
}>> & mongoose.FlatRecord<{
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    image?: string;
    role?: string;
    id?: string;
}> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v?: number;
}>;
