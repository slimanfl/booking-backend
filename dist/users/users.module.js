"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const users_controller_1 = require("./controller/Admin/users.controller");
const users_service_1 = require("./services/Admin/users.service");
const users_provider_1 = require("./providers/users.provider");
const database_module_1 = require("../database/database.module");
const jwt_1 = require("@nestjs/jwt");
const Auth_controller_1 = require("./controller/Auth/ResetPassword/Auth.controller");
const Auth_service_1 = require("./services/Auth/Auth.service");
const config_1 = require("@nestjs/config");
let UsersModule = class UsersModule {
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            database_module_1.DatabaseModule,
            config_1.ConfigModule.forRoot(),
            jwt_1.JwtModule.register({
                global: true,
                secret: 'njdhjbnkmjbnjbhvgvjkbkbhvchjkbjvhgcgklbkjvhgc',
                signOptions: {
                    expiresIn: '8d',
                },
            }),
        ],
        controllers: [users_controller_1.UsersController, Auth_controller_1.AuthSignInController, Auth_controller_1.AuthSignUpController],
        providers: [...users_provider_1.usersProviders, users_service_1.UsersService, Auth_service_1.AuthService],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map