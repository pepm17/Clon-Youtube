import { Inject, Service } from "typedi";
import { IUserRepository, IUserService, LoginUser } from "../domain";
import { UserRepository } from "../infrastructure";

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
