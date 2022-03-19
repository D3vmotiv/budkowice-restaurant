module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/recommended", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    semi: ["error", "never"],
    "max-len": "off",
    "linebreak-style": "off",
    camelcase: [
      "error",
      {
        properties: "never",
        ignoreDestructuring: true,
        ignoreImports: true,
      },
    ],
    "arrow-parens": ["error", "as-needed"],
    indent: ["error", "tab"],
    "vue/html-indent": [
      "error",
      "tab",
      {
        attribute: 1,
        closeBracket: 1,
      },
    ],
    "vue/multiline-html-element-content-newline": "off",
  },
};
