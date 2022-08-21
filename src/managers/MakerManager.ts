import fetch from "cross-fetch";
import { BaseManager } from ".";
import { Client } from "../lib";
import { Maker, Product } from "../classes";
import { MakerResponse } from "../typings";

/**
 * Manages API methods for {@link Maker} objects.
 * @extends {BaseManager}
 */
export class MakerManager extends BaseManager {
  /**
   * The client that instantiated this manager.
   * @type {Client}
   */
  public constructor(client: Client) {
    super(client);

    this.client = client;
  }

  /**
   * Get a maker by name or Id.
   * @param {sting} maker The slug of the maker.
   * @returns {Promise<Maker>} A maker object.
   */
  async get(maker: string): Promise<Maker> {
    return await fetch(`https://publisher-registry-prod.superleague.com/publisher/v1/publisher/slug/${maker}`)
      .then((res) => {
        if (res.status === 404) throw new Error("Unknown maker");

        return res.json();
      })
      .then((maker: MakerResponse) => new Maker(this.client, maker))
      .catch((err) => {
        throw err;
      });
  }

  /**
   * Get a maker's products by slug or Id.
   * @param {sting} maker The slug or the Id of the maker.
   * @param {boolean} bySlug Whether to search by slug or Id.
   * @returns {Promise<Product[]>} A list of the maker's products.
   */
  async getProducts(maker: string, bySlug: boolean = true): Promise<Product[]> {
    return await this.client.product.getAll().then((products) => {
      return products.filter((product) => (bySlug ? product.publisherSlug === maker : product.publisherId === maker));
    });
  }
}
