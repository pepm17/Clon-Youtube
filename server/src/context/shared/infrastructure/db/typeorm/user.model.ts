import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Video } from ".";

@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "integer",
  })
  id!: number;

  @Column({ nullable: false, unique: true })
  username!: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: true })
  photo?: string;

  @OneToMany(() => Video, (video) => video.postedBy, {
    onDelete: "CASCADE",
    nullable: true,
  })
  videos!: Video[];

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;
}
