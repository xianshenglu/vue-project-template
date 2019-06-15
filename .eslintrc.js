// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    // https://eslint.vuejs.org/user-guide/#usage
    parser: 'babel-eslint',
    ecmaVersion: 2019
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard',
    // rules for vue, didn't include any js rules lib like standard or airbnb
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention.
    'plugin:vue/recommended',
    // turn off ESLint default stylistic rules
    // https://github.com/prettier/eslint-config-prettier/blob/master/index.js
    'prettier',
    // turn off stylistic rules defined in standard
    // https://github.com/prettier/eslint-config-prettier/blob/master/standard.js
    'prettier/standard',
    // turn off stylistic rules defined in plugin:vue/recommended
    // https://github.com/prettier/eslint-config-prettier/blob/master/vue.js
    'prettier/vue'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    //! avoid add stylistic rules
    // non stylistic rules which are not in the standard but we might need
    'no-debugger': 'error',
    'no-console': 'error',
    'no-extra-semi': 'error',
    'no-prototype-builtins': 'error',
    'require-atomic-updates': 'error',
    'array-callback-return': ['error', { allowImplicit: true }],
    'block-scoped-var': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-implicit-coercion': 'error',
    'no-extra-label': 'error',
    'no-eq-null': 'error',
    'no-else-return': 'error',
    'no-case-declarations': 'error',
    'vars-on-top': 'error',
    'require-unicode-regexp': 'error',
    'require-await': 'error',
    radix: 'error',
    'prefer-promise-reject-errors': ['error', { allowEmptyReject: true }],
    'prefer-named-capture-group': 'error',
    'no-void': 'error',
    'no-useless-concat': 'error',
    'no-useless-catch': 'error',
    'no-script-url': 'error',
    'no-return-await': 'error',
    'no-undef': 'error',
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.'
      }
    ],
    // todo not good enough for confusing let foo=()=>{}
    'arrow-body-style': ['error', 'as-needed'],
    'arrow-parens': ['error', 'as-needed'],
    'no-confusing-arrow': ['error', { allowParens: true }],
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'require-yield': 'error',
    'symbol-description': 'error',
    // eslint-plugin-vue
    'vue/v-on-function-call': ['error', 'never'],
    'vue/require-direct-export': 'error',
    // 'vue/no-empty-pattern': 'error',
    'vue/eqeqeq': 'error',
    'vue/comma-dangle': 'error',
    // too many violations
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ]
  }
}
