/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */

const { "rules": plainCssRules } = require("./plain-css");

const namingPatter = [
  "^[a-z_][a-z0-9-_]*[a-z0-9]+$",
  {
    "message": "Expected naming to be BEM compatible"
  }
];

module.exports = {
  "extends": [
    "stylelint-config-standard-scss"
  ],
  "plugins": [
    "stylelint-declaration-strict-value"
  ],
  "rules": {
    ...plainCssRules,
    "scss/at-else-closing-brace-newline-after": null,
    "scss/at-else-closing-brace-space-after": null,
    "scss/at-function-pattern": namingPatter,
    "scss/at-mixin-argumentless-call-parentheses": null,
    "scss/at-mixin-pattern": namingPatter,
    "scss/at-import-partial-extension-blacklist": ["scss"],
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
