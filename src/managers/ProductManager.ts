import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Product } from "../classes";
import { Client } from "../lib";
import { ProductResponse } from "../typings";

const CACHE_TTL = 1000 * 60 * 60; // 1 hour

/**
 * Manages API methods for {@link Product} objects.
 * @extends {BaseManager}
 */
export class ProductManager extends BaseManager {
  private cache: Product[] = [];
  private lastCacheUpdate?: Date;

  /**
   * The client that instantiated this manager.
   * @type {Client}
   */
  public constructor(client: Client) {
    super(client);

    this.client = client;
  }

  /**
   * Get a product by name or Id.
   * @param {sting} product The name or the Id of the product.
   * @param {boolean} byName Whether to search by name or Id.
   * @returns {Promise<Product | undefined>} A product object.
   */
  async get(product: string, byName = true): Promise<Product | undefined> {
    return await this.getAll()
      .then((products) => {
        return products.find((p) =>
          byName
            ? p.shortTitle
              ? p.shortTitle.toLowerCase() === product.toLowerCase()
              : p.title.toLowerCase() === product.toLowerCase()
            : p.id.toLowerCase() === product.toLowerCase(),
        );
      })
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get all products.
   * @returns {Promise<Product[]>} A list of products.
   */
  async getAll(): Promise<Product[]> {
    if (this.cache.length > 0 && !(this.lastCacheUpdate && Date.now() - this.lastCacheUpdate.getTime() > CACHE_TTL))
      return this.cache;

    return await fetch(`https://facade-service-prod.superleague.com/facade/v1/client/products`)
      .then((res) => res.json())
      .then((res) => {
        if (res.ok === false) throw new Error("Error getting products");

        const products = (res as ProductResponse[]).map((product) => new Product(this.client, product));

        this.cache = products;

        return products;
      })
      .catch((err) => {
        throw err;
      });
  }
}
