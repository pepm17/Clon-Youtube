import { IsEmail, IsString } from "class-validator";

export class RegisterFilterValidator {
  @IsEmail({}, { message: "validator:isEmail" })
  email!: string;
  @IsString({ message: "validator:isString" })
  username!: string;
  @IsString({ message: "validator:isString" })
  password!: string;
  @IsString({ message: "validator:isString" })
  confirmPassword!: string;
}
