const pvESLintJS = require("@pro-vision/eslint-config-pv/javascript");

module.exports = [
  ...pvESLintJS,
  {
    rules: {
      "no-use-before-define": "off"
    },
  }
];
