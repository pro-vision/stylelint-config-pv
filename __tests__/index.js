

const stylelint = require("stylelint");
const fs = require("fs");
const path = require("path");

const config = require("../plain-css.js");
const validCss = fs.readFileSync(path.join(__dirname, "valid-css.css"), "utf8");

const invalidCss = (
`a {
  top: .2em;
}

`);

describe("flags no warnings with valid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: validCss,
      config,
    });
  });

  it("did not error", () => result
    .then((data) => expect(data.errored).toBeFalsy()));

  it("flags no warnings", () => result
    .then((data) => expect(data.results[0].warnings.length).toBe(0)));
});

describe("flags warnings with invalid css", () => {
  let result;

  beforeEach(() => {
    result = stylelint.lint({
      code: invalidCss,
      config,
    });
  });

  it("did error", () => result
    .then((data) => expect(data.errored).toBeTruthy()));

  it("flags one warning", () => result
    .then((data) => expect(data.results[0].warnings.length).toBe(1)));

  it("correct warning text", () => result
    .then((data) => expect(data.results[0].warnings[0].text).toBe("Expected a leading zero (number-leading-zero)")));

  it("correct rule flagged", () => result
    .then((data) => expect(data.results[0].warnings[0].rule).toBe("number-leading-zero")));

  it("correct severity flagged", () => result
    .then((data) => expect(data.results[0].warnings[0].severity).toBe("error")));

  it("correct line number", () => result
    .then((data) => expect(data.results[0].warnings[0].line).toBe(2)));

  it("correct column number", () => {
    const COLUMN_NUMBER = 8;
    return result
    .then((data) => expect(data.results[0].warnings[0].column).toBe(COLUMN_NUMBER));
  });
});
