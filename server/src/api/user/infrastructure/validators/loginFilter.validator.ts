import { IsString } from "class-validator";

export class LoginFilterValidator {
  @IsString({ message: "validator:isString" })
  username!: string;
  @IsString({ message: "validator:isString" })
  password!: string;
}
