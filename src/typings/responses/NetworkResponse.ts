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

export interface TopServersResponse {
  staticInfo: {
    _id: string;
    serverPlan: string;
    serviceStartDate: number;
    ip: string;
    key: string;
    port: number;
    managerPort: number;
    platform: string;
    planMaxPlayers: number;
    rawPlan: string;
    connectedServers: string[];
  };
  maxPlayers?: number;
  name: string;
  motd: string;
  icon: string;
  visibility: boolean;
  playerData: { players: string[]; playerCount: number; timeNoPlayers: number };
}

export interface ServersResponse {
  staticInfo: {
    _id: string;
    serverPlan: string;
    serviceStartDate: number;
    platform: string;
    planMaxPlayers: number;
    rawPlan: string;
    connectedServers: string[];
  };
  maxPlayers?: number;
  name: string;
  motd: string;
  icon: string | null;
  playerData: {
    playerCount: number;
    timeNoPlayers: number;
  };
  connectable: boolean;
  visibility: boolean;
}
