import {
  Description,
  Id,
  Image,
  Title,
  View,
  Video,
  PostedBy,
  Dates,
} from "./valueObjects";

export class VideoEntity {
  constructor(
    private id: Id,
    private title: Title,
    private description: Description,
    private postedBy: PostedBy,
    private image: Image,
    private video: Video,
    private view: View,
    private dates: Dates
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
      PostedBy.create({ ...postedBy }),
      new Image(video.image),
      new Video(video.video),
      new View(0),
      new Dates(new Date(), new Date())
    );
  }

  static createToReturn(video: any): VideoEntity {
    const postedBy = {
      ...video.postedBy,
    };
    return new this(
      new Id(video.id),
      new Title(video.title),
      new Description(video.description),
      PostedBy.create({ ...postedBy }),
      new Image(video.image),
      new Video(video.video),
      new View(0),
      new Dates(new Date(), new Date())
    );
  }

  static createFromArray(array: any[]): VideoEntity[] {
    return array.map((data) => {
      const dates = {
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
      };
      return new this(
        new Id(data.id),
        new Title(data.title),
        new Description(data.description),
        PostedBy.create({ ...data.postedBy }),
        new Image(data.image),
        new Video(data.video),
        new View(0),
        Dates.create({ ...dates })
      );
    });
  }

  manageViews() {
    this.view = new View(this.view.getValue() + 1);
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

  toUpdate() {
    return {
      id: this.id.getValue(),
      title: this.title.getValue(),
      description: this.description.getValue(),
      image: this.image.getValue(),
      video: this.video.getValue(),
      view: this.view.getValue(),
    };
  }

  toJson() {
    return {
      id: this.id.getValue(),
      title: this.title.getValue(),
      description: this.description.getValue(),
      postedBy: { ...this.postedBy.toJson() },
      image: this.image.getValue(),
      video: this.video.getValue(),
      view: this.view.getValue(),
      ...this.dates.toJson(),
    };
  }

  static toArrayJson(videos: VideoEntity[]) {
    return videos.map((video) => {
      return { ...video.toJson() };
    });
  }
}
