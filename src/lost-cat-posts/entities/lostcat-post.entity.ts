import { FileEntity } from "src/files/entities/file.entity";
import { RoadCatPostEntity } from "src/road-cat-posts/entities/roadcat-post.entity";
import { User } from "src/users/entities/user.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenderEnum } from "../gender.enum";

@Entity({ name: 'lost_cat_post' })
export class LostCatPostEntity extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  author: User;

  // @ManyToMany(() => RoadCatPostEntity, (roadCats) => roadCats.id, {
  //   cascade: true
  // })
  // @JoinTable({
  //   joinColumns:[{name: "lostCat_id"}],
  //   inverseJoinColumns:[{name: "roadCat_id"}],
  // })
  // roadCat: RoadCatPostEntity;

  // @ManyToOne(() => RoadCatPostEntity, (roadCats) => roadCats.id, {
  //   eager: true,
  //   cascade: true
  // })
  // roadCats: RoadCatPostEntity[];

  @Column({ type: 'text', nullable: false })
  lostPhoto?: string;

  @Column({ nullable: true }) // 특징
  distinction: string;

  @Column({ type: 'text', nullable: true })
  contents: string;

  @Column({ nullable: true })
  breeds: string;

  @Column({ nullable: true })
  gender: GenderEnum;

  @Column({ nullable: true })
  age: number;

  @Column({ nullable: true })
  missingAddress: string;

  @Column({ nullable: true })
  missingDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}