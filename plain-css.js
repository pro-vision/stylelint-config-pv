/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */

const namingPatter = [
  "^[a-z][a-z0-9-_]*[a-z0-9]+$",
  {
    "message": name => `Expected "${name}" to be BEM compatible`
  }
];

module.exports = {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "at-rule-empty-line-before": [
      "always",
      {
        "except": ["blockless-after-same-name-blockless", "first-nested"],
        "ignore": ["after-comment"],
        "ignoreAtRules": ["else"],
      },
    ],
    "comment-no-empty": true,
    "custom-property-pattern": namingPatter,
    "declaration-colon-newline-after": null,
    "declaration-no-important": true,
    "keyframes-name-pattern": namingPatter,
    "length-zero-no-unit": [
      true,
      {
        "ignore": ["custom-properties"],
      },
    ],
    "max-nesting-depth": 3,
    "selector-max-attribute": 5,
    "selector-max-combinators": 5,
    "selector-max-class": 5,
    "selector-max-compound-selectors": 3,
    "selector-max-id": 3,
    "selector-max-type": 5,
    "selector-max-universal": 1,
    "selector-no-qualifying-type": true,
    "time-min-milliseconds": 10,
  },
};
