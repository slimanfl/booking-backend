import { Model } from 'mongoose';
import { User } from '../../interfaces/user.interface';
import { createUserDto } from '../../dto/Admin/create-user.dto';
import { updateUserDto } from '../../dto/Admin/update-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    getUserByID(id: string): Promise<User>;
    createUser(newUser: createUserDto): Promise<User>;
    updateUser(id: string, updateUser: updateUserDto): Promise<User>;
    deleteUser(id: string): Promise<import("mongoose").Document<unknown, {}, User> & User & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
