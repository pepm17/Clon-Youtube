import { Query } from "../../../shared/domain";

export class FindUserByIdQuery implements Query {
  constructor(private id: string) {}

  toJson() {
    return {
      id: this.id,
    };
  }
}
