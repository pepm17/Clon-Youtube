import { config } from "dotenv";
import { resolve } from "path";
import { ENV } from "./constants/environments.constant";
import logger from "./api/shared/utils/logger/logger.util";
// switch (process.env.NODE_ENV) {
// default:
logger.info(`Loaded environment: ${ENV.LOCAL}`);
config({
  path: resolve(__dirname, "../.env"),
});
//break;
// }
