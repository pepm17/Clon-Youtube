import { VideoRepository } from "../domain";
import { Video } from "../../../shared/infrastructure/db/typeorm";
import { Inject } from "typedi";
import { getRepository, Repository } from "typeorm";
import { VideoEntity } from "../domain/video.entity";

@Inject()
export class TypeOrmVideoRepository implements VideoRepository {
  private readonly repository: Repository<Video>;
  constructor() {
    this.repository = getRepository(Video);
  }
  async findAllVideos(): Promise<VideoEntity[]> {
    const videos = await this.repository
      .createQueryBuilder("video")
      .leftJoin("video.postedBy", "user")
      .addSelect(["user.username", "user.id", "user.photo"])
      .getMany();
    return VideoEntity.createFromArray(videos);
  }
  /*async findAllVideos(): Promise<VideoDto[]> {
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
    // video.manageViews();
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
  }*/

  createVideo(video: VideoEntity): void {
    const data = this.repository.create((video.toCreate() as unknown) as Video);
    console.log(data);
    this.repository.save(data);
  }
}