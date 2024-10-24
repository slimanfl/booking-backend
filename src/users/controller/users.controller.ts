import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { createUserDto } from '../dto/create-user.dto';
import { updateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Get(':id')
  getUserByID(@Param('id') id: string) {
    return this.userService.getUserByID(id);
  }
  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    newUser: createUserDto,
  ) {
    return this.userService.createUser(newUser);
  }
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: updateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }
}
