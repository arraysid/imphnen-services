import baseConfig from "@imphnen/eslint-config/base";
import reactConfig from "@imphnen/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
