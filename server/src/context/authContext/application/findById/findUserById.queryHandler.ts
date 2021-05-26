import { Handler } from "../../../shared/domain";
import { FindUserByIdQuery, FindUserByIdUseCase } from ".";
import { Id } from "../../domain/valueObjects";

export class FindUserByIdQueryHandler implements Handler<any> {
  constructor(private useCase: FindUserByIdUseCase) {}

  async handler(query: FindUserByIdQuery): Promise<any> {
    const { id } = query.toJson();
    const user = await this.useCase.getvideoById(new Id(id));
    return user.toReturnLogin();
  }
}
