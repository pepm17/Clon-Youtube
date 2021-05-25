import { BadRequestError } from "routing-controllers";
import { AuthEntity, UserRepository } from "../../domain";

export class RegisterUserUseCase {
  constructor(private repository: UserRepository) {}

  async registerUser(
    registerUser: AuthEntity,
    confirmPassword: string
  ): Promise<void> {
    const userExist = await this.repository.register(registerUser);
    if (!userExist) throw new BadRequestError("Email or username exist");
  }
}
