import baseConfig, { restrictEnvAccess } from "@imphnen/eslint-config/base";
import nextjsConfig from "@imphnen/eslint-config/nextjs";
import reactConfig from "@imphnen/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
