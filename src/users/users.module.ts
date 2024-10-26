import { Module } from '@nestjs/common';
import { UsersController } from './controller/Admin/users.controller';
import { UsersService } from './services/Admin/users.service';
import { usersProviders } from './providers/users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { JwtModule } from '@nestjs/jwt';
import {
  AuthSignInController,
  AuthSignUpController,
} from './controller/Auth/ResetPassword/Auth.controller';
import { AuthService } from './services/Auth/Auth.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot(),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: {
        expiresIn: '5m',
      },
    }),
  ],
  controllers: [UsersController, AuthSignInController, AuthSignUpController],
  providers: [...usersProviders, UsersService, AuthService],
})
export class UsersModule {}
