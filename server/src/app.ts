import "reflect-metadata";
import express from "express";
import { resolve } from "path";
import { createExpressServer } from "routing-controllers";

const app: express.Application = createExpressServer({
  cors: true,
  defaultErrorHandler: false,
  classTransformer: true,
  validation: true,
  controllers: [resolve(__dirname, "./**/*controller{.ts,.js}")], // we specify controllers we want to use
  middlewares: [resolve(__dirname, "./middlewares/**/*{.ts,.js}")], // we specify middlewares we want to use
});

export default app;
