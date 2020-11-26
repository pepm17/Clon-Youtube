import { IUserService } from "../interfaces/contracts/user.service.interface";
import { Inject, Service } from "typedi";
import { LoginUser } from "../interfaces/dtos";
import { UserRepository } from "../repositories/user.respository";
import { IUserRepository } from "../interfaces/contracts/user.repositoy.interface";

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
