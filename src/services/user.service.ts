import { UserRepository } from "../repositories/user.respository";
import { Inject, Service } from "typedi";
import { IUserService } from "../interfaces/contracts/user.service.interface";
import { IUserRepository } from "../interfaces/contracts/user.repositoy.interface";
import { UserDto } from "../interfaces/dtos";
import { NotFoundError } from "routing-controllers";
import { RegisterFilterValidator } from "../validators/requestFilter/registerFilter.validator";
@Service()
export class UserService implements IUserService {
  constructor(
    @Inject(() => UserRepository)
    private readonly userRepository: IUserRepository
  ) {}
  async register(registerUser: RegisterFilterValidator): Promise<UserDto> {
    const user = await this.userRepository.register(registerUser);
    if (!user)
      throw new NotFoundError("translation:messages.user.register.userExist");
    return user;
  }
  login(): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
