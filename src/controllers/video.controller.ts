import { Post, JsonController, Body, Get, Params } from "routing-controllers";
import { Inject } from "typedi";
import {
  FindByIdValidator,
  VideoCreateFilterValidator,
} from "../validators/requestFilter";
import { VideoService } from "../services";
import { IVideoService } from "../interfaces/contracts";

@JsonController("/video")
export class VideoController {
  constructor(
    @Inject(() => VideoService) private videoService: IVideoService
  ) {}
  @Get("/")
  async getAll() {
    return { response: await this.videoService.findAllVideos() };
  }
  @Get("/:id")
  async getById(@Params() id: FindByIdValidator) {
    return { response: id };
  }
  @Post("/")
  async register(@Body() body: VideoCreateFilterValidator) {
    return { response: await this.videoService.createVideo(body) };
  }
}
