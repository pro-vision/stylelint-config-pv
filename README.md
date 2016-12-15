# stylelint-config-pv

This package provides pro!vision's [Stylelint](https://github.com/stylelint/stylelint) configuration as an extensible shared config.

_Inspired by Stylelint's own [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)_


## Installation
```bash
npm install --save-dev stylelint-config-pv
```

## Usage

We export two ESLint configurations for usage in projects.

### eslint-config-pv

Our default export contains all of our ESLint rules, including BEM and SCSS plugins.
Add `"extends": "pv"` to your .stylelintrc:

```
{
  "extends": "pv",
  "rules": {
    // you can overwrite individual rules here
  }
}
```

See the [Stylelint rules reference](http://stylelint.io/user-guide/rules/)
for information about individual rules.

## Sublime Text Integration

There is [a Sublime Linter plugin](https://github.com/vieron/stylelint-webpack-plugin) for Stylelint.

## WebStorm Integration
Accordinog to [the documentation](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins),

> Version 2016.3 onwards has built-in support for stylelint.
