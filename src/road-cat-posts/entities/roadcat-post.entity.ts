import { FileEntity } from "src/files/entities/file.entity";
import { LocationEntity } from "src/locations/entities/location.entity";
import { User } from "src/users/entities/user.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenderEnum } from "../../lost-cat-posts/gender.enum";

@Entity()
export class RoadCatPostEntity extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, {
    cascade: true
  })
  @JoinColumn()
  author: User;

  @ManyToMany(() => FileEntity, (photos) => photos.id, {
    cascade: true
  })
  @JoinTable({
    joinColumns:[{name: "lost_cat_id"}],
    inverseJoinColumns:[{name: "photo_id"}],
  })
  pictures: FileEntity[];

  @OneToOne(() => LocationEntity, {
    cascade: true
  })
  @JoinColumn()
  location: LocationEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}