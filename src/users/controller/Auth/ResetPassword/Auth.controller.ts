import {
  Body,
  Controller,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { signInDto, signUpDto } from 'src/users/dto/Auth/AuthDto.dto';
import { Roles } from 'src/users/guards/roles.decorator';
import { UsersGuard } from 'src/users/guards/users.guard';
import { UsersService } from 'src/users/services/Admin/users.service';
import { AuthService } from 'src/users/services/Auth/Auth.service';

@Controller('sign-in')
// @UseGuards(UsersGuard)
export class AuthSignInController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  // @Roles(['admin', 'manager', 'user'])
  signIn(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: signInDto,
  ) {
    return this.authService.signIn(body);
  }
}
@Controller('sign-up')
// @UseGuards(UsersGuard)
export class AuthSignUpController {
  constructor(private readonly authService: AuthService) {}
  @Post()
  // @Roles(['admin', 'manager'])
  signup(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: signUpDto,
  ) {
    return this.authService.signup(body);
  }
}
