import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsOptional, IsString, Validate } from 'class-validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiProperty()
  @IsOptional()
  @Validate(IsNotExist, ['User'], {
    message: 'uidAlreadyExists',
  })
  uid: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
