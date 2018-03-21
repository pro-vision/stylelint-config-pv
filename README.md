# stylelint-config-pv

This package provides pro!vision's [Stylelint](https://github.com/stylelint/stylelint) configuration as an extensible shared config. It follows the [Idiomatic CSS](https://github.com/necolas/idiomatic-css) for ordering properties.

_Inspired by Stylelint's own [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard)_


## Installation
```bash
npm i -DE stylelint-scss stylelint stylelint-order stylelint-declaration-use-variable stylelint-config-pv
```

## Prerequisite
You obviously need stylelint installed. Unless you are only using the plain css rules, you will also need to
install some plugins
```
# default
npm i -DE stylelint  stylelint-scss stylelint-declaration-use-variable stylelint-order

# plain CSS only
npm i -DE stylelint

# scss rules
npm i -DE stylelint-scss stylelint-declaration-use-variable

# idiomatic css
npm i -DE stylelint-order
```


## Usage

We export two configurations for usage in projects, with the possibility to include or exclude Idiomatic CSS

### CSS + SCSS + Idioatic rules

Our default export contains all of our Stylelint rules, including SCSS plugins.
Add an `"extends": ` array to your .stylelintrc:

```
{
  "extends": [
    "stylelint-config-pv"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

### CSS runles only rules

Alternatively, you can import whatever combination of the following rules suits
your project:

```
{
  "extends": [
    "stylelint-config-pv/plain-css",
    "stylelint-config-pv/scss",
    "stylelint-config-pv/order",
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

For information about individual rules see
See
- the [Stylelint rules reference](http://stylelint.io/user-guide/rules/)
- the [SCSS linting rules](https://github.com/kristerkari/stylelint-scss#list-of-rules)
- the [declaration use variable rule](https://github.com/sh-waqar/stylelint-declaration-use-variable)
- the [order rules](https://github.com/hudochenkov/stylelint-order#list-of-rules)

## Text editor integration

There are [a Visual Studio Code plugin](https://github.com/shinnn/vscode-stylelint) and [a Sublime Linter plugin](https://github.com/vieron/stylelint-webpack-plugin) for Stylelint.

According to [the documentation](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins),

> Version 2016.3 onwards has built-in support for stylelint.
