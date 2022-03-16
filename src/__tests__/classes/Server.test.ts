import { Icon, Server } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("Server test", async () => {
  expect(await client.server.get("lightskies")).toBeInstanceOf(Server);
});

test("Server purchased icons", async () => {
  expect(await (await client.server.get("lightskies")).getPurchasedIcons()).toBeInstanceOf(Array);
});

test("Server active icon", async () => {
  expect(await (await client.server.get("lightskies")).getActiveIcon()).toBeInstanceOf(Icon);
});
