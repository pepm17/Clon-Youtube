import { Handler } from "../../../../shared/domain";
import { FindAllVideosQuery, FindAllVideosUseCase } from ".";
import { VideoEntity } from "../../domain";

export class FindAllVideosQueryHandler implements Handler<any[]> {
  constructor(private useCase: FindAllVideosUseCase) {}

  async handler(_query: FindAllVideosQuery): Promise<any[]> {
    const videos = await this.useCase.getAllVideos();
    return VideoEntity.toArrayJson(videos);
  }
}
