# 6.0.0

- Changed: (BREAKING) **minimum Node version is now `^22.22.2 || ^24.15.0 || >=26.0.0`** (`engines` field updated). Comes from `stylelint@18.0.0`, which dropped older Node versions; `stylelint-config-standard@41` and `stylelint-config-standard-scss@18` require the same.
- Changed: (BREAKING) **5 rules are now enabled**. All of them come from `stylelint-config-recommended@19`, which is pulled in via `stylelint-config-standard@41` (for `plain-css.js`) and via `stylelint-config-standard-scss@18` → `stylelint-config-recommended-scss@18` (for `scss.js` / `index.js`). Existing projects may see new errors:
  - `at-charset-rule-no-invalid` — new rule in `stylelint@18.0.0`.
  - `value-no-invalid` — new rule in `stylelint@18.0.0`; reports unparsable values and invalid math such as `calc(1px + 2)`. It takes over the invalid-value reports that `declaration-property-value-no-unknown` no longer makes since `stylelint@18.0.0`.
  - `selector-no-unmatchable` — new rule in `stylelint@17.15.0`.
  - `selector-no-deprecated` — existing stylelint rule, now enabled for the first time.
  - `selector-no-invalid` — existing stylelint rule, now enabled for the first time.
- Changed: (BREAKING) the rule `declaration-block-single-line-max-declarations` was removed from stylelint (`stylelint@18.0.0`) and from `stylelint-config-standard@41`. Projects that configure it themselves must remove it (stylelint now reports it as an unknown rule).
- Changed: (BREAKING, for CLI users) `stylelint@18.0.0` parses CLI arguments with `node:util.parseArgs`: short aliases are gone, camelCase flags are now kebab-case (e.g. `--ignorePath` → `--ignore-path`), `--fix` needs `=` before a value (`--fix=lax`), and boolean flags are negated with `--no-…`. Check the `stylelint` calls in your npm scripts. See the [stylelint 18 migration guide](https://stylelint.io/migration-guide/to-18) for the remaining breaking changes (none of them affect this config).
- Added (available, not enabled): new rules in `stylelint@18.0.0` — `declaration-property-custom-property-allowed-list` and the experimental `value-type-custom-property-required-list`. New options: `ignoreFunctions` for `color-named` / `color-no-hex` (`stylelint@17.15.0`) and `languageOptions.syntax` for `function-no-unknown` (`stylelint@18.0.0`).
- Changed: updated dependencies:
  - `stylelint` `17.14.0` → `18.0.0` — major bump (see the breaking changes above and the [stylelint changelog](https://stylelint.io/changelog/)).
  - `stylelint-config-standard` `40.0.0` → `41.0.0` — major bump; requires `stylelint@18`, updates to `stylelint-config-recommended@19` (newly enabled rules above), removes `declaration-block-single-line-max-declarations`.
  - `stylelint-config-standard-scss` `17.0.0` → `18.0.0` — major bump; requires `stylelint@18`, updates to `stylelint-config-standard@41` and `stylelint-config-recommended-scss@18` (which brings `stylelint-scss@7.5.0`, no new rules).
  - `stylelint-declaration-strict-value` `1.11.1` → `1.13.0` — minor update; adds `stylelint@18` support.
  - `stylelint-order` `8.1.1` → `8.1.3` — patch update; adds `stylelint@18` support.
  - `stylelint-prettier` `5.0.3` → `5.1.0` — minor update.
- Changed: updated dev dependencies (no effect on consumers): `@pro-vision/eslint-config-pv` `5.0.0` → `6.0.0` (ESLint 10), `prettier` `3.6.2` → `3.10.1`.

# 5.0.0

- Changed: (BREAKING) **the package is now ESM-only** (`"type": "module"`, `export default` instead of `module.exports`). This was required because `stylelint-config-clean-order@10` and `stylelint@17` dropped their CommonJS builds, so the config could no longer `require()` them. Consumers that `extend` this config in their stylelint config are unaffected (stylelint loads ESM and CJS configs alike). Code that `require()`s this package directly now needs Node `>=22.12.0` (which supports `require()` of ESM) or should switch to `import`.
- Changed: (BREAKING) **property order changed** due to `stylelint-config-clean-order@10`. Notably `border` / `border-radius` now sort *before* typography (e.g. `font-family`), and `color` / `background` come after. Existing projects will see new `order/properties-order` warnings until styles are reordered (the rule runs at `warning` severity, so it will not fail builds).
- Changed: added an `engines` field (`node: >=22.12.0`) to match the runtime required by the updated dependencies.
- Changed: (BREAKING) updated dependencies to their latest major versions:
  - `stylelint` `^16.5.0` → `17.14.0` — major bump; raises the minimum Node version and changes/removes some rules (see the [stylelint changelog](https://stylelint.io/changelog/)). Use `scss/selector-class-pattern` instead of `selector-class-pattern` rule when using scss only nested selectors e.g. `&--primary {}`.
  - `stylelint-config-clean-order` `^5.4.2` → `10.0.0` — major bump; ESM-only and a reworked property order (see the property-order note above).
  - `stylelint-config-standard` `^36.0.0` → `40.0.0` — major bump; updated/added rules in the standard base config.
  - `stylelint-config-standard-scss` `^13.1.0` → `17.0.0` — major bump; updated/added SCSS rules in the standard base config.
  - `stylelint-order` `^6.0.4` → `8.1.1` — major bump of the order plugin.
  - `stylelint-declaration-strict-value` `^1.10.4` → `1.11.1` — minor/patch update.
  - `stylelint-prettier` `^5.0.0` → `5.0.3` — patch update.

# 4.0.0

- Changed: (BREAKING) update to stylelint@16.5.0, this needs node >= `18.12.0` (for more info including the rules which are removed incase you were using them, see [v16 changelog](https://stylelint.io/changelog/#1600))
- Changed: removed deprecated rule `declaration-colon-newline-after` which was already deactivated
- Changed: replace deprecated rule `at-import-partial-extension-blacklist` with `with at-import-partial-extension-disallowed-list`

# 3.0.0

- Changed: use `stylelint-config-standard` and `stylelint-config-standard-scss` as the base for the rules
- Changed: replace deprecated `stylelint-declaration-use-variable` with `stylelint-declaration-strict-value` plugin
- Changed: add new config for prettier
- Changed: update some rules, including the order

# 2.0.4

- Changed: Extend the scoped package in .stylelintrc

# 2.0.3

- Changed: Update README to match new package origin

# 2.0.2

- Changed: Fix empty line rule before @else blocks

# 2.0.1

- Changed: Compatible with stylelint 9.1.3
- Changed: order now includes comprehensive list of all CSS properties

# 2.0.0

- Changed: Compatible with stylelint 8.4.0
- Added: introduced order plugin

# 1.0.0

- Changed: licence. Ready for release

# 0.2.6

- Fixed: made pattern case insenstive

# 0.2.5

- Fixed: added border- properties

# 0.2.4

- Fixed: added files array to package.json

# 0.2.2

- Fixed: package.json repository field

# 0.2.0

- Fixed: publishing issues

# 0.1.0

- Initial release
