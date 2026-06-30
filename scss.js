/* eslint @stylistic/quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */

import plainCss from "./plain-css.js";

const { "rules": plainCssRules } = plainCss;

const namingPatter = [
  "^[a-z_][a-z0-9-_]*[a-z0-9]+$",
  {
    "message": "Expected naming to be BEM compatible"
  }
];

export default {
  "extends": [
    "stylelint-config-standard-scss"
  ],
  "plugins": [
    "stylelint-declaration-strict-value"
  ],
  "rules": {
    ...plainCssRules,
    // stylelint v17 doesn't support scss nesting and want this rule to be disabled
    // see https://stylelint.io/migration-guide/to-17#changed-no-duplicate-selectors-and-selector-no-qualifying-type-for-standard-css-nesting
    "selector-no-qualifying-type": null,
    // reset css `selector-class-pattern` rule from `stylelint-config-standard`
    // and use the scss rule which allows the nested rule (i.e. `&--modifier{}`)
    // with the same kebab case requirement as in `stylelint-config-standard`.
    // `resolveNestedSelectors` must stay `false`: with it enabled the rule
    // resolves `&` against the parent, which (a) flags valid BEM modifiers like
    // `&--modifier` (resolves to `block--modifier`, fails the kebab pattern) and
    // (b) re-reports the parent for every nested `&:pseudo` selector.
    "selector-class-pattern": null,
    "scss/selector-class-pattern": [
      "^([a-z][a-z0-9]*)(-[a-z0-9]+)*$",
      {
        "message": selector => `Expected class selector "${selector}" to be kebab-case`,
        "resolveNestedSelectors": true
      },
    ],
    "scss/at-else-closing-brace-newline-after": null,
    "scss/at-else-closing-brace-space-after": null,
    "scss/at-function-pattern": namingPatter,
    "scss/at-mixin-argumentless-call-parentheses": null,
    "scss/at-mixin-pattern": namingPatter,
    "scss/at-import-partial-extension-disallowed-list": ["scss"],
    "scss/declaration-nested-properties": "never",
    "scss/dollar-variable-empty-line-before": null,
    "scss/dollar-variable-pattern": namingPatter,
    "scss/double-slash-comment-empty-line-before": null,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/partial-no-import": true,
    "scss/percent-placeholder-pattern": namingPatter,
    "scss/selector-no-redundant-nesting-selector": true,
    "scale-unlimited/declaration-strict-value": [
      ["/color$/", "fill"],
      {
        "expandShorthand": true,
        "recurseLonghand": true,
        "ignoreValues": ["currentcolor", "transparent", "inherit", "unset", "none"],
        "disableFix": true,
      },
    ],
  },
};
