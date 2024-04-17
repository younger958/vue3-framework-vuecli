module.exports = {
  root: true,
  env: {
    node: true,
  },
  // 解决eslint对于一些全局变量飘红的问题
  globals: {
    ElMessage: 'readonly',
    ElMessageBox: "readonly",
    ElLoading: "readonly"
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "prettier/prettier": "off",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off"
  },
};
