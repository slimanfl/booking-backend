import { signInDto, signUpDto } from 'src/users/dto/Auth/AuthDto.dto';
import { AuthService } from 'src/users/services/Auth/Auth.service';
export declare class AuthSignInController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(body: signInDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("../../../interfaces/user.interface").User> & import("../../../interfaces/user.interface").User & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
        token: string;
    }>;
}
export declare class AuthSignUpController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: signUpDto): Promise<{
        data: import("mongoose").Document<unknown, {}, import("../../../interfaces/user.interface").User> & import("../../../interfaces/user.interface").User & Required<{
            _id: unknown;
        }> & {
            __v?: number;
        };
        token: string;
    }>;
}
