import { User } from ".";
import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "@user/domain";
import { Service } from "typedi";
import { ExistUser, LoginUser, UserDto } from "@user/domain";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../shared/validators/requestFilter";
@Service()
export class UserRepository implements IUserRepository {
  private readonly repository: Repository<User>;
  constructor() {
    this.repository = getRepository(User);
  }
  async register(
    registerUser: RegisterFilterValidator
  ): Promise<UserDto | null> {
    const { email, username } = registerUser;
    const userExist = await this.existUser({ username, email });
    if (userExist) return null;
    const user = (this.repository.create(
      (registerUser as unknown) as User
    ) as unknown) as UserDto;
    return ((await this.repository.save(
      (user as unknown) as User
    )) as unknown) as UserDto;
  }
  async login(loginUser: LoginFilterValidator): Promise<LoginUser | null> {
    const user = await this.existUser((loginUser as unknown) as ExistUser);
    if (!user) return null;
    const comparePassword = await user.comparePassword(loginUser.password);
    if (!comparePassword) return null;
    const { _id, email, username, photo } = user;
    return ({ _id, email, username, photo } as unknown) as LoginUser;
  }
  async findById(id: string | number): Promise<LoginUser | null> {
    const user = await this.repository.findOne(id);
    if (!user) return null;
    const { _id, email, username } = user;
    return ({ _id, email, username } as unknown) as LoginUser;
  }

  private async existUser(existUser: ExistUser): Promise<User | null> {
    const user = await this.repository.findOne({
      where: [{ email: existUser.email }, { username: existUser.username }],
    });
    if (user === undefined) return null;
    return user;
  }
}
