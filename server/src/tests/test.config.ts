import "../injector";
import "reflect-metadata";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";

const randomTestPort: number = Math.floor(Math.random() * 1000) + 3000;

export const app = createExpressServer({
  classTransformer: true,
  validation: true,
  controllers: [resolve(__dirname, "../controllers/**/*.ts")], // we specify controllers we want to use
  middlewares: [resolve(__dirname, "../middlewares/**/*.ts")], // we specify middlewares we want to use
}).listen(randomTestPort, () => {});
