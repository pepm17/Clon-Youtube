import { Post, JsonController, Body } from "routing-controllers";
import { Inject } from "typedi";
import { AuthService } from "../services";
import { IAuthService } from "../interfaces/contracts";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../validators/requestFilter";

@JsonController("/user")
export class UserController {
  constructor(@Inject(() => AuthService) private authService: IAuthService) {}
  @Post("/register")
  async login(@Body() body: RegisterFilterValidator) {
    return { response: await this.authService.register(body) };
  }
  @Post("/login")
  async register(@Body() body: LoginFilterValidator) {
    return { response: await this.authService.login(body) };
  }
}
