<div align="center">
  <br />
  <h1>
    minehut.ts
  </h1>
  <br />
  <p>
    <a href="https://www.npmjs.com/package/minehut.ts"><img src="https://img.shields.io/npm/dt/minehut.ts" alt="npm downloads" /></a>
  </p>
  <p>minehut.ts is a powerful <a href="https://nodejs.org">Node.js</a> module for interacting with the Minehut API.</p>
</div>

---

- [Installation](#installation)
- [Loading the module](#loading-the-module)
  - [ES Modules (ESM)](#es-modules-esm)
  - [CommonJS](#commonjs)
- [Example usage](#example-usage)
  - [Get server by name](#get-server-by-name)
  - [Get server by Id](#get-server-by-id)
  - [Get product by name](#get-product-by-name)
  - [Avoid conflicts](#avoid-conflicts)
- [TypeScript](#typescript)
- [Team](#team)

## Installation
```bash
npm install minehut.ts
# or
yarn add minehut.ts
# or
pnpm add minehut.ts
```

## Loading the module
### ES Modules (ESM)
```js
import { Client } from "minehut.ts";
```

### CommonJS
```js
const { Client } = require("minehut.ts");
```

## Example usage
### Get server by name
```js
import { Client } from "minehut.ts";

const minehut = new Client();

(async () => {
  // Get server by name
  const server = await minehut.server.get("lightskies", true);
  
  console.log(server);
})();
```

### Get server by Id
```js
import { Client } from "minehut.ts";

const minehut = new Client();

(async () => {
  // Get server by Id
  const server = await minehut.server.get("60e57b624cba54007bf05c34", false);

  console.log(server);
})();
```

### Get product by name
```js
import { Client } from "minehut.ts";

const minehut = new Client();

(async () => {
  // Get product by name
  const product = await client.product.get("WorldEdit", true);

  console.log(product);

  // The publisher of the product
  console.log(`Publisher: ${product.publisherName}`);
  // The short description of the product
  console.log(`Short description: ${product.shortDescription}`);
})();
```

### Avoid conflicts
Importing another module with the same name will cause conflicts (eg. `discord.js`). This can simply be avoided by renaming the import.
```js
import { Client as Minehut } from "minehut.ts";
// Using CommonJS: "const { Client: Minehut } = require("minehut.ts")"
import { Client } from "discord.js";

// minehut.ts client
const minehut = new Minehut();

// discord.js client
const client = new Client();
```

## TypeScript
Types are bundled with `minehut.ts`, so you do not need to install any additional packages.

## Team
| [![Mullp](https://github.com/Mullp.png?size=100)](https://github.com/Mullp) |
|---|
| [Mullp](https://github.com/Mullp) |