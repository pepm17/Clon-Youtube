import { IsEmail, IsString } from "class-validator";
import { Match } from "../../../../api/shared/utils/decorators/match.decorator";

export class RegisterFilterValidator {
  @IsEmail({}, { message: "validator:isEmail" })
  email!: string;
  @IsString({ message: "validator:isString" })
  username!: string;
  @IsString({ message: "validator:isString" })
  password!: string;
  @Match("password", { message: "validator:isMatchPassword" })
  @IsString({ message: "validator:isString" })
  confirmPassword!: string;
  photo?: string;

  toJson() {
    return {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      photo: this.password,
    };
  }
}
