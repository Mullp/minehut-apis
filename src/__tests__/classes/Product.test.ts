import { Product } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("All products", async () => {
  expect(await client.product.getAll()).toBeInstanceOf(Array);
});

test("Product", async () => {
  expect(await client.product.get("WorldEdit", true)).toBeInstanceOf(Product);
});

test("Product link", async () => {
  expect((await client.product.get("WorldEdit", true))?.links.getSupportWebsite()).toBeTruthy();
});
