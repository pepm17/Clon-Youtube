import { Transform } from "class-transformer";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
  Generated,
} from "typeorm";

@Entity()
export class User {
  @ObjectIdColumn({ name: "_id", type: "varchar" })
  @Transform((id: ObjectID) => id.toHexString(), { toPlainOnly: true })
  _id!: ObjectID;

  @Column({ nullable: false, unique: true })
  username!: string;

  @Column({ nullable: false, unique: true })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column({ nullable: false })
  confirmPassword!: string;

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;
}
