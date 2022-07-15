import { ApiProperty } from '@nestjs/swagger';
import { IsString, Validate, Validator } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class CreateUserDto {
  @ApiProperty()
  @Validate(IsNotExist, ['User', 'uid'], {
    message: 'uidAlreadyExists',
  })
  @IsString()
  uid: string;
}