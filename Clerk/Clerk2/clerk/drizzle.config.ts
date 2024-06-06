import type { Config } from "drizzle-kit";

import { env } from "app/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "turso",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
    authToken: env.DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
