/* eslint quote-props: [2, "always", {"keywords": false, "unnecessary": true}] */
/* changing rule because we want this file to be JSON-like, in case we need to copy it and paste it somewhere */
module.exports = {
  "plugins": [
    "stylelint-declaration-use-variable"
  ],
  "rules": {
    "sh-waqar/declaration-use-variable": [
      "color",
      "background-color",
      "font"
      ]
  }
};