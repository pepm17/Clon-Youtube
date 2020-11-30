import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../validators/requestFilter";
import { LoginUser, UserDto } from "./";

export interface IUserRepository {
  register(registerUser: RegisterFilterValidator): Promise<UserDto | null>;
  login(loginUser: LoginFilterValidator): Promise<LoginUser | null>;
  findById(_id: string | number): Promise<LoginUser | null>;
}
