import { IconManager, ServerManager } from "../../managers";

export class Client {
  server: ServerManager;
  icon: IconManager;

  public constructor() {
    this.server = new ServerManager(this);
    this.icon = new IconManager(this);
  }
}
