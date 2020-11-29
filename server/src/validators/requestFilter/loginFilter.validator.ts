import { IsEmail, IsString } from "class-validator";
import { Match } from "../../utils/decorators/match.decorator";

export class LoginFilterValidator {
  @IsString({ message: "validator:isString" })
  username!: string;
  @IsString({ message: "validator:isString" })
  password!: string;
}
