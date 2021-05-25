import { AuthEntity } from "./auth.entity";

export interface UserRepository {
  register(registerUser: AuthEntity): Promise<boolean>;
  login(loginUser: AuthEntity): Promise<AuthEntity | null>;
}
