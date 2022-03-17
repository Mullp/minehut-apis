import { Product } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("All products test", async () => {
  expect(await client.product.getAll()).toBeInstanceOf(Array);
});

test("Product test", async () => {
  expect(await client.product.get("BetterCrops", true)).toBeInstanceOf(Product);
});

test("Product link test", async () => {
  expect((await client.product.get("BetterCrops", true))?.links.getSupportWebsite()).toBeTruthy();
});
