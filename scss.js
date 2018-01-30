/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */
module.exports = {
  "plugins": [
    "stylelint-scss"
  ],
  "rules": {
    "scss/at-else-closing-brace-newline-after": "always",
    "scss/at-else-closing-brace-space-after": "never",
    "scss/at-else-empty-line-before": "never",
    "scss/at-else-if-parentheses-space-before": "always",
    "scss/at-function-parentheses-space-before": "always",
    "scss/at-mixin-argumentless-call-parentheses": "always",
    "scss/at-mixin-parentheses-space-before": "always",
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    "scss/at-rule-no-unknown": true,
    "scss/declaration-nested-properties": "never",
    "scss/declaration-nested-properties-no-divided-groups": true,
    "scss/dollar-variable-empty-line-before": null,
    "scss/dollar-variable-colon-newline-after": "always",
    "scss/dollar-variable-colon-newline-before": "never",
    "scss/dollar-variable-colon-space-after": "never",
    "scss/dollar-variable-colon-space-before": "never",
    "scss/double-slash-comment-empty-line-before": null,
    "scss/double-slash-comment-inline": null,
    "scss/double-slash-comment-whitespace-inside": "always",
    "scss/media-feature-value-dollar-variable": "always",
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true,
    "scss/partial-no-import": true,
    "scss/selector-no-redundant-nesting-selector": true
  }
};