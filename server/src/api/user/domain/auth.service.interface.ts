import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../shared/validators/requestFilter";
import { UserDto, LoginUser } from ".";

export interface IAuthService {
  register(registerUser: RegisterFilterValidator): Promise<UserDto>;
  login(loginUser: LoginFilterValidator): Promise<{token: string, user: LoginUser}>;
}
