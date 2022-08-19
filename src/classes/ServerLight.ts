import { Client } from "../lib";
import { ServersResponse } from "../typings";
import { BaseClass } from "./Base";
import { Icon } from "./Icon";

/**
 * Represents a light version of a server.
 * @extends {BaseClass}
 */
export class ServerLight extends BaseClass {
  public id: string;
  public serverPlan: string;
  public startDate: number;
  public platform: string;
  public planMaxPlayers: number;
  public rawPlan: string;
  public connectedServers: string[];
  public maxPlayers?: number;
  public name: string;
  public motd: string;
  public playerCount: number;
  public timeNoPlayers: number;
  public connectable: boolean;
  public visibility: boolean;
  public categories: string[];
  public serverVersion?: { type: string; version: string };
  public defaultBannerImage?: string;
  public defaultBannerTint?: string;

  public raw: ServersResponse;

  public constructor(client: Client, data: ServersResponse) {
    super(client);

    this.client = client;

    this.id = data.staticInfo._id;
    this.serverPlan = data.staticInfo.serverPlan;
    this.startDate = data.staticInfo.serviceStartDate;
    this.platform = data.staticInfo.platform;
    this.planMaxPlayers = data.staticInfo.planMaxPlayers;
    this.rawPlan = data.staticInfo.rawPlan;
    this.connectedServers = data.staticInfo.connectedServers;
    this.maxPlayers = data.maxPlayers;
    this.name = data.name;
    this.motd = data.motd;
    this.playerCount = data.playerData.playerCount;
    this.timeNoPlayers = data.playerData.timeNoPlayers;
    this.connectable = data.connectable;
    this.visibility = data.visibility;
    this.categories = data.allCategories;
    this.serverVersion = data.server_version;
    this.defaultBannerImage = `https://image-service-prd.superleague.com/v1/images/server-banner-images/${data.default_banner_image}?size=auto`;
    this.defaultBannerTint = data.default_banner_tint;

    this.raw = data;
  }

  /**
   * The server icon.
   * @returns {Promise<Icon|undefined>} The server's server icon.
   */
  public async getIcon(): Promise<Icon | undefined> {
    if (!this.raw.icon) return;

    return await this.client.icon.get(this.raw.icon, true);
  }
}
