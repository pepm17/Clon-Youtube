import { User } from "../../shared/infrastructure/db/typeorm";
import { getRepository, Repository } from "typeorm";
import { Service } from "typedi";
import { UserRepository, AuthEntity } from "../domain";
import { Id } from "../domain/valueObjects";

@Service("UserRepository")
export class TypeOrmUserRepository implements UserRepository {
  private readonly repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }
  async findById(criteria: Id): Promise<AuthEntity | null> {
    const user = await this.repository.findOne(criteria.getValue());
    if (!user) return null;
    return AuthEntity.login(user);
  }

  async register(registerUser: AuthEntity): Promise<boolean> {
    const { email, username } = registerUser.toValidateIfExist();

    const userExist = await this.existUser(username, email);
    if (userExist) return false;

    await this.repository.save(registerUser.toRegister());
    return true;
  }

  async login(loginUser: AuthEntity): Promise<AuthEntity | null> {
    const { email, username } = loginUser.toValidateIfExist();

    const user = await this.existUser(username, email);
    if (!user) return null;

    return AuthEntity.create(user);
  }

  private async existUser(
    username: string,
    email: string
  ): Promise<User | null> {
    const user = await this.repository.findOne({
      where: [{ email }, { username }],
    });
    if (user === undefined) return null;
    return user;
  }
}
