import { Handler } from "../../../../shared/domain";
import { FindVideoByIdQuery, FindVideoByIdUseCase } from ".";
import { VideoEntity } from "../../domain";
import { Id } from "../../domain/valueObjects";

export class FindVideoByIdQueryHandler implements Handler<any> {
  constructor(private useCase: FindVideoByIdUseCase) {}

  async handler(query: FindVideoByIdQuery): Promise<any> {
    const { id } = query.toJson();
    const videos = await this.useCase.getvideoById(new Id(id));
    return videos.toJson();
  }
}
