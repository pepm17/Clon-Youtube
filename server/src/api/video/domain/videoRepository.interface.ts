import { VideoCreateFilterValidator } from "../../shared/validators/requestFilter";
import { VideoDto } from "../domain";

export interface IVideoRepository {
  findAllVideos(): Promise<VideoDto[]>;
  findVideoById(id: string | number): Promise<VideoDto | null>;
  findMyAllVideos(_id: string | number): Promise<VideoDto[]>;
  createVideo(video: VideoCreateFilterValidator): Promise<VideoDto>;
  updateVideo(video: any, id: string | number): Promise<any>;
  deleteVideo(id: string | number): Promise<any>;
}
