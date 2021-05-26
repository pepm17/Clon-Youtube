import { VideoRepository, VideoEntity } from "../../domain";

export class FindAllVideosUseCase {
  constructor(private repository: VideoRepository) {}

  async getAllVideos(): Promise<VideoEntity[]> {
    return this.repository.findAllVideos();
  }
}
