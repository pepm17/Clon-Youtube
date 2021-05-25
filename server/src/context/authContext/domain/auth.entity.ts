import bcrypt from "bcrypt";
import { Email, Password, Photo, Username, Id } from "./valueObjects";

export class AuthEntity {
  constructor(
    private id: Id,
    private username: Username,
    private email: Email,
    private password: Password,
    private photo: Photo
  ) {}

  static create(register: any): AuthEntity {
    const registerUser = new this(
      new Id(register.id),
      new Username(register.username),
      new Email(register.email),
      new Password(""),
      new Photo(register.photo)
    );
    return registerUser;
  }

  static async register(register: any): Promise<AuthEntity> {
    const registerUser = new this(
      new Id(""),
      new Username(register.username),
      new Email(register.email),
      new Password(""),
      new Photo(register.photo)
    );
    await registerUser.hashPassword();
    return registerUser;
  }

  static async login(login: any): Promise<AuthEntity> {
    return new this(
      new Id(""),
      new Username(login.username),
      new Email(""),
      new Password(login.password),
      new Photo("")
    );
  }

  private async hashPassword() {
    const hashPass = await bcrypt.hash(this.password.getValue(), 10);
    this.password = new Password(hashPass);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    return bcrypt.compare(attempt, this.password.getValue());
  }

  toRegister() {
    return {
      email: this.email.getValue(),
      username: this.username.getValue(),
      password: this.password.getValue(),
      photo: this.photo.getValue(),
    };
  }

  toValidateIfExist() {
    return {
      email: this.email.getValue(),
      username: this.username.getValue(),
    };
  }

  toLogin() {
    return {
      username: this.username.getValue(),
      password: this.password.getValue(),
    };
  }

  toReturnLogin() {
    return {
      id: this.id.getValue(),
      username: this.username.getValue(),
      email: this.email.getValue(),
      password: this.photo.getValue(),
    };
  }
}
