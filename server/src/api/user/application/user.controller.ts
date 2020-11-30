import { Post, JsonController, Body } from "routing-controllers";
import { Inject } from "typedi";
import { AuthService } from "../domain";
import { IAuthService } from "../domain/index";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "../../shared/validators/requestFilter";

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
