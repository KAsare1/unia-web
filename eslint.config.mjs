import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const eslintConfig = [
  {
    ignores: ["node_modules/**", "dist/**"], // optional: ignore common dirs
    rules: {
      // disable all rules
      "all": "off",
    },
  },
];

export default eslintConfig;
