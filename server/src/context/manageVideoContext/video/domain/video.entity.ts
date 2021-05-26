import {
  Description,
  Id,
  Image,
  Title,
  View,
  Video,
  PostedBy,
} from "./valueObjects";

export class VideoEntity {
  private createAt?: Date;
  private updateAt?: Date;

  constructor(
    private id: Id,
    private title: Title,
    private description: Description,
    private postedBy: PostedBy,
    private image: Image,
    private video: Video,
    private view: View
  ) {}

  static create(video: any): VideoEntity {
    const postedBy = {
      id: video.postedBy,
      username: "",
      photo: "",
    };
    return new this(
      new Id(""),
      new Title(video.title),
      new Description(video.description),
      PostedBy.create(postedBy),
      new Image(video.image),
      new Video(video.video),
      new View(0)
    );
  }

  toCreate() {
    return {
      title: this.title.getValue(),
      description: this.description.getValue(),
      postedBy: this.postedBy.toJson().id,
      image: this.image.getValue(),
      video: this.video.getValue(),
      view: this.view.getValue(),
    };
  }
}
