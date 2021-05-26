import { Query } from "../../../../shared/domain";

export class FindVideoByIdQuery implements Query {
  constructor(private id: string) {}

  toJson() {
    return {
      id: this.id,
    };
  }
}
