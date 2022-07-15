import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { InjectRepository } from '@nestjs/typeorm';
import { LocationEntity } from 'src/locations/entities/location.entity';
import { base64ToImg } from 'src/utils/base64-to-img';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Repository } from 'typeorm';
import { CreateRoadCatPostDto } from './dto/create-roadcat-post.dto';
import { UpdateRoadCatPostDto } from './dto/update-roadcat-post.dto';
import { RoadCatPostEntity } from './entities/roadcat-post.entity';
import { plainToClass } from 'class-transformer';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class RoadCatPostsService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(RoadCatPostEntity)
    private roadCatPostRepository: Repository<RoadCatPostEntity>,
  ) {}

  create(createRoadCatPostDto: CreateRoadCatPostDto, userData: User) {
    // createRoadCatPostDto.photo = base64ToImg(createRoadCatPostDto.photo);
    return this.roadCatPostRepository.save(
      this.roadCatPostRepository.create({
        ...createRoadCatPostDto,
        author: userData,
        location: plainToClass(LocationEntity, createRoadCatPostDto.location),
      }),
    );
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.roadCatPostRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      relations: ['author', 'location'],
    });
  }

  findOne(fields: EntityCondition<RoadCatPostEntity>) {
    return this.roadCatPostRepository.findOne({
      where: fields,
      relations: ['author', 'location'],
    });
  }

  update(id: number, updateRoadCatPostDto: UpdateRoadCatPostDto) {
    return this.roadCatPostRepository.save(
      this.roadCatPostRepository.create({
        id,
        ...updateRoadCatPostDto,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.roadCatPostRepository.softDelete(id);
  }
}
