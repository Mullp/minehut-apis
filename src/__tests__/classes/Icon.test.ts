import { Icon } from "../../classes";
import { Client } from "../../index";

const client = new Client();

test("Icon test", async () => {
  expect(await client.icon.get("GOLDEN_APPLE", true)).toBeInstanceOf(Icon);
});

test("All icons test", async () => {
  expect(await client.icon.getAll()).toBeInstanceOf(Array);
});
