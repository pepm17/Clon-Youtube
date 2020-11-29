import { VideoCreateFilterValidator } from "../../validators/requestFilter";
import { VideoDto } from "../dtos";

export interface IVideoService {
  findAllVideos(): Promise<VideoDto[]>;
  findVideoById(id: string | number): Promise<VideoDto>;
  findMyAllVideos(id: string | number): Promise<VideoDto[]>;
  createVideo(video: VideoCreateFilterValidator): Promise<VideoDto>;
  updateVideo(video: any, id: string | number): Promise<any>;
  deleteVideo(id: string | number): Promise<any>;
}
