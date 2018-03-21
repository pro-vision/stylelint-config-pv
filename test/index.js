/* eslint-disable no-console */
/* eslint global-require: "off" */

const stylelint = require("stylelint");
const path = require("path");
const assert = require("assert");

// ////////////////////// test.scss

stylelint
  .lint({
    config: require(".."),
    files: "./test/test.scss",
    formatter: Function.prototype,
  })
  .then(data => {
    const FILEPATH = "test.scss";
    const results = extractResults(data);
    const expected = 0;
    const actual = results[FILEPATH].length;
    assert(
      actual === expected,
      `${FILEPATH} has ${actual} errors, expected ${expected}`
    );
    console.log(`👍  ${FILEPATH}`);
  })
  .catch(err => {
    console.log("Error running tests:", err);
    process.exit(1);
  });

// ////////////////////// errors.scss

stylelint
  .lint({
    config: require(".."),
    files: "./test/errors.scss",
    formatter: Function.prototype,
  })
  .then(data => {
    const FILEPATH = "errors.scss";
    const results = extractResults(data);
    const expected = 6;
    const actual = results[FILEPATH].length;
    assert(
      actual === expected,
      `${FILEPATH} has ${actual} errors, expected ${expected}`
    );
    console.log(`👍  ${FILEPATH}`);
  })
  .catch(err => {
    console.log("Error running tests:", err);
    process.exit(1);
  });

// ///////////////////////////////////////////////// UTILS

function extractResults(data) {
  return data.results.reduce((accumulator, current) => {
    accumulator[path.basename(current.source)] = Array.from(
      current.warnings
    );
    return accumulator;
  }, {});
}
