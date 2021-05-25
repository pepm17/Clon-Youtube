import {
  Post,
  JsonController,
  Body,
  Req,
  UseBefore,
} from "routing-controllers";
import { Inject } from "typedi";
import { TypediCommandBus } from "../../shared/infrastructure/typediCommandBus";
import { LoginFilterValidator, RegisterFilterValidator } from "./validators";
import { MulterMiddleware } from "@middlewares/index";
import { RegisterUserCommand } from "../application/registerUser";
import { CommandQueryBus } from "../../shared/domain";
import { LoginUserCommand } from "../application/loginUser";

@JsonController("/user")
export class UserController {
  constructor(
    private commandBus: CommandQueryBus = TypediCommandBus.getInstance()
  ) {}

  @Post("/register")
  @UseBefore(new MulterMiddleware().user())
  async register(@Body() body: RegisterFilterValidator, @Req() request: any) {
    body.photo = request.files.photo[0].filename;
    const command = RegisterUserCommand.create(body.toJson());
    await this.commandBus.handle(command);
    return { response: "User register succesfully" };
  }

  @Post("/login")
  async login(@Body() body: LoginFilterValidator) {
    const command = LoginUserCommand.create(body);
    const result = await this.commandBus.handle(command);
    return { response: result };
  }
}
