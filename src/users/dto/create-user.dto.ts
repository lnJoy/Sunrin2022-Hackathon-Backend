import { ApiProperty } from '@nestjs/swagger';
import { IsString, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';

export class CreateUserDto {
  @ApiProperty()
  @Validate(IsNotExist, ['User'], {
    message: 'uidAlreadyExists',
  })
  uid: string;

  @ApiProperty()
  @IsString()
  name: string;
}
