import { VideoRepository } from "../repositories";
import { Inject } from "typedi";
import { IVideoRepository, IVideoService } from "../interfaces/contracts";
import { VideoDto } from "../interfaces/dtos";
import { VideoCreateFilterValidator } from "../validators/requestFilter";

@Inject()
export class VideoService implements IVideoService {
  constructor(
    @Inject(() => VideoRepository)
    private readonly videoRepository: IVideoRepository
  ) {}

  async findAllVideos(): Promise<VideoDto[]> {
    const videos = await this.videoRepository.findAllVideos();
    return videos;
  }
  findVideoById(id: string | number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async createVideo(video: VideoCreateFilterValidator): Promise<VideoDto> {
    return await this.videoRepository.createVideo(video);
  }
  updateVideo(video: any, id: string | number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteVideo(id: string | number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
