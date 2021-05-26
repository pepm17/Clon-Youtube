import { User } from "../../../shared/infrastructure/db/typeorm";
import { getRepository, Repository } from "typeorm";
import { Service } from "typedi";
import { UserRepository, UserEntity } from "../domain";
import { Id } from "../domain/valueObjects";

@Service("UserRepository")
export class TypeOrmUserRepository implements UserRepository {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findById(id: Id): Promise<UserEntity | null> {
    throw new Error("Method not implemented.");
  }
}
