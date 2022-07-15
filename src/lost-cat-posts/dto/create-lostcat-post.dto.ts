import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { GenderEnum } from '../gender.enum';
import { FileEntity } from 'src/files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';
import { LocationEntity } from 'src/locations/entities/location.entity';

export class CreateLostCatPostDto {
  @ApiProperty({ type: () => User })
  @IsOptional()
  author?: User;

  @ApiProperty({ type: 'text' })
  @IsOptional()
  photo: string;

  @ApiProperty({
    description: '특징'
  })
  @IsNotEmpty()
  distinction: string;

  @ApiProperty({
    description: '위치'
  })
  @IsOptional()
  location: LocationEntity[];

  @ApiProperty({
    description: '간단한 소개'
  })
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    description: '품종'
  })
  @IsNotEmpty()
  breeds: string;

  @ApiProperty({
    enum: GenderEnum,
    description: '성별'
  })
  @IsNotEmpty()
  gender: GenderEnum;
  
  @ApiProperty({
    description: '나이'
  })
  @IsNotEmpty()
  age: number;

  @ApiProperty({
    description: '실종 위치'
  })
  @IsNotEmpty()
  missingAddress: string;

  @ApiProperty({
    description: '실종 날짜 ex) 2022-07-15'
  })
  @IsNotEmpty()
  missingDate: string;
}