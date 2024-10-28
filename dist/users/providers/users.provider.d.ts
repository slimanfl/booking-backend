import { Connection } from 'mongoose';
export declare const usersProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    }> & {
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    }>> & import("mongoose").FlatRecord<{
        name?: string;
        email?: string;
        phone?: string;
        password?: string;
        image?: string;
        role?: string;
        id?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>>;
    inject: string[];
}[];
