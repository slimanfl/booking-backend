import { Connection } from 'mongoose';
export declare const eventsProviders: {
    provide: string;
    useFactory: (connection: Connection) => import("mongoose").Model<{
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    }, {}, {}, {}, import("mongoose").Document<unknown, {}, {
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    }> & {
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }, import("mongoose").Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    }, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    }>> & import("mongoose").FlatRecord<{
        date?: NativeDate;
        count?: number;
        meals?: string;
        section?: string;
        userId?: string;
    }> & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v?: number;
    }>>;
    inject: string[];
}[];
