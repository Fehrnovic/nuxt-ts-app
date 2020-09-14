module.exports = {
  root: true,
  env: { browser: true, es6: true, node: true },
  extends: [
    "airbnb-base",
    "@nuxtjs",
    "prettier",
    "prettier/vue",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended"
  ],
  plugins: ["prettier"],
  rules: {
    "class-methods-use-this": "off",
    "import/prefer-default-export": "off",
    "prettier/prettier": "error",
    "import/extensions": "off",
    "consistent-return": "off",
    "import/no-mutable-exports": "off",
    "no-param-reassign": "off",
    "vue/no-v-html": "off",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" }
    ]
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.vue"],
      env: { browser: true, es6: true, node: true },
      extends: [
        "airbnb-typescript/base",
        "@nuxtjs",
        "@nuxtjs/eslint-config-typescript",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "prettier/vue",
        "plugin:prettier/recommended",
        "plugin:nuxt/recommended"
      ],
      plugins: ["@typescript-eslint", "prettier"],
      rules: {
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/typedef": [
          "error",
          {
            variableDeclaration: true
          }
        ],
        "@typescript-eslint/indent": "off",
        "class-methods-use-this": "off",
        "import/prefer-default-export": "off",
        "prettier/prettier": "error",
        "import/extensions": "off",
        "consistent-return": "off",
        "vue/no-v-html": "off",
        "no-return-await": "off",
        "no-param-reassign": "off",
        "import/no-mutable-exports": "off",
        "padding-line-between-statements": [
          "error",
          { blankLine: "always", prev: "*", next: "return" }
        ]
      },
      parserOptions: {
        project: "./tsconfig.json",
        extraFileExtensions: [".vue"]
      }
    }
  ]
};
