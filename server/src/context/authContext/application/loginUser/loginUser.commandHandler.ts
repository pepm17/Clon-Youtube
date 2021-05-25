import { Handler } from "../../../shared/domain";
import { LoginUserUseCase, LoginUserCommand } from ".";
import { AuthEntity } from "../../domain";

export class LoginUserCommandHandler implements Handler<any> {
  constructor(private useCase: LoginUserUseCase) {}

  async handler(command: LoginUserCommand): Promise<any> {
    const entity = await AuthEntity.login(command.toJson());
    return this.useCase.login(entity);
  }
}
