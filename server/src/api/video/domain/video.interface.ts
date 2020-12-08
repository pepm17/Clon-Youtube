import { LoginUser } from "../../user/domain";

export interface VideoDto {
  _id: string;
  title: string;
  description: string;
  image: string;
  view: number;
  postedBy: LoginUser;
  createAt: Date;
  updateAt: Date;
}
