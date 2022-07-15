import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { IPaginationOptions } from 'src/utils/types/pagination-options';
import { Repository } from 'typeorm';
import { CreateLostCatPostDto } from './dto/create-lostcat-post.dto';
import { UpdateLostCatPostDto } from './dto/update-lostcat-post.dto';
import { LostCatPostEntity } from './entities/lostcat-post.entity';
import { plainToClass } from 'class-transformer';
import { LocationEntity } from 'src/locations/entities/location.entity';

@Injectable()
export class LostCatPostsService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(LostCatPostEntity)
    private lostCatPostRepository: Repository<LostCatPostEntity>,
  ) {}

  create(createLostCatPostDto: CreateLostCatPostDto, userData: User) {
    return this.lostCatPostRepository.save(
      this.lostCatPostRepository.create({
        ...createLostCatPostDto,
        author: userData,
      }),
    );
  }

  findManyWithPagination(paginationOptions: IPaginationOptions) {
    return this.lostCatPostRepository.find({
      skip: (paginationOptions.page - 1) * paginationOptions.limit,
      take: paginationOptions.limit,
      relations: ['author', 'photos']
    });
  }

  findOne(fields: EntityCondition<LostCatPostEntity>) {
    return this.lostCatPostRepository.findOne({
      where: fields,
      relations: ['author', 'photos']
    });
  }

  update(id: number, updateLostCatPostDto: UpdateLostCatPostDto) {
    return this.lostCatPostRepository.save(
      this.lostCatPostRepository.create({
        id,
        ...updateLostCatPostDto,
      }),
    );
  }

  async softDelete(id: number): Promise<void> {
    await this.lostCatPostRepository.softDelete(id);
  }
}
