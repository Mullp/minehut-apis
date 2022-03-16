import { Client } from "../lib";
import { ServerResponse } from "../typings/responses/ServerResponse";
import { BaseClass } from "./Base";
import { Icon } from "./Icon";

/**
 * Represents a server.
 * @extends {BaseClass}
 */
export class Server extends BaseClass {
  public categories: string[];
  public inheritedCategories: string[];
  public backupSlots: number;
  public suspended: boolean;
  public serverVersionType: string;
  public proxy: string;
  public connectedServers: string[];
  public id: string;
  public motd: string;
  public visibility: boolean;
  public serverPlan: string;
  public storageNode: string;
  public owner: string;
  public name: string;
  public nameLower: string;
  public createdAt: number;
  public platform: string;
  public creditsPerDay: number;
  public __v: number;
  public port: number;
  public lastOnline: number;
  public online: boolean;
  public maxPlayers?: number;
  public playerCount: number;
  public rawPlan: string;
  public activeServerPlan: string;

  public raw: ServerResponse;

  public constructor(client: Client, data: ServerResponse) {
    super(client);

    this.client = client;

    this.categories = data.categories;
    this.inheritedCategories = data.inheritedCategories;
    this.backupSlots = data.backup_slots;
    this.suspended = data.suspended;
    this.serverVersionType = data.server_version_type;
    this.proxy = data.proxy;
    this.connectedServers = data.connectedServers;
    this.id = data._id;
    this.motd = data.motd;
    this.visibility = data.visibility;
    this.serverPlan = data.server_plan;
    this.storageNode = data.storage_node;
    this.owner = data.owner;
    this.name = data.name;
    this.nameLower = data.name_lower;
    this.createdAt = data.creation;
    this.platform = data.platform;
    this.creditsPerDay = data.credits_per_day;
    this.__v = data.__v;
    this.port = data.port;
    this.lastOnline = data.last_online;
    this.online = data.online;
    this.maxPlayers = data.maxPlayers;
    this.playerCount = data.playerCount;
    this.rawPlan = data.rawPlan;
    this.activeServerPlan = data.activeServerPlan;

    this.raw = data;
  }

  /**
   * All purchased icons.
   * @returns {Promise<Icon[]>}
   */
  public async getPurchasedIcons(): Promise<Icon[]> {
    return (await this.client.icon.getAll()).filter((icon) => this.raw.purchased_icons.includes(icon.id));
  }

  /**
   * The active server icon.
   * @returns {Promise<Icon|undefined>}
   */
  public async getActiveIcon(): Promise<Icon | undefined> {
    return await this.client.icon.get(this.raw.active_icon, false);
  }
}
