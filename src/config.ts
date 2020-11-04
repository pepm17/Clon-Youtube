import { config } from "dotenv";
import { resolve } from "path";
import { ENV } from "./constants/environments.constant";
import logger from "./utils/logger/logger.util";
logger.info(`Loading environment: ${process.env.NODE_ENV}`);
switch (process.env.NODE_ENV) {
  case ENV.DEVELOPMENT:
    logger.info(`Loaded environment: ${ENV.DEVELOPMENT}`);
    config({
      path: resolve(__dirname, "./development.env"),
    });
    break;
  case ENV.STAGING:
    logger.info(`Loaded environment: ${ENV.STAGING}`);
    config({
      path: resolve(__dirname, "./staging.env"),
    });
    break;
  case ENV.PRODUCTION:
    logger.info(`Loaded environment: ${ENV.PRODUCTION}`);
    config({
      path: resolve(__dirname, "./production.env"),
    });
    break;
  case ENV.LOCAL:
  default:
    logger.info(`Loaded environment: ${ENV.LOCAL}`);
    config({
      path: resolve(__dirname, "../.env"),
    });
    break;
}
