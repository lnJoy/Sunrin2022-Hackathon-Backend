import { ApiProperty } from '@nestjs/swagger';
import { IsString, Validate, Validator } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { User } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty()
  @Validate(IsNotExist, ['User', 'uid'], {
    message: 'uidAlreadyExists',
  })
  @IsString()
  uid: string;
}