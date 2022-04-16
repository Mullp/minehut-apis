import { Icon, Server } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("Server", async () => {
  expect(await client.server.get("lightskies")).toBeInstanceOf(Server);
}, 20000);

test("Unknown server", async () => {
  await expect(client.server.get("aaaaaaaaaaaaaaaaaaaa")).rejects.toThrow("Unknown server");
}, 20000);

test("Server purchased icons", async () => {
  expect(await (await client.server.get("lightskies")).getPurchasedIcons()).toBeInstanceOf(Array);
}, 20000);

test("Server active icon", async () => {
  expect(await (await client.server.get("lightskies")).getActiveIcon()).toBeInstanceOf(Icon);
}, 20000);
