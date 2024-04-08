/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */

// using properties order from "stylelint-config-clean-order" but with different overall order (e.g. mixins, variables etc)
const cleanOrderConfig = require("stylelint-config-clean-order");

const propertiesOrder = cleanOrderConfig.rules["order/properties-order"];
propertiesOrder[1] = {
  "severity": "warning",
  "unspecified": "bottomAlphabetical",
  "emptyLineMinimumPropertyThreshold": 1000,
};

module.exports = {
  "plugins": ["stylelint-order"],
  "rules": {
    // top level order - i.e., @extend before CSS rules etc
    "order/order": [
      // @extend
      {
        "type": "at-rule",
        "name": "extend",
        "hasBlock": false,
      },

      // Dollar variables (e. g., $variable)
      "dollar-variables",

      // Custom properties (e. g., --property: 10px;)
      "custom-properties",

      // @include
      {
        "type": "at-rule",
        "name": "include",
        "hasBlock": false,
      },

      // CSS declarations (e. g., display: block)
      "declarations",

      // Nested at-rules (e. g., div { @media () {} })
      "at-rules",

      // Nested rules (e. g., a { span {} })
      "rules",
    ],

    "order/properties-order": propertiesOrder,
  },
};
