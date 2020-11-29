import { Response } from "express";
import {
  Middleware,
  ExpressErrorMiddlewareInterface,
} from "routing-controllers";
import { IRequest } from "../interfaces/request.interface";

@Middleware({ type: "after", priority: 1 })
export class ErrorHandlerMiddleware implements ExpressErrorMiddlewareInterface {
  error(
    error: any,
    request: IRequest,
    response: Response,
    next: (err?: any) => any
  ) {
    const { message, name, errors = [], httpCode = 500 } = error;

    response.status(httpCode).json({
      httpCode,
      message: request.i18n.t(message, { value: name }),
      errors,
    });

    next();
  }
}
