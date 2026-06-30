import pvESLintJS from "@pro-vision/eslint-config-pv/javascript";

export default [
  ...pvESLintJS,
  {
    rules: {
      "no-use-before-define": "off"
    },
  }
];
