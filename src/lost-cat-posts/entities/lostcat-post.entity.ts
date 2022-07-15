import { FileEntity } from "src/files/entities/file.entity";
import { User } from "src/users/entities/user.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { GenderEnum } from "../gender.enum";

@Entity()
export class LostCatPostEntity extends EntityHelper {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
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