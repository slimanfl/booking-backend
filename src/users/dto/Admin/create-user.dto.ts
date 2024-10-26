import {
  IsEmail,
  IsEmpty,
  IsPhoneNumber,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class createUserDto {
  @IsString({ message: 'name must be string' })
  name: string;
  @IsString({ message: 'email must be string' })
  @IsEmail({}, { message: 'email is not valid!!' })
  email: string;
  @IsString({ message: 'phone must be string' })
  @IsPhoneNumber('SY', { message: 'phone is valid' })
  phone: string;
  @IsString({ message: 'password must be string' })
  @MinLength(8, { message: 'password must have more than 8 charcter' })
  @MaxLength(20, { message: 'password must have les than 20 charcter' })
  password: string;
  @IsString({ message: 'image must be string' })
  image: string;
  @IsString({ message: 'role must be string' })
  role: string;
}
