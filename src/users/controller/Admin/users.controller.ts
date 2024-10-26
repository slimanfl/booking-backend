import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from '../../services/Admin/users.service';
import { Roles } from '../../guards/roles.decorator';
import { createUserDto } from 'src/users/dto/Admin/create-user.dto';
import { updateUserDto } from 'src/users/dto/Admin/update-user.dto';
import { UsersGuard } from 'src/users/guards/users.guard';

@Controller('users')
@UseGuards(UsersGuard)
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Roles(['admin', 'manager'])
  @Get()
  getAllUser() {
    return this.userService.findAll();
  }
  @Roles(['admin', 'manager'])
  @Get(':id')
  getUserByID(@Param('id') id: string) {
    return this.userService.getUserByID(id);
  }
  @Roles(['admin'])
  @Post()
  createUser(
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    newUser: createUserDto,
  ) {
    return this.userService.createUser(newUser);
  }
  @Roles(['admin', 'manager'])
  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
    body: updateUserDto,
  ) {
    return this.userService.updateUser(id, body);
  }
  @Roles(['admin'])
  @Delete(':id')
  deleteUSer(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
