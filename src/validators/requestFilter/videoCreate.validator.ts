import { IsEmail, IsString } from "class-validator";
import { Match } from "../../utils/decorators/match.decorator";

export class VideoCreateFilterValidator {
  @IsString({ message: "validator:isString" })
  title!: string;
  @IsString({ message: "validator:isString" })
  description!: string;
  @IsString({ message: "validator:isString" })
  video!: string;
  @IsString({ message: "validator:isString" })
  image!: string;
}
