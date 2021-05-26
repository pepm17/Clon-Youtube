import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from "typeorm";
import { User } from ".";

@Entity()
export class Video {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "integer",
  })
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  description!: string;

  @Column({ nullable: false })
  video!: string;

  @Column({ nullable: false })
  image!: string;

  @Column({ default: 0 })
  view!: number;

  @ManyToOne(() => User, (user) => user.videos)
  @JoinColumn({ name: "postedBy" })
  postedBy!: User;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;
}
