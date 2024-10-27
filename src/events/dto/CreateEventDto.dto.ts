import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class createEventDto {
  @IsNumber({}, { message: 'count must be number' })
  @IsNotEmpty({ message: 'count must be require' })
  count: number;
  @IsString({ message: 'meals must be string' })
  @IsNotEmpty({ message: 'meals must be require' })
  meals: string;
  @IsString({ message: 'section must be string' })
  @IsNotEmpty({ message: 'section must be require ' })
  section: string;
  // @IsDate({ message: 'image must be date' })
  @IsNotEmpty({ message: 'date must be require' })
  date: Date;
  @IsString({ message: 'id must be string' })
  @IsNotEmpty({ message: 'id user must be require' })
  userId: string;
}
