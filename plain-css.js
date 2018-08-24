/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */
module.exports = {
  "rules": {
    "at-rule-empty-line-before": ["always", {
      "except": [
        "blockless-after-same-name-blockless",
        "first-nested"
      ],
      "ignore": ["after-comment"],
      "ignoreAtRules": ["else"]
    }],
    "at-rule-name-case": "lower",
    "at-rule-name-space-after": "always-single-line",
    "at-rule-semicolon-newline-after": "always",
    "at-rule-semicolon-space-before": "never",
    "block-closing-brace-empty-line-before": "never",
    "block-closing-brace-newline-after": ["always", {
      "ignoreAtRules": ["if", "else"]
    }],
    "block-closing-brace-newline-before": "always-multi-line",
    "block-closing-brace-space-before": "always-single-line",
    "block-no-empty": true,
    "block-opening-brace-newline-after": "always-multi-line",
    "block-opening-brace-space-after": "always-single-line",
    "block-opening-brace-space-before": "always",
    "color-hex-case": "lower",
    "color-hex-length": "short",
    "color-named": "never",
    "color-no-hex": null,
    "color-no-invalid-hex": true,
    "comment-empty-line-before": ["always", {
      "except": ["first-nested"],
      "ignore": ["stylelint-commands"]
    }],
    "comment-no-empty": true,
    "comment-whitespace-inside": "always",
    "custom-property-empty-line-before": ["always", {
      "except": [
        "after-custom-property",
        "first-nested"
      ],
      "ignore": [
        "after-comment",
        "inside-single-line-block"
      ]
    }],
    "declaration-bang-space-after": "never",
    "declaration-bang-space-before": "always",
    "declaration-block-no-duplicate-properties": [true, {
      "ignore": ["consecutive-duplicates-with-different-values"]
    }],
    "declaration-block-no-redundant-longhand-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    "declaration-block-semicolon-newline-after": "always-multi-line",
    "declaration-block-semicolon-space-after": "always-single-line",
    "declaration-block-semicolon-space-before": "never",
    "declaration-block-single-line-max-declarations": 1,
    "declaration-block-trailing-semicolon": "always",
    "declaration-colon-newline-after": null,
    "declaration-colon-space-after": "always-single-line",
    "declaration-colon-space-before": "never",
    "declaration-empty-line-before": ["always", {
      "except": [
        "after-declaration",
        "first-nested"
      ],
      "ignore": [
        "after-comment",
        "inside-single-line-block"
      ]
    }],
    "declaration-no-important": true,
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    "function-calc-no-unspaced-operator": true,
    "function-comma-newline-after": "always-multi-line",
    "function-comma-space-after": "always-single-line",
    "function-comma-space-before": "never",
    "function-linear-gradient-no-nonstandard-direction": true,
    "function-max-empty-lines": 0,
    "function-name-case": "lower",
    "function-parentheses-newline-inside": "always-multi-line",
    "function-parentheses-space-inside": "never-single-line",
    "function-url-quotes": "always",
    "function-url-scheme-blacklist": [],
    "function-whitespace-after": "always",
    "indentation": 2,
    "keyframe-declaration-no-important": true,
    "length-zero-no-unit": true,
    "max-empty-lines": 1,
    "max-nesting-depth": 3,
    "media-feature-colon-space-after": "always",
    "media-feature-colon-space-before": "never",
    "media-feature-name-case": "lower",
    "media-feature-name-no-unknown": true,
    "media-feature-parentheses-space-inside": "never",
    "media-feature-range-operator-space-after": "always",
    "media-feature-range-operator-space-before": "always",
    "media-query-list-comma-newline-after": "always-multi-line",
    "media-query-list-comma-space-after": "always-single-line",
    "media-query-list-comma-space-before": "never",
    "no-empty-source": true,
    "no-eol-whitespace": true,
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
    "no-missing-end-of-source-newline": true,
    "number-leading-zero": "always",
    "number-no-trailing-zeros": true,
    "property-case": "lower",
    "property-no-unknown": true,
    "selector-attribute-brackets-space-inside": "never",
    "selector-attribute-operator-space-after": "never",
    "selector-attribute-operator-space-before": "never",
    "selector-class-pattern": ["^[a-z]{2,5}(-[meh]-[a-zA-Z_0-9-]+)?$", {
      "message": "Expected class selector to match pattern: /^[a-z]{2,5}(-[meh]-[a-zA-Z_0-9-]+)?$/"
    }],
    "selector-combinator-space-after": "always",
    "selector-combinator-space-before": "always",
    "selector-descendant-combinator-no-non-space": true,
    "selector-list-comma-newline-after": "always",
    "selector-list-comma-space-before": "never",
    "selector-max-attribute": 5,
    "selector-max-combinators": 5,
    "selector-max-empty-lines": 0,
    "selector-max-class": 5,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 3,
    "selector-max-type": 5,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "selector-pseudo-class-case": "lower",
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-class-parentheses-space-inside": "never",
    "selector-pseudo-element-case": "lower",
    "selector-pseudo-element-colon-notation": "single",
    "selector-pseudo-element-no-unknown": true,
    "selector-type-case": "lower",
    "selector-type-no-unknown": true,
    "shorthand-property-no-redundant-values": true,
    "string-no-newline": true,
    "string-quotes": "double",
    "time-min-milliseconds": 10,
    "unit-case": "lower",
    "unit-no-unknown": true,
    "value-list-comma-newline-after": "always-multi-line",
    "value-list-comma-space-after": "always-single-line",
    "value-list-comma-space-before": "never",
    "value-list-max-empty-lines": 0,
    "value-no-vendor-prefix": true
  }
};
