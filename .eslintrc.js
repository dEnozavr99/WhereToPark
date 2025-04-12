// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: ["expo", "plugin:import/recommended", "plugin:import/typescript"],
  plugins: ["import", "simple-import-sort"],
  ignorePatterns: ["/dist/*"],
  settings: {
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
};
