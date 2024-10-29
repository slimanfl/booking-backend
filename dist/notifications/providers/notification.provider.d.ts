import { Connection } from 'mongoose';
export declare const notificationProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    }> & {
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    }>> & import("mongoose").FlatRecord<{
        createdAt?: NativeDate;
        message?: string;
        title?: string;
        read?: boolean;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>>;
    inject: string[];
}[];
