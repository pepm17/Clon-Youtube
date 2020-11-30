import { Inject, Service } from "typedi";
import { LoginUser } from "./";
import { UserRepository } from "../infraestructure";
import { IUserRepository, IUserService } from "./";

@Service()
export class UserService implements IUserService {
  constructor(
    @Inject(() => UserRepository)
    private readonly userRepository: IUserRepository
  ) {}
  async findById(_id: string | number): Promise<LoginUser | null> {
    const user = await this.userRepository.findById(_id);
    return user;
  }
}
