import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Generated / tool-managed files:
    ".agents/**",
    ".claude/**",
    ".cursor/**",
    ".devin/**",
    "migrations/snapshots/**",
    "src/prisma/contract.d.ts",
  ]),
]);

export default eslintConfig;