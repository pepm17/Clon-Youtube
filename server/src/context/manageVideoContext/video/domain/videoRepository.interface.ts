import { VideoEntity } from "../domain";

export interface VideoRepository {
  findAllVideos(): Promise<VideoEntity[]>;
  // findVideoById(id: string | number): Promise<VideoDto | null>;
  // findMyAllVideos(_id: string | number): Promise<VideoDto[]>;
  createVideo(video: VideoEntity): void;
}
