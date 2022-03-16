import { Client } from "../lib";

export class BaseManager {
  public client!: Client;
  public constructor(client: Client) {
    Object.defineProperty(this, "Client", { value: client, enumerable: false });
  }
}
