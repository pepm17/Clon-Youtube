import { Id } from "../../domain/valueObjects";
import { UserRepository, AuthEntity } from "../../domain";
import { NotFoundError } from "routing-controllers";

export class FindUserByIdUseCase {
  constructor(private repository: UserRepository) {}

  async getvideoById(id: Id): Promise<AuthEntity> {
    const user = await this.repository.findById(id);
    if (!user) {
      throw new NotFoundError("User no exist");
    }
    return user;
  }
}
