import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Icon } from "../classes";
import { Client } from "../lib";
import { AvailableIconsResponse, IconResponse } from "../typings";

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
   * Get an icon by name or Id.
   * @param {sting} icon The name or the Id of the icon.
   * @param {boolean} byName Whether to search by name or Id.
   * @returns {Promise<Icon | undefined>} An icon object.
   */
  async get(icon: string, byName = true): Promise<Icon | undefined> {
    return await this.getAll()
      .then((icons: Icon[]) => {
        return icons.find((i) =>
          byName ? i.iconName.toLowerCase() === icon.toLowerCase() : i.id.toLowerCase() === icon.toLowerCase(),
        );
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get all icons.
   * @returns {Promise<Icon[]>} A list of icons.
   */
  async getAll(): Promise<Icon[]> {
    return await fetch(`https://api.minehut.com/servers/icons`)
      .then((res) => res.json())
      .then((res: IconResponse[]) => {
        return res.map((icon) => new Icon(this.client, icon));
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get available and upcoming icons in the shop.
   * @returns {Promise<{available: { icons: Icon[]; cycleTime: number; id: string; activeStartTime: number; activeEndTime: number };upcoming: { icons: Icon[]; cycleTime: number; id: string; activeStartTime: number; activeEndTime: number };}>} The available and upcoming icons.
   */
  async getAvailableIcons(): Promise<{
    available: { icons: Icon[]; cycleTime: number; id: string; activeStartTime: number; activeEndTime: number };
    upcoming: { icons: Icon[]; cycleTime: number; id: string; activeStartTime: number; activeEndTime: number };
  }> {
    return await fetch(`https://api.minehut.com/servers/available_icons`)
      .then((res) => res.json())
      .then((res: AvailableIconsResponse) => {
        return {
          available: {
            icons: res.available.icons.map((icon: IconResponse) => new Icon(this.client, icon)),
            cycleTime: res.available.cycle_time,
            id: res.available._id,
            activeStartTime: res.available.active_end_time,
            activeEndTime: res.available.active_end_time,
          },
          upcoming: {
            icons: res.upcoming.icons.map((icon: IconResponse) => new Icon(this.client, icon)),
            cycleTime: res.upcoming.cycle_time,
            id: res.upcoming._id,
            activeStartTime: res.upcoming.active_end_time,
            activeEndTime: res.upcoming.active_end_time,
          },
        };
      })
      .catch((err) => {
        throw err;
      });
  }
}
