import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BeforeInsert,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcrypt";
@Entity()
export class User {
  @PrimaryGeneratedColumn({
    name: "id",
    type: "integer",
  })
  _id!: number;

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
