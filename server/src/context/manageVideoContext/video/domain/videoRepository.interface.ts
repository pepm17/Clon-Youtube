import { VideoEntity } from "../domain";
import { Id } from "./valueObjects";

export interface VideoRepository {
  findAllVideos(): Promise<VideoEntity[]>;
  findVideoById(id: Id): Promise<VideoEntity | null>;
  // findMyAllVideos(_id: string | number): Promise<VideoDto[]>;
  updateVideo(video: VideoEntity): void;
  createVideo(video: VideoEntity): void;
}
