import app from "../app";
import swaggerUi from "swagger-ui-express";
import * as specs from "../docs/swager.config";
import morgan from "morgan";
import { LOG_FORMAT } from "../constants/environments.constant";
import { stream } from "../utils/logger/logger.util";
import { createConnection } from "typeorm";
export default class Server {
  private port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.connect()
      .then(() => {
        app.use(
          "/api-docs",
          swaggerUi.serve,
          swaggerUi.setup(specs.default, { explorer: true })
        );
        app.use(morgan(LOG_FORMAT, { stream }));
        app.listen(this.port, callback);
      })
      .catch((err) => console.error(err));
  }

  private async connect() {
    return await createConnection();
  }
}
