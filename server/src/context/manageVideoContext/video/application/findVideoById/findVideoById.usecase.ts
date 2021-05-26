import { Id } from "../../domain/valueObjects";
import { VideoRepository, VideoEntity } from "../../domain";
import { NotFoundError } from "routing-controllers";

export class FindVideoByIdUseCase {
  constructor(private repository: VideoRepository) {}

  async getvideoById(id: Id): Promise<VideoEntity> {
    const video = await this.repository.findVideoById(id);
    if (!video) {
      throw new NotFoundError("Video no exist");
    }
    video.manageViews();
    this.repository.updateVideo(video);
    return video;
  }
}
