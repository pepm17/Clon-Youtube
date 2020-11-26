import { User } from "../models/user.model";
import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../interfaces/contracts/user.repositoy.interface";
import { Service } from "typedi";
import {
  RegisterUser,
  LoginUser,
  ExistUser,
  UserDto,
} from "../interfaces/dtos";
import { RegisterFilterValidator } from "../validators/requestFilter/registerFilter.validator";
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
    const user = await this.findOne({ username, email });
    if (user) return null;
    return ((await this.repository.save(
      (registerUser as unknown) as User
    )) as unknown) as UserDto;
  }
  async login(loginUser: LoginUser): Promise<LoginUser | null> {
    const user = await this.findOne((loginUser as unknown) as ExistUser);
    if (!user) return null;
    return user as LoginUser;
  }
  private async findOne(existUser: ExistUser): Promise<User | null> {
    const user = await this.repository.findOne({
      where: existUser,
    });
    if (user === undefined) return null;
    return user;
  }
}
