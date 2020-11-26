import { User } from "../models/user.model";
import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../interfaces/contracts/user.repositoy.interface";
import { Service } from "typedi";
import { ExistUser, LoginUser, UserDto } from "../interfaces/dtos";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../validators/requestFilter";
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
    return (user as unknown) as LoginUser;
  }
  private async existUser(existUser: ExistUser): Promise<User | null> {
    const user = await this.repository.findOne({
      where: {
        $or: [{ email: existUser.email }, { username: existUser.username }],
      },
    });
    if (user === undefined) return null;
    return user;
  }
}
