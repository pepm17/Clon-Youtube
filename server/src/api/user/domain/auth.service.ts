import { UserRepository } from "../infraestructure";
import { Inject, Service } from "typedi";
import { IAuthService, IUserRepository } from ".";
import { UserDto, LoginUser } from ".";
import { BadRequestError } from "routing-controllers";
import jwt from "jsonwebtoken";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../shared/validators/requestFilter";
import { JWT } from "../../../constants/jwt.constant";
@Service()
export class AuthService implements IAuthService {
  constructor(
    @Inject(() => UserRepository)
    private readonly userRepository: IUserRepository
  ) {}
  async register(registerUser: RegisterFilterValidator): Promise<UserDto> {
    const user = await this.userRepository.register(registerUser);
    if (!user)
      throw new BadRequestError("translation:messages.user.register.userExist");
    return user;
  }
  async login(loginUser: LoginFilterValidator): Promise<string> {
    const user = await this.userRepository.login(loginUser);
    if (!user)
      throw new BadRequestError(
        "translation:messages.user.login.BadCredentials"
      );
    return this.createToken(user);
  }
  private createToken(loginUserToken: LoginUser): string {
    return jwt.sign({ loginUserToken }, JWT.Secret, {
      expiresIn: 86400,
    });
  }
}
