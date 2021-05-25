import { Command } from "../../../shared/domain";

export class RegisterUserCommand implements Command {
  constructor(
    private email: string,
    private username: string,
    private password: string,
    private confirmPassword: string,
    private photo: string
  ) {}

  static create(register: any): RegisterUserCommand {
    return new this(
      register.email,
      register.username,
      register.password,
      register.confirmPassword,
      register.photo
    );
  }

  toJson() {
    return {
      email: this.email,
      username: this.username,
      password: this.password,
      confirmPassword: this.confirmPassword,
      photo: this.photo,
    };
  }
}
