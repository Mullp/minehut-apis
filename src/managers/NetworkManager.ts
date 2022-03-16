import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Client } from "../lib";
import { HomepageStatsResponse, PlayerDistributionResponse, SimpleStatsResponse } from "../typings";

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
   * @returns {Promise<{ serverCount: number; userCount: number }>}
   */
  public async getHomepageStats(): Promise<{ serverCount: number; userCount: number }> {
    return await fetch(`https://api.minehut.com/network/homepage_stats`)
      .then((res: any) => res.json())
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
   * @returns {Promise<{playerCount: number; serverCount: number; serverMax: number; ramCount: number; ramMax: number }>}
   */
  public async getSimpleStats(): Promise<{
    playerCount: number;
    serverCount: number;
    serverMax: number;
    ramCount: number;
    ramMax: number;
  }> {
    return await fetch(`https://api.minehut.com/network/simple_stats`)
      .then((res: any) => res.json())
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
   * @returns {Promise<{bedrock: {total: number; lobby: number; playerServer: number}; java: {total: number; lobby: number; playerServer: number}}>}
   */
  public async getPlayerDistribution(): Promise<{
    bedrock: { total: number; lobby: number; playerServer: number };
    java: { total: number; lobby: number; playerServer: number };
  }> {
    return await fetch(`https://api.minehut.com/network/players/distribution`)
      .then((res: any) => res.json())
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
}
