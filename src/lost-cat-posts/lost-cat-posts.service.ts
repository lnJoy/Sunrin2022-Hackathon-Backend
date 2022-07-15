import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
import { RoadCatPostsService } from 'src/road-cat-posts/road-cat-posts.service';
import { CreateRoadCatPostDto } from 'src/road-cat-posts/dto/create-roadcat-post.dto';
import { UpdateRoadCatPostDto } from 'src/road-cat-posts/dto/update-roadcat-post.dto';
import { RoadCatPostEntity } from 'src/road-cat-posts/entities/roadcat-post.entity';

@Injectable()
export class LostCatPostsService {
  constructor(
    private readonly configService: ConfigService,
    // private readonly roadCatPostsService: RoadCatPostsService,
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
      relations: ['author', 'roadCats']
    });
  }

  findOne(fields: EntityCondition<LostCatPostEntity>) {
    return this.lostCatPostRepository.findOne({
      where: fields,
      relations: ['author', 'roadCats']
    });
  }

  async findByRandom() {
    return this.lostCatPostRepository.createQueryBuilder("lostCatPost")
      .select("id")
      .orderBy("RANDOM()")
      .limit(1)
      .getOne();
  }

  async update(uid: string, updateProfileDto: UpdateLostCatPostDto) {
    // return this.lostCatPostRepository.save(
    //   this.lostCatPostRepository.create({
    //     uid,
    //     ...updateProfileDto,
    //   }),
    // );
  }

  async updateByRoadCat(id: number, newRoadCat: RoadCatPostEntity) {
    return this.lostCatPostRepository.save(
      this.lostCatPostRepository.create({
        id,
        roadCats: [newRoadCat]}
      ));
  }

  async softDelete(id: number): Promise<void> {
    await this.lostCatPostRepository.softDelete(id);
  }
}
