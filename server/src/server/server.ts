import "module-alias/register";
import app from "../app";
import swaggerUi from "swagger-ui-express";
import * as specs from "../docs/swagger";
import morgan from "morgan";
import { LOG_FORMAT } from "../constants/environments.constant";
import { stream } from "../api/shared/utils/logger/logger.util";
import { createConnection } from "typeorm";
import passport from "passport";
import { PassportMiddleware } from "../middlewares/passport.middleware";
import { Container } from "typedi";
import express from "express";

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
        app.use(express.static("src/uploads"))
        app.use(passport.initialize());
        passport.use(
          Container.get<PassportMiddleware>(PassportMiddleware).strategy()
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
