import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { Inject } from "typedi";
import { JWT } from "../constants/jwt.constant";
import logger from "../utils/logger/logger.util";
import { CommandQueryBus } from "../context/shared/domain";
import { TypediCommandBus } from "../context/shared/infrastructure/typediCommandBus";
import { FindUserByIdQuery } from "../context/authContext/application/findById";

export class PassportMiddleware {
  private opts: StrategyOptions;
  constructor(
    private commandBus: CommandQueryBus = TypediCommandBus.getInstance()
  ) {
    this.opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: JWT.Secret,
    };
  }
  strategy(): Strategy {
    return new Strategy(this.opts, async (payload, done) => {
      try {
        const query = new FindUserByIdQuery(payload.id);
        const user = await this.commandBus.handle(query);
        if (user) return done(null, user);
        console.log(user);
        return done(null, false);
      } catch (error) {
        logger.error(error);
      }
    });
  }
}
