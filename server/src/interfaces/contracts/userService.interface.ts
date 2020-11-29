import { LoginUser } from "../dtos";

export interface IUserService {
  findById(_id: string | number): Promise<LoginUser | null>;
}
