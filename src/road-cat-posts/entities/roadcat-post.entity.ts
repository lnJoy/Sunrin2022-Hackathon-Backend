import { FileEntity } from "src/files/entities/file.entity";
import { LocationEntity } from "src/locations/entities/location.entity";
import { LostCatPostEntity } from "src/lost-cat-posts/entities/lostcat-post.entity";
import { User } from "src/users/entities/user.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenderEnum } from "../../lost-cat-posts/gender.enum";

@Entity({ name: 'road_cat_post' })
export class RoadCatPostEntity extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, {
    cascade: true
  })
  @JoinColumn()
  author?: User;

  // @OneToMany(() => LostCatPostEntity, (lostCats) => lostCats.id, {
  // })
  // lostCats: LostCatPostEntity;

  @Column({ type: 'text', nullable: false })
  roadPhoto?: string;

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