import { Client } from "../../index";

const client = new Client();

test("Homepage stats", async () => {
  expect(await client.network.getHomepageStats()).toBeTruthy();
}, 20000);

test("Simple stats", async () => {
  expect(await client.network.getSimpleStats()).toBeTruthy();
}, 20000);

test("Player distribution", async () => {
  expect(await client.network.getPlayerDistribution()).toBeTruthy();
}, 20000);

test("Top servers", async () => {
  expect(await client.network.getTopServers()).toBeInstanceOf(Array);
}, 20000);

test("All servers", async () => {
  expect(await client.network.getServers()).toBeInstanceOf(Array);
}, 20000);
