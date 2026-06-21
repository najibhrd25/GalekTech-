import { createEnv } from "@t3-oss/env-nextjs";
import { vercel } from "@t3-oss/env-nextjs/presets-zod";
import { z } from "zod/v4";

const env = createEnv({
  shared: {
    NODE_ENV: z
      .enum(["development", "production", "test"])
      .default("development"),
  },

  server: {
    SANITY_API_READ_TOKEN: z.string().default("mock_read_token"),
    SANITY_API_WRITE_TOKEN: z.string().default("mock_write_token"),
    AUTH_SECRET: z.string().default("mock_auth_secret"),
    AUTH_GITHUB_ID: z.string().default("mock_github_id"),
    AUTH_GITHUB_SECRET: z.string().default("mock_github_secret"),
    GEMINI_API_KEY: z.string().default("mock_gemini_api_key"),
  },

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },

  extends: [vercel()],
});

export { env };
