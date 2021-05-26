import { Command } from "../../../../shared/domain";

export class CreateVideoCommand implements Command {
  constructor(
    private title: string,
    private description: string,
    private postedBy: string,
    private video: string,
    private image: string
  ) {}

  static create(data: any): CreateVideoCommand {
    return new this(
      data.title,
      data.description,
      data.postedBy,
      data.video,
      data.image
    );
  }

  toJson() {
    return {
      title: this.title,
      description: this.description,
      postedBy: this.postedBy,
      video: this.video,
      image: this.image,
    };
  }
}
