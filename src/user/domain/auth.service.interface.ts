import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../validators/requestFilter";
import { UserDto } from "./";

export interface IAuthService {
  register(registerUser: RegisterFilterValidator): Promise<UserDto>;
  login(loginUser: LoginFilterValidator): Promise<string>;
}
