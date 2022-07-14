import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { FileTypeEnum } from '../file-type.enum';

export class FileTypeDto {
  @ApiProperty()
  @IsEnum(FileTypeEnum)
  type: FileTypeEnum;
}
