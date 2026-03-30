---
title: 📋 Upcoming Changelog
sidebar_position: 20
---

Below is a full list of all the changes that are planned for the next release. Please note that this list is subject to change.
The next release is eco 7.0.0, and libreforge 5.0.0, with all other plugins getting a major update to match.

## All plugins
- Added %time% and %count% (of varient of) to lang.yml when reloading - displays reload time and configs loaded.
- Improved PlayableSound class to support category, and enabled toggles universally.

## eco
- Fixed player health resetting on server join (new `enable_health_fix` option in `config.yml`).
- Improved recipe reload speed across all plugins
- Added shapeless recipe support
- Added new attribute modifier arg parser for item lookup
- Added ExcellentEconomy support
- Removed CoinsEngine support
- Added MariaDB support for data storage
- Updated all dependencies, gradle, kotlin, etc.
- Relocated kotlin for improved compatibility.
- Deprecated old methods - please read commit log to see which ones, and update your code accordingly.

## libreforge
- Fixed catch_fish trigger removing XP.
- Added `commands.yml` for adding effect based custom commands.
- Added `placeholders.yml` for custom placeholders, moving out of `config.yml`.
- `static_<time>` and `global_static_<time>` triggers now support placeholders.
- random effect chains, with `weight` args are now dynamic and support math.
- Added support for BetterModel plugin
- `shear` trigger introduced with block support and `shear_entity` has been removed/deprecated.
- AurelliumSkills (not AuraSkills) support has been dropped due to version incompatibility.
- `luck_multiplier` effect is removed.
- Deprecated `drop_item_for_player` effect is removed.
- Deprecated `drop_random_item_for_player` effect is removed.
- Deprecated `run_chain_inline` effect is removed.
- Removed other deprecated methods - please read commit log to see which ones, and update your code accordingly.

## Boosters
- Added `category` to booster, allowing a new booster queue system - boosters with the same category will be queued and applied automatically when the previous expires.
- Added `merge-id` to booster, allowing boosters with the same ID to be merged, extending the time.
- Added BossBars to boosters, with customizable text and color. New `/boosters bossbar` command to manage individual visibility.
- Added `custom-slots` to GUIs.
- Improved `/boosters cancel` command:
  - `/boosters cancel` now runs expiry-effects.
  - `/boosters cancel all [silent]` - cancels all boosters without expiry effects
  - `/boosters cancel <all/booster/category> <category_id/booser_id> [silent]` - cancels boosters by category or ID, with optional silent mode.
- Removed old methods: activation/increment/expiry commands/messages - Please use effects now.

## EcoArmor
- Added partial set effects - effects that apply when wearing an amount of a set.
- Mobs wearing EcoArmor now benefit from the armor's effects.

## xBattlepass/EcoBattlepass
- Renamed xBattlepass to EcoBattlepass in branding, name, and commands.

## EcoBits
- Added plenty of new internal placeholders and formatting options

## EcoCrates
EcoCrates is now a libreforge plugin!
- Removed fake chances.
- Rewards are now individual files (<reward_id>.yml) in /rewards folder.
- Rewards use `win-effects` instead of individual items/commands.
- Rewards have a `name` field for display in the crate GUI.
- Added `open-effects` for crates, which run when the crate is opened, before the reward is given.
- Added `finish-effects` for crates, which run after the reward is given.
- Added effects: `give_virtual_key`, `reward_reset_wins` and `reward_weight_multiplier`.
- Added triggers: `crate_open` and `crate_win`.
- Added filters: `crate` and `crate_reward`.
- Fixed some issues with holograms
- Crates now support eco prices to open, rather than just $.
- Keys are now configured in their own <key_id>.yml files in a /keys folder, allowing a single key to open multiple crates.

## EcoEnchants
- Fixed anvil allowing enchants when "Too Expensive" is shown
- Fixed spears not working in anvil correctly.
- Improved anvil hardness when conflicts are present.
- Fixed anvil overriding to null before any logic
- Added `required` enchants section - enchants that are required for an enchant to be applied.
- Added close button to enchants GUI.
- Foraging enchant now defaults to Hoe.
- Contagion enchant now has chances.

## EcoItems
- Improved pickup/drop behaviour

## EcoJobs
- Added custom GUI titles
- Removed deprecated methods: `level-up-commands`, replaced with `level-up-effects`.

## EcoMobs
- Added BetterModel support.

## EcoPets
- Added new placeholders related to the active pet.
- Split X and Z offset into different config.yml options
- Removed deprecated methods: `level-up-commands`, replaced with `level-up-effects`.

## EcoShop
- Fixed items being sold for no value when `ecoshop.sell.*` permissions is missing.
- Added global/player sell limits and placeholders.
- Added `/ecoshop resetsells` command.
- The `resetbuys` and `resetsells` commands now support `all` for player and item.
- Removed deprecated methods: `sell.sell-message`, `buy.buy-message`, `sell.sell-commands`, `commands`, `buy.require`, & `sell.require`, replaced with effects and conditions now.

## All other plugins
- No specific changes/already listed in `All Plugins` section.