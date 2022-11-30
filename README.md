# @pro-vision/stylelint-config-pv

This package provides pro!vision's [Stylelint](https://github.com/stylelint/stylelint) configuration as an extensible shared config. Most rules are inherited from [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss), it also follows the [Idiomatic CSS](https://github.com/necolas/idiomatic-css) for ordering properties .

## Installation

```bash
npm i @pro-vision/stylelint-config-pv --save-dev
```

## Prerequisite

You obviously need stylelint installed. If using the prettier rules, it is also expected that prettier is already installed.

`@pro-vision/stylelint-config-pv` has all of its needed stylelint plugins as it's dependencies, in general you don't have to declare them. But if you want to update these dependencies or there is an issue due common dependencies with some of your other third party npm dependencies, then install these manually:

```bash
npm i stylelint-config-clean-order stylelint-config-prettier stylelint-config-standard stylelint-config-standard-scss stylelint-declaration-strict-value stylelint-order stylelint-prettier stylelint-scss --save-dev
```

## Usage

We export Five configurations for usage in projects.

### All

Our default export contains all of our Stylelint rules, including SCSS plugins, order related rules/plugins and configuration for prettier integration.

Add an `"extends":` array to your .stylelintrc:

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

### Plain CSS

Suited fo plain css file. Extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rule set.

(This does not include the `order` module. Which can be added to the `extends` list if desired.)

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv/plain-css"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

### SCSS

Rules for SCSS code. This includes the `plain-css` rules. And [stylelint-config-standard-scss](https://github.com/stylelint-scss/stylelint-config-standard-scss) with some modification.

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv/scss"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

Or use as

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv/scss",
    "@pro-vision/stylelint-config-pv/order",
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

for i.e. all rules **except** prettier;

### Order

Adds the [stylelint-order](https://github.com/hudochenkov/stylelint-order) plugin with a rule set for a specific order of content.

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv/order"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

### Prettier

Enables/Disables prettier related rules. Expects `prettier` to have been installed

```js
{
  "extends": [
    "@pro-vision/stylelint-config-pv/prettier"
  ],
  "rules": {
    // you can overwrite individual rules here
  }
}
```

For information about individual rules see

- the [Stylelint rules reference](http://stylelint.io/user-guide/rules/)
- the [SCSS linting rules](https://github.com/kristerkari/stylelint-scss#list-of-rules)
- the [properties order](stylelint-config-clean-order)

## Text editor integration

There are [a Visual Studio Code plugin](https://github.com/shinnn/vscode-stylelint) and [a Sublime Linter plugin](https://github.com/vieron/stylelint-webpack-plugin) for Stylelint.

According to [the documentation](https://github.com/stylelint/stylelint/blob/master/docs/user-guide/complementary-tools.md#editor-plugins) current versions of WebStorm also support Stylelint.

> Version 2016.3 onwards has built-in support for stylelint.

Furthermore there is support in [IntelliJ Ultimate](https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html).
