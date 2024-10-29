"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("mongoose");
let AuthService = class AuthService {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async signup(body) {
        const email = body.email;
        const temp = await this.userModel.findOne({ email });
        if (temp)
            throw new Error('Email found please enter other email and try again !!! ');
        const user = await this.userModel.create(body);
        if (!user)
            throw new Error('error with create user !!!');
        const token = await this.jwtService.sign({
            email: user.email,
            role: user.role,
        }, { secret: 'njdhjbnkmjbnjbhvgvjkbkbhvchjkbjvhgcgklbkjvhgc' });
        return { data: user, token };
    }
    async signIn(body) {
        const { email, password } = body;
        const user = await this.userModel.findOne({ email });
        if (!user)
            throw new common_1.NotFoundException();
        if (password !== body.password)
            throw new Error('password is incorrect!!!');
        const token = await this.jwtService.sign({
            email: user.email,
            role: user.role,
        });
        return { data: user, token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('USER_MODEL')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=Auth.service.js.map