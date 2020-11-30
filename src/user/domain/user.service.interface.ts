import { LoginUser } from "./";

export interface IUserService {
  findById(_id: string | number): Promise<LoginUser | null>;
}
