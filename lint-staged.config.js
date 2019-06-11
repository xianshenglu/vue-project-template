module.exports = {
  '*.(js|vue)': ['eslint --fix', 'prettier --write', 'git add'],
  '*.(css|less|sass|scss|vue|htm|html)': [
    'stylelint --fix',
    'prettier --write ',
    'git add'
  ],
  '*.(htm|html)': ['htmlhint', 'prettier --write', 'git add']
}
