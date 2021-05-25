import {
  Post,
  JsonController,
  Body,
  Get,
  Params,
  UseBefore,
  Req,
} from "routing-controllers";
import { Inject } from "typedi";
import { FindByIdValidator, VideoCreateFilterValidator } from "./validators";
import { IVideoService } from "../domain";
import { MulterMiddleware } from "../../../middlewares";
import { VideoService } from "../application";

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
    return { response: await this.videoService.findVideoById(id.id) };
  }
  @Get("/user/:id")
  async getMyAllVideos(@Params() id: FindByIdValidator) {
    return { response: await this.videoService.findMyAllVideos(id.id) };
  }
  @Post("/")
  @UseBefore(new MulterMiddleware().init())
  async createVideo(@Body() body: VideoCreateFilterValidator, @Req() req: any) {
    body.video = req.files.video[0].filename;
    body.image = req.files.image[0].filename;
    return { response: await this.videoService.createVideo(body) };
  }
}
