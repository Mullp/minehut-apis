import { Icon } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("All icons", async () => {
  expect(await client.icon.getAll()).toBeInstanceOf(Array);
});

test("Icon", async () => {
  expect(await client.icon.get("GOLDEN_APPLE", true)).toBeInstanceOf(Icon);
});

test("Available icons", async () => {
  expect(await client.icon.getAvailableIcons()).toBeTruthy();
});
