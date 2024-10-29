import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { signInDto, signUpDto } from 'src/users/dto/Auth/AuthDto.dto';
import { User } from 'src/users/interfaces/user.interface';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signup(body: signUpDto): Promise<{
        data: import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
        token: string;
    }>;
    signIn(body: signInDto): Promise<{
        data: import("mongoose").Document<unknown, {}, User> & User & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
        token: string;
    }>;
}
