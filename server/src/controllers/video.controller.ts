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
import {
  FindByIdValidator,
  VideoCreateFilterValidator,
} from "../validators/requestFilter";
import { VideoService } from "../services";
import { IVideoService } from "../interfaces/contracts";
import { MulterMiddleware } from "../middlewares/multer.middleware";

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
    body.video = req.files.video[0].path;
    body.image = req.files.image[0].path;
    return { response: await this.videoService.createVideo(body) };
  }
}
