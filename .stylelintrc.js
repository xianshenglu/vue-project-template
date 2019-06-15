module.exports = {
  extends: [
    'stylelint-config-recommended',
    // https://github.com/bjankord/stylelint-config-sass-guidelines
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier'
  ],
  plugins: ['stylelint-color-format', 'stylelint-no-indistinguishable-colors'],
  rules: {
    //! avoid add stylistic rules
    'color-named': 'never',
    'declaration-no-important': true,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-universal': 0,
    'no-unknown-animations': true,
    'selector-class-pattern': null,
    'declaration-property-value-blacklist': null,
    // todo  reduce to 1 when BEM is determined
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules'],
        ignoreAtRules: ['each', 'media', 'supports', 'include']
      }
    ],
    'scss/at-import-partial-extension-blacklist': null,
    'scss/at-import-partial-extension-whitelist': ['scss'],
    'scss/dollar-variable-pattern': /--.+/u,
    'scss/partial-no-import': null,
    'scss/double-slash-comment-inline': null,
    'scss/double-slash-comment-empty-line-before': null,
    'scss/selector-nest-combinators': null,
    'scss/dollar-variable-default': null,
    'scss/at-function-pattern': null,
    'scss/at-mixin-pattern': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'plugin/stylelint-no-indistinguishable-colors': true,
    'color-format/format': {
      format: 'rgb'
    }
  }
}
