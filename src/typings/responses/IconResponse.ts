export interface IconResponse {
  _id: string;
  display_name: string;
  icon_name: string;
  price: number;
  rank: string;
  available: boolean;
  disabled: boolean;
  created: number;
  last_updated: number;
  __v: number;
  salePrice?: number;
}

export interface AvailableIconsResponse {
  available: {
    icons: IconResponse[];
    cycle_time: number;
    _id: string;
    active_start_time: number;
    active_end_time: number;
    __v: number;
  };
  upcoming: {
    icons: IconResponse[];
    cycle_time: number;
    _id: string;
    active_start_time: number;
    active_end_time: number;
    __v: number;
  };
}
