// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/todos/[id].ts";
import * as $1 from "./routes/api/todos/index.ts";
import * as $2 from "./routes/index.tsx";
import * as $$0 from "./islands/TodoManager.tsx";

const manifest = {
  routes: {
    "./routes/api/todos/[id].ts": $0,
    "./routes/api/todos/index.ts": $1,
    "./routes/index.tsx": $2,
  },
  islands: {
    "./islands/TodoManager.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;