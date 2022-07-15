import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { Transform } from 'class-transformer';
import { GenderEnum } from '../gender.enum';
import { FileEntity } from 'src/files/entities/file.entity';
import { CreateLostCatPostDto } from './create-lostcat-post.dto';
import { User } from 'src/users/entities/user.entity';

export class UpdateLostCatPostDto extends PartialType(CreateLostCatPostDto) {
  @ApiProperty({ type: () => User })
  @IsOptional()
  author?: User;

  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  photos?: FileEntity[];

  @ApiProperty({
    description: '특징'
  })
  @IsOptional()
  distinction: string;

  @ApiProperty({
    description: '간단한 소개'
  })
  @IsOptional()
  contents: string;

  @ApiProperty({
    description: '품종'
  })
  @IsOptional()
  breeds: string;

  @ApiProperty({
    enum: GenderEnum,
    description: '성별'
  })
  @IsOptional()
  gender: GenderEnum;
  
  @ApiProperty({
    description: '나이'
  })
  @IsOptional()
  age: number;

  @ApiProperty({
    description: '실종 위치'
  })
  @IsOptional()
  missingAddress: string;

  @ApiProperty({
    description: '실종 날짜 ex) 2022-07-15'
  })
  @IsOptional()
  missingDate: string;
}