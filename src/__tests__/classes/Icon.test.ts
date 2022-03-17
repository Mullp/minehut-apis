import { Icon } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("All icons test", async () => {
  expect(await client.icon.getAll()).toBeInstanceOf(Array);
});

test("Icon test", async () => {
  expect(await client.icon.get("GOLDEN_APPLE", true)).toBeInstanceOf(Icon);
});
