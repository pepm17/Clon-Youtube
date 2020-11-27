import { VideoCreateFilterValidator } from "../../validators/requestFilter";
import { VideoDto } from "../dtos";

export interface IVideoRepository {
  findAllVideos(): Promise<VideoDto[]>;
  findVideoById(id: string | number): Promise<any>;
  createVideo(video: VideoCreateFilterValidator): Promise<VideoDto>;
  updateVideo(video: any, id: string | number): Promise<any>;
  deleteVideo(id: string | number): Promise<any>;
}
