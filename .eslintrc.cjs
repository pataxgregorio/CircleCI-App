/* eslint-env node */
module.exports = {
  // Use the Vue and Quasar parsers
   rules: {
    'vue/singleline-html-element-content-newline': 'off',
    'vue/html-self-closing': 'off',
    'vue/first-attribute-linebreak': 'off',
    'vue/max-attributes-per-line': 'off',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    // ADD THIS LINE
    requireConfigFile: false
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:quasar/recommended'
  ],
  ignorePatterns: [
    'src-capacitor/android/app/build/intermediates/**',
    'src-capacitor/android/app/src/main/assets/public/**',
    'src-capacitor/android/app/release/app-release/base/assets/**'
  ]
};
