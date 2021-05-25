import { Query, Command } from ".";

export interface Handler<T> {
  handler(commandOrQuery: Command | Query): Promise<T>;
}
