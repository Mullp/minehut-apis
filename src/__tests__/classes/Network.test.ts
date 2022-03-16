import { Icon, Server } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("Homepage stats", async () => {
  expect(await client.network.getHomepageStats()).toBeTruthy();
});

test("Simple stats", async () => {
  expect(await client.network.getSimpleStats()).toBeTruthy();
});

test("Top servers", async () => {
  expect(await client.network.getPlayerDistribution()).toBeTruthy();
});
