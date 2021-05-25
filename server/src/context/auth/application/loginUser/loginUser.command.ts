import { Command } from "../../../shared/domain";

export class LoginUserCommand implements Command {
  constructor(private username: string, private password: string) {}

  static create(login: any) {
    return new this(login.username, login.password);
  }

  toJson() {
    return {
      username: this.username,
      password: this.password,
    };
  }
}
