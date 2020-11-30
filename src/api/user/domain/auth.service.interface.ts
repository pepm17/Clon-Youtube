import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../shared/validators/requestFilter";
import { UserDto } from ".";

export interface IAuthService {
  register(registerUser: RegisterFilterValidator): Promise<UserDto>;
  login(loginUser: LoginFilterValidator): Promise<string>;
}
