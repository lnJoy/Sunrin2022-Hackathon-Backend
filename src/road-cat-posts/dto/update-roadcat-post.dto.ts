import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, Validate } from 'class-validator';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { GenderEnum } from '../../lost-cat-posts/gender.enum';
import { FileEntity } from 'src/files/entities/file.entity';
import { User } from 'src/users/entities/user.entity';
import { LocationEntity } from 'src/locations/entities/location.entity';
import { CreateRoadCatPostDto } from './create-roadcat-post.dto';

export class UpdateRoadCatPostDto extends PartialType(CreateRoadCatPostDto) {
  @ApiProperty({ type: () => User })
  @IsOptional()
  author?: User;

  @ApiProperty({ type: () => FileEntity })
  @IsOptional()
  photos?: FileEntity[];

  @ApiProperty({
    type: () => LocationEntity,
    description: '특징',
  })
  @IsOptional()
  location?: LocationEntity;
}