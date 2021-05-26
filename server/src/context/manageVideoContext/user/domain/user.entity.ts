import { Photo, Username, Id } from "./valueObjects";

export class UserEntity {
  constructor(
    private id: Id,
    private username: Username,
    private photo: Photo
  ) {}

  static create(register: any): UserEntity {
    return new this(
      new Id(register.id),
      new Username(register.username),
      new Photo(register.photo)
    );
  }

  toJson() {
    return {
      id: this.id.getValue(),
      username: this.username.getValue(),
      photo: this.photo.getValue(),
    };
  }
}
