import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Product } from "../classes";
import { Client } from "../lib";
import { ProductResponse } from "../typings";

/**
 * Manages API methods for {@link Product} objects.
 * @extends {BaseManager}
 */
export class ProductManager extends BaseManager {
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
   * @param {sting} product The name or the Id of the icon.
   * @param {boolean} byTitle Whether to search by title or Id.
   * @returns {Promise<Product | undefined>}
   */
  async get(product: string, byTitle: boolean = true): Promise<Product | undefined> {
    return await this.getAll()
      .then((products) => {
        return products.find((p) =>
          byTitle
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
   * @returns {Promise<Product[]>}
   */
  async getAll(): Promise<Product[]> {
    return await fetch(`https://facade-service-prod.superleague.com/facade/v1/client/products`)
      .then((res) => res.json())
      .then((res: ProductResponse[]) => {
        return res.map((product) => new Product(this.client, product));
      })
      .catch((err) => {
        throw err;
      });
  }
}
