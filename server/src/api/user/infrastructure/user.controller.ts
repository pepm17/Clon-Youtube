import { Post, JsonController, Body, Req, UseBefore } from "routing-controllers";
import { Inject } from "typedi";
import { AuthService } from "@user/application";
import { IAuthService } from "@user/domain";
import {
  LoginFilterValidator,
  RegisterFilterValidator,
} from "@shared/validators/requestFilter";
import { MulterMiddleware } from "@middlewares/index";

@JsonController("/user")
export class UserController {
  constructor(@Inject(() => AuthService) private authService: IAuthService) {}
  @Post("/register")
  @UseBefore(new MulterMiddleware().user())
  async register(@Body() body: RegisterFilterValidator, @Req() request: any) {
    body.photo = request.files.photo[0].filename;
    return { response: await this.authService.register(body) };
  }
  @Post("/login")
  async login(@Body() body: LoginFilterValidator) {
    return { response: await this.authService.login(body) };
  }
}
