import { Maker } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("Maker", async () => {
  expect(await client.maker.get("breadbuilds")).toBeInstanceOf(Maker);
}, 20000);

test("Maker products", async () => {
  expect(await client.maker.getProducts("breadbuilds")).toBeInstanceOf(Array);
}, 20000);
