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
   * @param {boolean} byName Whether to search by name or Id.
   * @returns {Promise<Server>}
   */
  async get(server: string, byName = true): Promise<Server> {
    return await fetch(`https://api.minehut.com/server/${server}${byName ? "?byName=true" : ""}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.ok === false) throw new Error("Unknown server");

        return new Server(this.client, (res as { server: ServerResponse }).server as ServerResponse);
      })
      .catch((err) => {
        throw err;
      });
  }
}
