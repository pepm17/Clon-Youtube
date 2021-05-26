import { UserEntity } from ".";
import { Id } from "./valueObjects";

export interface UserRepository {
  findById(id: Id): Promise<UserEntity | null>;
}
