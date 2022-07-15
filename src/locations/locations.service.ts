import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { LocationEntity } from './entities/location.entity';

@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(LocationEntity)
    private locationsRepository: Repository<LocationEntity>,
  ) {}

  create(createLocationDto: CreateLocationDto) {
    return this.locationsRepository.save(
      this.locationsRepository.create(createLocationDto),
    );
  }

  findOne(fields: EntityCondition<LocationEntity>) {
    return this.locationsRepository.findOne({
      where: fields,
    });
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.locationsRepository.save(
      this.locationsRepository.create({
        id,
        ...updateLocationDto,
      }),
    );
  }
}
