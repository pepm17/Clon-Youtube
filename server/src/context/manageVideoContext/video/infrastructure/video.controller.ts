import {
  Post,
  JsonController,
  Body,
  Get,
  Params,
  UseBefore,
  Req,
} from "routing-controllers";
import { FindByIdValidator, VideoCreateFilterValidator } from "./validators";
import { MulterMiddleware } from "../../../../middlewares";
import { CommandQueryBus } from "../../../shared/domain";
import { TypediCommandBus } from "../../../shared/infrastructure/typediCommandBus";
import { CreateVideoCommand } from "../application/createVideo";

@JsonController("/video")
export class VideoController {
  constructor(
    private commandBus: CommandQueryBus = TypediCommandBus.getInstance()
  ) {}
  /*@Get("/")
  async getAll() {
    return { response: await this.videoService.findAllVideos() };
  }*/
  /*@Get("/:id")
  async getById(@Params() id: FindByIdValidator) {
    return { response: await this.videoService.findVideoById(id.id) };
  }*/
  /*@Get("/user/:id")
  async getMyAllVideos(@Params() id: FindByIdValidator) {
    return { response: await this.videoService.findMyAllVideos(id.id) };
  }*/
  @Post("/")
  @UseBefore(new MulterMiddleware().init())
  async createVideo(@Body() body: VideoCreateFilterValidator, @Req() req: any) {
    body.video = req.files.video[0].filename;
    body.image = req.files.image[0].filename;
    const command = CreateVideoCommand.create(body);
    await this.commandBus.handle(command);
    return { response: "Video created correct" };
  }
}
