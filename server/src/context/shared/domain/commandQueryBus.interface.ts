import { Query, Command } from ".";

export interface CommandQueryBus {
  handle(commandOrQuery: Command | Query): Promise<any>;
}
