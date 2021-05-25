import { Handler } from "../../../shared/domain";
import { FindAllVideosQuery, FindAllVideosUseCase } from ".";

export class FindAllVideosQueryHandler implements Handler<any> {
  constructor(private useCase: FindAllVideosUseCase) {}

  async handler(_query: FindAllVideosQuery): Promise<any> {
    return this.useCase.getAllVideos();
  }
}
