import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Model } from 'mongoose';
import { signInDto, signUpDto } from 'src/users/dto/Auth/AuthDto.dto';
import { User } from 'src/users/interfaces/user.interface';
// import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @Inject('USER_MODEL')
    private userModel: Model<User>,
    private jwtService: JwtService,
  ) {}

  async signup(body: signUpDto) {
    // const password = await bcrypt.hash(
    //   body.password,
    //   process.env.SALT_OR_ROUNDS,
    // );
    // const newUser = {
    //   ...body,
    //   password,
    // };
    const user = await this.userModel.create(body);
    if (!user) throw new Error('error with create user !!!');
    const token = await this.jwtService.sign(
      {
        email: user.email,
        role: user.role,
      },
      { secret: 'njdhjbnkmjbnjbhvgvjkbkbhvchjkbjvhgcgklbkjvhgc' },
    );
    return { data: user, token };
  }
  async signIn(body: signInDto) {
    const { email, password } = body;
    const user = await this.userModel.findOne({ email });
    if (!user) throw new NotFoundException();
    // const isMatch = await bcrypt.compare(password, user.password);
    // if (!isMatch) throw new Error('password is incorrect!!!');
    if (password !== body.password) throw new Error('password is incorrect!!!');
    const token = await this.jwtService.sign({
      email: user.email,
      role: user.role,
    });
    return { data: user, token };
  }
}
