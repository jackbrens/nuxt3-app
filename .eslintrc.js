module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['@nuxtjs', 'plugin:vue/vue3-recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'no-undef': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': 'error',
  },
}
