import { Handler } from "../../../shared/domain";
import { RegisterUserCommand, RegisterUserUseCase } from ".";
import { AuthEntity } from "../../domain";

export class RegisterUserCommandHandler implements Handler<void> {
  constructor(private usecase: RegisterUserUseCase) {}

  async handler(command: RegisterUserCommand): Promise<void> {
    const { confirmPassword, ...rest } = command.toJson();
    const entity = await AuthEntity.register(rest);
    await this.usecase.registerUser(entity, confirmPassword);
  }
}
