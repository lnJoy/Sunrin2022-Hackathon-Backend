import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { RoleEnum } from 'src/roles/roles.enum';
import { StatusEnum } from 'src/statuses/statuses.enum';
import { plainToClass } from 'class-transformer';
import { RoadCatPostEntity } from 'src/road-cat-posts/entities/roadcat-post.entity';

export default class CreateRoadCat implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
    .createQueryBuilder()
    .insert()
    .into(RoadCatPostEntity)
    .values([
      plainToClass(RoadCatPostEntity, {
        roadPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/road_cats%2F56.jpg?alt=media&token=f2f8457a-bf4d-4b66-981c-35e0e62d0e0f',
        location: {
          lat: 126.971307,
          lng: 37.5331046,
        }
      }),
      plainToClass(RoadCatPostEntity, {
        roadPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/road_cats%2F473hes.jpg?alt=media&token=90416ec7-2a47-4c54-8f3d-e21e83de0f72',
        location: {
          lat: 126.9713075,
          lng: 37.5331046,
        }
      }),
      plainToClass(RoadCatPostEntity, {
        roadPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/road_cats%2F56.jpg?alt=media&token=f2f8457a-bf4d-4b66-981c-35e0e62d0e0f',
        location: {
          lat: 126.9713075,
          lng: 37.5331046,
        }
      }),
    ])
    .execute();
  }
}