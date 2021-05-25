import bcrypt from "bcrypt";
import { Email, Password, Photo, Username } from "./valueObjects";

export class AuthEntity {
  constructor(
    private username: Username,
    private email: Email,
    private password: Password,
    private photo: Photo
  ) {}

  static create(register: any): AuthEntity {
    const registerUser = new this(
      new Username(register.username),
      new Email(register.email),
      new Password(register.password),
      new Photo(register.photo)
    );
    return registerUser;
  }

  static async register(register: any): Promise<AuthEntity> {
    const registerUser = new this(
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
}
