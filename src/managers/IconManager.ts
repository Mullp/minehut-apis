import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Icon } from "../classes";
import { Client } from "../lib";
import { IconResponse } from "../typings";

/**
 * Manages API methods for {@link Icon} objects.
 * @extends {BaseManager}
 */
export class IconManager extends BaseManager {
  /**
   * The client that instantiated this manager.
   * @type {Client}
   */
  public constructor(client: Client) {
    super(client);

    this.client = client;
  }

  /**
   * Get a icon by name or Id.
   * @param icon The name or the Id of the icon.
   * @param byName Whether to search by name or Id.
   * @returns Promise<Icon | undefined>
   */
  async get(icon: string, byName: boolean = true): Promise<Icon | undefined> {
    return await this.getAll()
      .then((icons) => {
        return icons.find((i) => (byName ? i.iconName === icon : i.id === icon));
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * All icons.
   * @returns Promise<Icon[]>
   */
  async getAll(): Promise<Icon[]> {
    return await fetch(`https://api.minehut.com/servers/icons`)
      .then((res) => res.json())
      .then((icons: IconResponse[]) => {
        return icons.map((icon) => new Icon(this.client, icon));
      })
      .catch((err) => {
        throw err;
      });
  }
}
