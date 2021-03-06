import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { IUserService } from "../api/user/domain";
import { Inject } from "typedi";
import { JWT } from "../constants/jwt.constant";
import logger from "../api/shared/utils/logger/logger.util";
import { UserService } from "../api/user/application";

export class PassportMiddleware {
  private opts: StrategyOptions;
  constructor(
    @Inject(() => UserService) private readonly userService: IUserService
  ) {
    this.opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT.Secret,
    };
  }
  strategy(): Strategy {
    return new Strategy(this.opts, async (payload, done) => {
      try {
        const user = await this.userService.findById(payload._id);
        if (user) return done(null, user);
        return done(null, false);
      } catch (error) {
        logger.error(error);
      }
    });
  }
}
