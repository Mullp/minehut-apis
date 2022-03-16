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
