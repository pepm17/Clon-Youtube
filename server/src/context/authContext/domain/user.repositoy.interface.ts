import { AuthEntity } from "./auth.entity";
import { Id } from "./valueObjects";

export interface UserRepository {
  register(registerUser: AuthEntity): Promise<boolean>;
  findById(id: Id): Promise<AuthEntity | null>;
  login(loginUser: AuthEntity): Promise<AuthEntity | null>;
}
