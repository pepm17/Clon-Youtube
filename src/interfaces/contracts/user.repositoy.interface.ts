import { RegisterFilterValidator } from "../../validators/requestFilter/registerFilter.validator";
import { LoginUser, UserDto } from "../dtos";

export interface IUserRepository {
  register(registerUser: RegisterFilterValidator): Promise<UserDto | null>;
  login(loginUser: LoginUser): Promise<LoginUser | null>;
}
