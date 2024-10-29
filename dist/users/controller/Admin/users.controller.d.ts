import { UsersService } from '../../services/Admin/users.service';
import { createUserDto } from 'src/users/dto/Admin/create-user.dto';
import { updateUserDto } from 'src/users/dto/Admin/update-user.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getAllUser(): Promise<import("../../interfaces/user.interface").User[]>;
    getUserByID(id: string): Promise<import("../../interfaces/user.interface").User>;
    createUser(newUser: createUserDto): Promise<import("../../interfaces/user.interface").User>;
    updateUser(id: string, body: updateUserDto): Promise<import("../../interfaces/user.interface").User>;
    deleteUSer(id: string): Promise<import("mongoose").Document<unknown, {}, import("../../interfaces/user.interface").User> & import("../../interfaces/user.interface").User & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
