import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { RoleEnum } from 'src/roles/roles.enum';
import { StatusEnum } from 'src/statuses/statuses.enum';
import { plainToClass } from 'class-transformer';
import { LostCatPostEntity } from 'src/lost-cat-posts/entities/lostcat-post.entity';

export default class CreateLostCat implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
    .createQueryBuilder()
    .insert()
    .into(LostCatPostEntity)
    .values([
      plainToClass(LostCatPostEntity, {
        lostPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/lost_cats%2F125.jpg?alt=media&token=f6da5fff-cdc9-4a4d-a289-55134857cc45',
        distinction: "온순함",
        contents: "내용1",
        breeds: "페르시안",
        gender: 1,
        age: 4,
        missingAddress: "서울특별시 용산구",
        missingDate: "2022-07-16"
      }),
      plainToClass(LostCatPostEntity, {
        lostPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/lost_cats%2F5252.jpg?alt=media&token=ec648d1b-10fa-4651-a610-f7615e36a6b0',
        distinction: "사나움",
        contents: "내용2",
        breeds: "메인쿤",
        gender: 2,
        age: 5,
        missingAddress: "서울특별시 용산구",
        missingDate: "2022-07-16"
      }),
      plainToClass(LostCatPostEntity, {
        lostPhoto: 'https://firebasestorage.googleapis.com/v0/b/test-auth-f8b60.appspot.com/o/lost_cats%2F623636.jpg?alt=media&token=1598b65c-ea81-42d6-8f51-b8ec4441a15c',
        distinction: "졸림",
        contents: "내용3",
        breeds: "벵갈",
        gender: 1,
        age: 6,
        missingAddress: "서울특별시 용산구",
        missingDate: "2022-07-16"
      }),
    ])
    .execute();
  }
}