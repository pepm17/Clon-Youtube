import {
  RegisterUserCommandHandler,
  RegisterUserUseCase,
} from "../../authContext/application/registerUser";
import { NotFoundError } from "routing-controllers";
import Container, { ContainerInstance } from "typedi";
import { Command, CommandQueryBus, Handler, Query } from "../domain";
import { TypeOrmUserRepository } from "../../authContext/infrastructure";
import {
  LoginUserCommandHandler,
  LoginUserUseCase,
} from "../../authContext/application/loginUser";
import {
  CreateVideoCommandHandler,
  CreateVideoUseCase,
} from "../../manageVideoContext/video/application/createVideo";
import { TypeOrmVideoRepository } from "../../manageVideoContext/video/infrastructure";
import {
  FindAllVideosQueryHandler,
  FindAllVideosUseCase,
} from "../../manageVideoContext/video/application/findAllVideos";

export class TypediCommandBus implements CommandQueryBus {
  static instace: TypediCommandBus;

  private constructor(private readonly container: ContainerInstance) {
    this.addCommandHandler();
    this.addQueryHandler();
  }

  static getInstance(): TypediCommandBus {
    if (TypediCommandBus.instace) return TypediCommandBus.instace;

    TypediCommandBus.instace = new TypediCommandBus(
      new ContainerInstance("CommandBus")
    );

    return TypediCommandBus.instace;
  }

  async handle(commandOrQuery: Command | Query): Promise<any> {
    const {
      constructor: { name },
    } = commandOrQuery;

    if (!this.container.has(name)) {
      throw new NotFoundError("Handler for command not found");
    }

    const handler = this.container.get<Handler<any>>(name);
    return handler.handler(commandOrQuery);
  }

  private addQueryHandler() {
    this.container.set(
      "FindAllVideosQuery",
      new FindAllVideosQueryHandler(
        new FindAllVideosUseCase(
          Container.get<TypeOrmVideoRepository>(TypeOrmVideoRepository)
        )
      )
    );
  }

  private addCommandHandler() {
    this.container.set(
      "RegisterUserCommand",
      new RegisterUserCommandHandler(
        new RegisterUserUseCase(
          Container.get<TypeOrmUserRepository>(TypeOrmUserRepository)
        )
      )
    );

    this.container.set(
      "LoginUserCommand",
      new LoginUserCommandHandler(
        new LoginUserUseCase(
          Container.get<TypeOrmUserRepository>(TypeOrmUserRepository)
        )
      )
    );

    this.container.set(
      "LoginUserCommand",
      new LoginUserCommandHandler(
        new LoginUserUseCase(
          Container.get<TypeOrmUserRepository>(TypeOrmUserRepository)
        )
      )
    );

    this.container.set(
      "CreateVideoCommand",
      new CreateVideoCommandHandler(
        new CreateVideoUseCase(
          Container.get<TypeOrmVideoRepository>(TypeOrmVideoRepository)
        )
      )
    );
  }
}
