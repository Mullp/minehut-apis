export interface HomepageStatsResponse {
  server_count: number;
  user_count: number;
}

export interface SimpleStatsResponse {
  player_count: number;
  server_count: number;
  server_max: number;
  ram_count: number;
  ram_max: number;
}

export interface PlayerDistributionResponse {
  bedrockTotal: number;
  javaTotal: number;
  bedrockLobby: number;
  bedrockPlayerServer: number;
  javaLobby: number;
  javaPlayerServer: number;
}
