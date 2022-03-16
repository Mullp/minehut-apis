import { Client } from "../lib";
import { IconResponse } from "../typings";
import { BaseClass } from "./Base";

/**
 * Represents an icon.
 * @extends {BaseClass}
 */
export class Icon extends BaseClass {
  public id: string;
  public displayName: string;
  public iconName: string;
  public price: number;
  public rank: string;
  public available: boolean;
  public disabled: boolean;
  public createdAt: number;
  public lastUpdatedAt: number;
  public salePrice?: number;

  public constructor(client: Client, data: IconResponse) {
    super(client);

    this.client = client;

    this.id = data._id;
    this.displayName = data.display_name;
    this.iconName = data.icon_name;
    this.price = data.price;
    this.rank = data.rank;
    this.available = data.available;
    this.disabled = data.disabled;
    this.createdAt = data.created;
    this.lastUpdatedAt = data.last_updated;
    this.salePrice = data.salePrice;
  }
}
