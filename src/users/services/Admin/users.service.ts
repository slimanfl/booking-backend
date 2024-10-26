import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from '../../interfaces/user.interface';
import { createUserDto } from '../../dto/Admin/create-user.dto';
import { updateUserDto } from '../../dto/Admin/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
  ) {}
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async getUserByID(id: string): Promise<User> {
    const user = await this.userModel
      .findById(id)
      .select('-_id name email phone');
    if (!user) throw new NotFoundException();
    return user;
  }
  async createUser(newUser: createUserDto): Promise<User> {
    const createUser = await this.userModel.create(newUser);
    if (!createUser) throw new NotFoundException();
    return createUser;
  }
  async updateUser(id: string, updateUser: updateUserDto): Promise<User> {
    const user = await this.userModel.findByIdAndUpdate(id, updateUser, {
      new: true,
    });
    if (!user) throw new NotFoundException();
    return user;
  }
  async deleteUser(id: string) {
    const user = await this.userModel.findByIdAndDelete(id);
    if (!user) throw new NotFoundException();
    return user;
  }
}
