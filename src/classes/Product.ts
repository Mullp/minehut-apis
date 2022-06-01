import { Client } from "../lib";
import { ProductResponse } from "../typings";
import { BaseClass } from "./Base";

/**
 * Represents a product category.
 */
export type ProductCategory =
  | "Plugin"
  | "Script"
  | "Modpack"
  | "World"
  | "Schematic"
  | "Configuration"
  | "Server Setup"
  | "Minigame"
  | "Premium Plugin";

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
  public salePrice: number | null;
  public title: string;
  public shortTitle?: string | null;
  public currency: Currency;
  public description: string;
  public shortDescription?: string | null;
  public category: ProductCategory;
  public type: string | null;
  public tags: string[];
  public heroImage: string;
  public images: string[];
  public videos: string[];
  public visible: boolean;
  public slug: string;
  public promotionalDiscountOptIn: boolean;
  public supportedLanguages: string[];
  public contributors: string[];
  public compatibleVersions: string[];
  public versions: string[];
  public managed: boolean;
  public links: ProductLinks;
  public publisherId: string;
  public publisherSlug: string;
  public publisherName?: string;
  public publisherLogo?: string;
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
    this.videos = data.videos.map((video) => `https://video.minehut.com/videos/${video}`);
    this.visible = data.visible;
    this.slug = data.slug;
    this.promotionalDiscountOptIn = data.details.promotionalDiscountOptIn;
    this.supportedLanguages = data.details.supportedLanguages;
    this.contributors = data.details.contributors;
    this.compatibleVersions = data.details.compatibleVersions;
    this.versions = data.details.versions;
    this.managed = data.details.managed;
    this.links = new ProductLinks(data.details.links);
    this.publisherId = data.details.publisherId;
    this.publisherSlug = data.details.publisherSlug;
    this.publisherName = data.details.publisherName;
    this.publisherLogo = data.details.publisherLogo;
    this.createdAt = new Date(data.createdAt);
    this.updatedAt = new Date(data.updatedAt);
    this.status = data.status;
    this.releaseDate = new Date(data.releaseDate);
    this.unpublished = data.unpublished;
    this.onWishlist = data.onWishlist;
    this.isOwned = data.isOwned;
  }
}

/**
 * The product links.
 */
export class ProductLinks {
  private links: { _id: string; linkText: string; linkUrl: string }[];

  public constructor(links: { _id: string; linkText: string; linkUrl: string }[]) {
    this.links = links;
  }

  /**
   * Gets the support website url.
   * @returns {string} The support website url.
   */
  public getSupportWebsite(): string {
    return this.links[0].linkUrl;
  }

  /**
   * Gets the product website url.
   * @returns {string} the product website url.
   */
  public getProductWebsite(): string {
    return this.links[1].linkUrl;
  }

  /**
   * Gets the FAQ website url.
   * @returns {string} the FAQ website url.
   */
  public getFaqWebsite(): string {
    return this.links[2].linkUrl;
  }
}
