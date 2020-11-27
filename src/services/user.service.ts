import { Inject, Service } from "typedi";
import { LoginUser } from "../interfaces/dtos";
import { UserRepository } from "../repositories/user.respository";
import { IUserRepository, IUserService } from "../interfaces/contracts";

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
