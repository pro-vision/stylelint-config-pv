/* eslint-disable no-console */

import path from "node:path";
import assert from "node:assert";

import stylelint from "stylelint";

import config from "../index.js";

// ////////////////////// test.scss

stylelint
  .lint({
    config,
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
    config,
    files: "./test/errors.scss",
    formatter: Function.prototype,
  })
  .then(data => {
    const FILEPATH = "errors.scss";
    const results = extractResults(data);
    const expected = 12;
    const actual = results[FILEPATH].length;
    assert(
      actual === expected,
      `${FILEPATH} has ${actual} errors and warnings, expected ${expected}`
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
