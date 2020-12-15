import "../injector";
import "reflect-metadata";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";

const portTest: number = ((process.env.PORT as unknown) as number) + 30;

export const app = createExpressServer({
  classTransformer: true,
  validation: true,
  controllers: [resolve(__dirname, "../controllers/**/*.ts")], // we specify controllers we want to use
  middlewares: [resolve(__dirname, "../middlewares/**/*.ts")], // we specify middlewares we want to use
}).listen(portTest, () => {});
