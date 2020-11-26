import {
  Post,
  Req,
  Res,
  Param,
  JsonController,
  Body,
} from "routing-controllers";
import { Response } from "express";
import { IRequest } from "../interfaces/request.interface";
import { Inject } from "typedi";
import { UserService } from "../services/user.service";
import { IUserService } from "../interfaces/contracts/user.service.interface";
import { RegisterFilterValidator } from "../validators/requestFilter/registerFilter.validator";

@JsonController("/user")
export class UserController {
  constructor(@Inject(() => UserService) private userService: IUserService) {}
  @Post("/register")
  async login(@Body() body: RegisterFilterValidator) {
    const register = await this.userService.register(body);

    return { response: register };
  }
  @Post("/login")
  async register(@Req() req: IRequest, @Res() res: Response) {
    return { response: `${req.i18n.t("translation:messages.user.login")}` };
  }
}
