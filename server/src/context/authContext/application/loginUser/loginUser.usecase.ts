import { ReturnUserLogin, UserWithToken } from "../../domain";
import { AuthEntity, UserRepository } from "../../domain";
import jwt from "jsonwebtoken";
import { JWT } from "../../../../constants/jwt.constant";
import { NotFoundError } from "routing-controllers";

export class LoginUserUseCase {
  constructor(private repository: UserRepository) {}

  async login(user: AuthEntity): Promise<UserWithToken> {
    const data = await this.repository.login(user);
    if (!data) throw new NotFoundError("Incorrect username or password");

    const { password } = user.toLogin();
    const validate = data.comparePassword(password);

    if (!validate) throw new NotFoundError("Incorrect username or password");

    const userLogged = data.toReturnLogin();
    const token = this.createToken(userLogged);

    return {
      token,
      user: userLogged,
    };
  }

  private createToken(loginUserToken: ReturnUserLogin): string {
    return jwt.sign({ loginUserToken }, JWT.Secret, {
      expiresIn: 86400,
    });
  }
}
