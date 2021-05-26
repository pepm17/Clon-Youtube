import { Handler } from "../../../../shared/domain";
import { CreateVideoUseCase, CreateVideoCommand } from ".";
import { VideoEntity } from "../../domain";

export class CreateVideoCommandHandler implements Handler<void> {
  constructor(private useCase: CreateVideoUseCase) {}

  async handler(command: CreateVideoCommand): Promise<void> {
    const entity = VideoEntity.create(command);
    this.useCase.createVideo(entity);
  }
}
