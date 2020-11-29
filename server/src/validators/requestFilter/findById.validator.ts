import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class FindByIdValidator {
  @IsString({
    message: "validator:isString",
  })
  @Type(() => String)
  id!: string;
}
