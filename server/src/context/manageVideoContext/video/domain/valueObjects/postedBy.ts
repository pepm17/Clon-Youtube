export class PostedBy {
  constructor(
    private id: string,
    private username: string,
    private photo: string
  ) {}

  static create(postedBy: any) {
    return new this(postedBy.id, postedBy.username, postedBy.photo);
  }

  toJson() {
    return {
      id: this.id,
      username: this.username,
      photo: this.photo,
    };
  }
}
