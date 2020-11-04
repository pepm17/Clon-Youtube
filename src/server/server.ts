export class Server {
  private port: number;

  constructor(port: number) {
    this.port = port;
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback: () => void) {
    this.connect().then(() => {});
  }

  private async connect() {}
}
