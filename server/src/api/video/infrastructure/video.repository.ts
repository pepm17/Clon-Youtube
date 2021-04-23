import { IVideoRepository, VideoDto } from "../domain";
import { Video } from "./video.model";
import { Inject } from "typedi";
import { getRepository, Repository } from "typeorm";
import { VideoCreateFilterValidator } from "../../shared/validators/requestFilter";

@Inject()
export class VideoRepository implements IVideoRepository {
  private readonly repository: Repository<Video>;
  constructor() {
    this.repository = getRepository(Video);
  }
  async findAllVideos(): Promise<VideoDto[]> {
    return ((await this.repository
      .createQueryBuilder("video")
      .leftJoin("video.postedBy", "user")
      .addSelect(["user.username", "user.email", "user._id", "user.photo"])
      .getMany()) as unknown) as VideoDto[];
  }
  async findVideoById(_id: string | number): Promise<VideoDto | null> {
    const video = await this.repository
      .createQueryBuilder("video")
      .where({ _id })
      .leftJoin("video.postedBy", "user")
      .addSelect(["user.username", "user.email", "user._id", "user.photo"])
      .getOne();
    if (!video) return null;
    video.manageViews();
    this.repository.save(video);
    return (video as unknown) as VideoDto;
  }
  async findMyAllVideos(_id: string | number): Promise<VideoDto[]> {
    const video = await this.repository
      .createQueryBuilder("video")
      .where({ postedBy: { _id } })
      .leftJoin("video.postedBy", "user")
      .addSelect(["user.username", "user.email", "user._id"])
      .getMany();
    return (video as unknown) as VideoDto[];
  }
  async createVideo(video: VideoCreateFilterValidator): Promise<VideoDto> {
    return ((await this.repository.save(
      (video as unknown) as Video
    )) as unknown) as VideoDto;
  }
  updateVideo(video: any, id: string | number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  deleteVideo(id: string | number): Promise<any> {
    throw new Error("Method not implemented.");
  }
}
