import { Transform } from "class-transformer";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./user.model";
@Entity()
export class Video {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "integer",
  })
  _id!: number;

  @Column({ nullable: false, unique: true })
  title!: string;

  @Column({ nullable: false, unique: true })
  description!: string;

  @Column({ nullable: false })
  video!: string;

  @Column({ nullable: false })
  image!: string;

  @ManyToOne(() => User, (user) => user.videos)
  postedBy!: User;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;
}
