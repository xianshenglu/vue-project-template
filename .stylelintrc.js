module.exports = {
  extends: [
    'stylelint-config-recommended',
    // https://github.com/bjankord/stylelint-config-sass-guidelines
    'stylelint-config-sass-guidelines',
    'stylelint-config-prettier'
  ],
  rules: {
    //! avoid add stylistic rules
    'order/properties-alphabetical-order': null,
    'color-named': 'never',
    'declaration-no-important': true,
    'selector-max-empty-lines': 0,
    'selector-max-id': 1,
    'selector-max-universal': 0,
    'no-unknown-animations': true,
    'max-nesting-depth': [
      1,
      {
        ignore: ['pseudo-classes', 'blockless-at-rules'],
        ignoreAtRules: ['each', 'media', 'supports', 'include']
      }
    ]
  }
}
