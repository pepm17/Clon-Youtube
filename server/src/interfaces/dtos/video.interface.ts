import { LoginUser } from "./user.interface";

export interface VideoDto {
  _id: string;
  title: string;
  description: string;
  image: string;
  postedBy: LoginUser;
  createAt: Date;
  updateAt: Date;
}
