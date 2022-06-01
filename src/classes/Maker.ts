import { Client } from "../lib";
import { BaseClass } from "./Base";
import { Flags, Links, MakerResponse, SocialProfiles } from "../typings";
import { Product } from "./Product";

/**
 * Represents a maker.
 * @extends {BaseClass}
 */
export class Maker extends BaseClass {
  public id: string;
  public flags: Flags;
  public publisherId: string;
  public publisherSlug: string;
  public createdAt: Date;
  public updatedAt: Date;
  public description: string;
  public links: Links;
  public publisherName: string;
  public socialProfiles: SocialProfiles;
  public heroImage: string;
  public publisherLogo: string;
  public promotionalDiscountOptIn: boolean;

  public constructor(client: Client, data: MakerResponse) {
    super(client);

    this.client = client;

    this.id = data._id;
    this.flags = data.flags;
    this.publisherId = data.publisherId;
    this.publisherSlug = data.publisherSlug;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.description = data.description;
    this.links = data.links;
    this.publisherName = data.publisherName;
    this.socialProfiles = data.socialProfiles;
    this.heroImage = `https://image-service-prd.superleague.com/v1/images/${data.heroImage}?size=600x338`;
    this.publisherLogo = `https://image-service-prd.superleague.com/v1/images/${data.publisherLogo}?size=600x338`;
    this.promotionalDiscountOptIn = data.promotionalDiscountOptIn;
  }

  /**
   * Get the maker's products.
   * @returns {Promise<Product[]>} A list of the maker's products.
   */
  async getProducts(): Promise<Product[]> {
    return await this.client.maker.getProducts(this.publisherId, false);
  }
}
