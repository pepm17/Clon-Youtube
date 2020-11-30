import i18nextMiddleware from "i18next-express-middleware";
import { ExpressMiddlewareInterface, Middleware } from "routing-controllers";
import i18Config from "../i18Config.config";

@Middleware({ type: "before" })
export class I18NextMiddleware implements ExpressMiddlewareInterface {
  use = i18nextMiddleware.handle(i18Config, {
    ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
    removeLngFromUrl: false,
  });
}
