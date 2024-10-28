import { PartialType } from '@nestjs/mapped-types';
import { IsBoolean, IsDate, IsNotEmpty, IsString } from 'class-validator';

export class createNotificationDto {
  @IsString({ message: 'title must be string' })
  @IsNotEmpty({ message: 'title must be require' })
  title: string;
  @IsString({ message: 'message must be string' })
  @IsNotEmpty({ message: 'message must be require' })
  message: String;
  @IsBoolean({ message: 'read must be boolean' })
  @IsNotEmpty({ message: 'read must be require' })
  read: Boolean;
  @IsDate({ message: 'createdAt must be Date' })
  @IsNotEmpty({ message: 'createdAt must be require' })
  createdAt: Date;
}

export class updateNotificationDto extends PartialType(createNotificationDto) {}
