import { VideoRepository } from "../repositories";
import { Inject } from "typedi";
import { IVideoRepository, IVideoService } from "../interfaces/contracts";
import { VideoDto } from "../interfaces/dtos";
import { VideoCreateFilterValidator } from "../validators/requestFilter";
import { NotFoundError } from "routing-controllers";

@Inject()
export class VideoService implements IVideoService {
  constructor(
    @Inject(() => VideoRepository)
    private readonly videoRepository: IVideoRepository
  ) {}

  async findAllVideos(): Promise<VideoDto[]> {
    return await this.videoRepository.findAllVideos();
  }
  async findVideoById(id: string | number): Promise<VideoDto> {
    const video = await this.videoRepository.findVideoById(id);
    if (!video) throw new NotFoundError("translation:messages.video.notFound");
    return video;
  }
  async findMyAllVideos(id: string | number): Promise<VideoDto[]> {
    return await this.videoRepository.findMyAllVideos(id);
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
