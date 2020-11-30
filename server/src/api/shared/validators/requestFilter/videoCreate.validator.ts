import { IsString } from "class-validator";

export class VideoCreateFilterValidator {
  @IsString({ message: "validator:isString" })
  title!: string;
  @IsString({ message: "validator:isString" })
  description!: string;
  @IsString({ message: "validator:isString" })
  postedBy!: string | number;
  video: string;
  image: string;

  constructor() {
    this.video = "";
    this.image = "";
  }
}
