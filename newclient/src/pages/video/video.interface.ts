import { User } from "../user/user.interface";

export interface Video {
  _id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  view: number;
  postedBy: User;
  createdAt: Date;
  updatedAt: Date;
}
