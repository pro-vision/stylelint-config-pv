/*
 * this is a copy of
 * https://github.com/ream88/stylelint-config-idiomatic-order/
 * which we couldn't install because it relies on stylelint-config-standard
 * which we were having problem installing
 * https://github.com/stylelint/stylelint-config-recommended/issues/21
 */
function trbl(prefix) {
  const rules = [];

  if (prefix) {
    rules.push(prefix);
    prefix += "-";
  }
  else {
    prefix = "";
  }

  return rules.concat([
    `${prefix}top`,
    `${prefix}right`,
    `${prefix}bottom`,
    `${prefix}left`
  ]);
}

function minMax(suffix) {
  return [suffix, `min-${suffix}`, `max-${suffix}`];
}

const positioning = []
  .concat([
    "position",
    "z-index"
  ])
  .concat(trbl());

const displayAndBoxModel = []
  .concat([
    "display",
    "overflow"
  ])
  .concat(minMax("width"))
  .concat(minMax("height"))
  .concat([
    "box-sizing",
    "flex",
    "flex-basis",
    "flex-direction",
    "flex-flow",
    "flex-grow",
    "flex-shrink",
    "flex-wrap",
    "align-content",
    "align-items",
    "align-self",
    "justify-content",
    "order"
  ])
  .concat(trbl("padding"))
  .concat(trbl("border"))
  .concat(trbl("margin"));

module.exports = {
  plugins: [
    "stylelint-order"
  ],
  rules: {
    "order/order": [
      "custom-properties",
      "dollar-variables",
      {
        "type": "at-rule",
        "name": "extend",
        "hasBlock": false
      },
      "declarations",
      "rules"
    ],
    "order/properties-order": [
      positioning.concat(displayAndBoxModel),
      { unspecified: "bottomAlphabetical" }
    ]
  }
};