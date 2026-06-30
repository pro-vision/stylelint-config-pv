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
