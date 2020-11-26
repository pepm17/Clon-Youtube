import { Transform } from "class-transformer";
import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectID,
  ObjectIdColumn,
  BeforeInsert,
} from "typeorm";
import bcrypt from "bcrypt";
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

  @CreateDateColumn({ type: "timestamp", nullable: true })
  createdAt!: Date;

  @UpdateDateColumn({ type: "timestamp", nullable: true })
  updatedAt!: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return await bcrypt.compare(attempt, this.password);
  }
}
