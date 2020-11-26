import { RegisterFilterValidator } from "../../validators/requestFilter/registerFilter.validator";
import { RegisterUser, UserDto } from "../dtos";

export interface IUserService {
  register(registerUser: RegisterFilterValidator): Promise<UserDto>;
  login(): Promise<any>;
}
