import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  uid: string;

  @ApiProperty()
  @IsString()
  name: string;
}