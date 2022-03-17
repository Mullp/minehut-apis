import { Client } from "../lib";
import { Details, ProductResponse } from "../typings";
import { BaseClass } from "./Base";

/**
 * Represents a product category.
 */
export type ProductCategory = "Plugin" | "Script" | "Modpack" | "World" | "Schematic" | "Configuration";

/**
 * Represents a product currency.
 */
export type Currency = "mhc";

/**
 * Represents a product.
 * @extends {BaseClass}
 */
export class Product extends BaseClass {
  public id: string;
  public price: number;
  public salePrice?: number;
  public title: string;
  public shortTitle?: string;
  public currency: Currency;
  public description: string;
  public shortDescription?: string;
  public category: ProductCategory;
  public type?: string;
  public tags: string[];
  public heroImage: string;
  public images: string[];
  public videos: string[];
  public visible: boolean;
  public slug: string;
  public details: Details;
  public createdAt: Date;
  public updatedAt: Date;
  public status: string;
  public releaseDate: Date;
  public unpublished: boolean;
  public onWishlist: boolean;
  public isOwned: boolean;

  public constructor(client: Client, data: ProductResponse) {
    super(client);

    this.client = client;

    this.id = data.sku;
    this.price = data.price;
    this.salePrice = data.salePrice;
    this.title = data.title;
    this.shortTitle = data.shortTitle;
    this.currency = <Currency>data.currency;
    this.description = data.description;
    this.shortDescription = data.shortDescription;
    this.category = <ProductCategory>data.category;
    this.type = data.type;
    this.tags = data.tags;
    this.heroImage = `https://image-service-prd.superleague.com/v1/images/${data.heroImage}?size=600x338`;
    this.images = data.images.map(
      (image) => `https://image-service-prd.superleague.com/v1/images/${image}?size=600x338`,
    );
    this.videos = data.videos.map((video) => `https://video.minehut.com/previews/${video}`);
    this.visible = data.visible;
    this.slug = data.slug;
    this.details = data.details;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.status = data.status;
    this.releaseDate = new Date(data.releaseDate);
    this.unpublished = data.unpublished;
    this.onWishlist = data.onWishlist;
    this.isOwned = data.isOwned;
  }
}
