import "./config";
import "./injector";
import Server from "./server/server";
import logger from "./api/shared/utils/logger/logger.util";

const server = Server.init((process.env.PORT as unknown) as number);

server.start(() => {
  logger.info(`Server is running at PORT: ${process.env.PORT}`);
});
