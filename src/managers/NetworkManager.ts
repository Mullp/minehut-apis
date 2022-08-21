import fetch from "cross-fetch";
import { BaseManager } from ".";
import { ServerLight } from "../classes/ServerLight";
import { Client } from "../lib";
import {
  HomepageStatsResponse,
  PlayerDistributionResponse,
  ServersResponse,
  SimpleStatsResponse,
  TopServersResponse,
} from "../typings";

interface IGetServersOptions {
  query?: string;
  limit?: number;
  offset?: number;
  category?: string;
}

/**
 * Manages API methods for network stats.
 * @extends {BaseManager}
 */
export class NetworkManager extends BaseManager {
  /**
   * The client that instantiated this manager.
   * @type {Client}
   */
  public constructor(client: Client) {
    super(client);

    this.client = client;
  }

  /**
   * Get homepage stats.
   * @returns {Promise<{ serverCount: number; userCount: number }>} The amount of servers and users registered.
   */
  public async getHomepageStats(): Promise<{ serverCount: number; userCount: number }> {
    return await fetch(`https://api.minehut.com/network/homepage_stats`)
      .then((res) => res.json())
      .then((res: HomepageStatsResponse) => {
        return {
          serverCount: res.server_count,
          userCount: res.user_count,
        };
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get simple stats.
   * @returns {Promise<{playerCount: number; serverCount: number; serverMax: number; ramCount: number; ramMax: number }>} Simple statistics about the network.
   */
  public async getSimpleStats(): Promise<{
    playerCount: number;
    serverCount: number;
    serverMax: number;
    ramCount: number;
    ramMax: number;
  }> {
    return await fetch(`https://api.minehut.com/network/simple_stats`)
      .then((res) => res.json())
      .then((res: SimpleStatsResponse) => {
        return {
          playerCount: res.player_count,
          serverCount: res.server_count,
          serverMax: res.server_max,
          ramCount: res.ram_count,
          ramMax: res.ram_max,
        };
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get player distribution.
   * @returns {Promise<{bedrock: {total: number; lobby: number; playerServer: number}; java: {total: number; lobby: number; playerServer: number}}>} The player distribution between Java and Bedrock.
   */
  public async getPlayerDistribution(): Promise<{
    bedrock: { total: number; lobby: number; playerServer: number };
    java: { total: number; lobby: number; playerServer: number };
  }> {
    return await fetch(`https://api.minehut.com/network/players/distribution`)
      .then((res) => res.json())
      .then((res: PlayerDistributionResponse) => {
        return {
          bedrock: {
            total: res.bedrockTotal,
            lobby: res.bedrockLobby,
            playerServer: res.bedrockPlayerServer,
          },
          java: {
            total: res.javaTotal,
            lobby: res.javaLobby,
            playerServer: res.javaPlayerServer,
          },
        };
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get top 5 servers online.
   * @returns {Promise<TopServersResponse[]>} A list of the top 5 servers online.
   */
  public async getTopServers(): Promise<TopServersResponse[]> {
    return await fetch(`https://api.minehut.com/network/top_servers`)
      .then((res) => res.json())
      .then((res: { servers: TopServersResponse[] }) => {
        return res.servers as TopServersResponse[];
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get all online servers.
   * @returns {Promise<ServerLight[]>} A list of all online servers.
   */
  public async getServers({ query, limit, offset, category }: IGetServersOptions = {}): Promise<ServerLight[]> {
    return await fetch(
      `https://api.minehut.com/servers?${query ? `q=${query}&` : ""}${limit ? `limit=${limit}&` : ""}${
        offset ? `offset=${offset}&` : ""
      }${category ? `category=${category}&` : ""}`,
    )
      .then((res) => res.json())
      .then((res: { servers: ServersResponse[]; total_players: number; total_servers: number }) => {
        return res.servers.map((server) => new ServerLight(this.client, server));
      })
      .catch((err) => {
        throw err;
      });
  }
}
