import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Server } from "../classes";
import { Client } from "../lib";
import { ServerResponse } from "../typings";

/**
 * Manages API methods for {@link Server} objects.
 * @extends {BaseManager}
 */
export class ServerManager extends BaseManager {
  /**
   * The client that instantiated this manager.
   * @type {Client}
   */
  public constructor(client: Client) {
    super(client);

    this.client = client;
  }

  /**
   * Get a server by name or Id.
   * @param {string} server The name or the Id of the server.
   * @param {string} byName Whether to search by name or Id.
   * @returns {Promise<Server>}
   */
  async get(server: string, byName: boolean = true): Promise<Server> {
    return await fetch(`https://api.minehut.com/server/${server}${byName ? "?byName=true" : ""}`)
      .then((res: any) => res.json())
      .then((server: any) => {
        return new Server(this.client, server.server as ServerResponse);
      })
      .catch((err) => {
        throw err;
      });
  }
}
