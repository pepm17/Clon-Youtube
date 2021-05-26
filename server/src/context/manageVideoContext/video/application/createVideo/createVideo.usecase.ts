import { VideoEntity } from "../../domain";
import { VideoRepository } from "../../domain";

export class CreateVideoUseCase {
  constructor(private repository: VideoRepository) {}

  createVideo(video: VideoEntity): void {
    this.repository.createVideo(video);
  }
}
