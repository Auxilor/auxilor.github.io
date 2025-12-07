---
title: How to make a Skill
sidebar_position: 1
---

## Skills
Skills are levelled up by completing certain tasks, and give effects, stats, and other bonuses
when levelling up.

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoSkills/tree/master/eco-core/core-plugin/src/main/resources/skills).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## Default Skills

| Skill       | Task                      |
| ----------- | ------------------------- |
| Mining      | Break blocks to earn XP   |
| Combat      | Kill mobs to earn XP      |
| Enchanting  | Enchant items to earn XP  |
| Farming     | Harvest crops to earn XP  |
| Woodcutting | Cut down trees to earn XP |
| Fishing     | Fish to earn XP           |
| Alchemy     | Brew potions to earn XP   |
| Armory      | Take damage to earn XP    |
| Exploration | Move to earn XP           |
## How to add skills
Each skill is its own config file, placed in the `/skills/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Skill is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Skill Config

```yaml
name: Mining # The display name of the skill
description: Break blocks to earn XP # The description of the skill

# Options for the GUI
gui:
  enabled: true # (Optional) If this skill should be shown in the GUI
  icon: player_head texture:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmIxYzI2OGVmZWM4ZDdkODhhMWNiODhjMmJmYTA5N2ZhNTcwMzc5NDIyOTlmN2QyMDIxNTlmYzkzY2QzMDM2ZCJ9fX0="
  lore:
    - "&fImproves Stats:"
    - "&8» &r%ecoskills_defense_name%"
    - "&8» &r%ecoskills_ferocity_name%"
    - "&f"
    - "&fEffects:"
    - "&8» &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"
    - "   %ecoskills_versatile_tools_description%"
    - "&8» &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"
    - "   %ecoskills_spelunking_description%"
    - "&8» &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"
    - "   %ecoskills_dynamic_mining_description%"
  position:
    row: 3
    column: 3

hide-before-level-1: true # If this skill should be hidden before level 1

# There are two ways to specify level XP requirements:
#  1. A formula to calculate for infinite levels
#  2. A list of XP requirements for each level

# Formula
# xp-formula: (2 ^ %level%) * 25
# max-level: 100 # (Optional) The max level, if not specified, there is no max level

# List
xp-requirements:
  - 50
  - 125
  - 200
  - 300
  - 500
  - 750
  - 1000
  - 1500
  - 2000
  - 3500
  - 5000
  - 7500
  - 10000

# The rewards given on level up
# You specify a reward (either a stat or an effect),
# the number of levels to give it, and optionally
# a start and end level, which are inclusive.

# An example reward config:
# - reward: strength
#   levels: 1
#   start-level: 10
#   end-level: 20
#   every: 2

rewards:
  - reward: defense
    levels: 2

  - reward: ferocity
    levels: 1
    start-level: 15

  - reward: versatile_tools
    levels: 1

  - reward: spelunking
    levels: 1
    start-level: 10

  - reward: dynamic_mining
    levels: 1
    every: 2

# Effects to run when the skill levels up
# %level% is the level the skill leveled up to.
# If you want to restrict this to certain levels, you can use
# require: %level% = 20, or require: %level% < 50, etc.
# If you want a reward to run every x levels, you can use
# every: 1, or every: 12, etc
level-up-effects:
  - id: give_money
    args:
      amount: 1000 * %level%
  - id: give_item
	args:
	  items:
	    - diamond
	  every: 5 # Gives the reward every 5 levels
	  require: %level% = 5 # Requires level 5 before receiving rewards

# Custom placeholders to be used in descriptions,
# Don't add % to the IDs, this is done automatically
# The value takes a %level% placeholder and is a mathematical expression
placeholders:
  money: "%level% * 0.4"
  blocks: "ceil(10 - %level% / 10)"

# The chat messages to send on level up,
# and the lore that will be shown with %rewards% in the GUI

# The number dictates the minimum level for this text to show for
# Adding new levels will override this text on those levels or above
reward-messages:
  1:
    - " &8» &r&f+2 %ecoskills_defense_name%"
    - " &8» &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"
    - "    %ecoskills_versatile_tools_description%"
    - " &8» &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"
    - "    %ecoskills_dynamic_mining_description%"
  10:
    - " &8» &r&f+2 %ecoskills_defense_name%"
    - " &8» &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"
    - "    %ecoskills_versatile_tools_description%"
    - " &8» &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"
    - "    %ecoskills_spelunking_description%"
    - " &8» &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"
    - "    %ecoskills_dynamic_mining_description%"
  15:
    - " &8» &r&f+2 %ecoskills_defense_name%"
    - " &8» &r&f+1 %ecoskills_ferocity_name%"
    - " &8» &r&6%ecoskills_versatile_tools_name% %ecoskills_versatile_tools_numeral%"
    - "    %ecoskills_versatile_tools_description%"
    - " &8» &r&6%ecoskills_spelunking_name% %ecoskills_spelunking_numeral%"
    - "    %ecoskills_spelunking_description%"
    - " &8» &r&6%ecoskills_dynamic_mining_name% %ecoskills_dynamic_mining_numeral%"
    - "    %ecoskills_dynamic_mining_description%"

# An XP gain method takes a trigger, a multiplier, conditions, args and filters.
# The 'multiplier' takes the value produced by the trigger and multiplies it
# Alternatively, you can use 'value' to count a specific number and not a multiplier
xp-gain-methods:
  - trigger: mine_block
    multiplier: 0.5 # You can also use "value" here (see above comment)
    args: # (Optional)
	  chance: 50
    filters: # (Optional)
      blocks:
        - netherrack

  - trigger: mine_block
    multiplier: 1
    filters:
      blocks:
        - stone
        - diorite
        - granite
        - andesite
        - cobblestone

# Conditions that must be met to gain XP. While you can add conditions to xp
# gain methods, if you have many this can be annoying, so this is global.
conditions: [ ]
```

## Understanding all the sections

**name:** The name of the skill in-game.

**description:** The description of the skill.

**gui:** See below.

**hide-before-level-1:** If the skill should show as "Unknown" before levelling up (true/false).

**xp-requirements:** A list of XP requirements for each level.
```yaml
xp-requirements:
  - 50
  - 125
  - 200
```

**xp-formula:** A formula to calculate XP requirements for each level.

**max-level:** The maximum level for the skill (Optional).

**rewards:** The rewards given on level up - must be [stats](https://plugins.auxilor.io/ecoskills/how-to-make-a-stat) or [effects](https://plugins.auxilor.io/ecoskills/how-to-make-an-effect). See below for more info.

**level-up-effects:** Effects to run when the skill is levelled up (Supports triggered effects). See [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect). You can use a `require` argument here for level requirements, for example:
```yaml
level-up-effects:
  - id: run_command
    args:
      command: "give %player% diamond 1"
      require: "%level% < 10"
```

**placeholders:** Custom placeholders to be used in descriptions.

**reward-messages:** Messages to send in chat on level up.

**xp-gain-methods:** The trigger, multiplier/value, conditions, args and filters that will award skill XP.

**conditions:** Global conditions that must be met to gain skill XP. See [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

### GUI

**enabled:** If the skill should show in /skills.

**icon:** The item to show in /skills, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**lore:** The lore to show in /skills when hovering the icon. 

**position:** The location of the icon in /skills, using row and column numbers.

### Rewards

**reward:** The ID of the [stat](https://plugins.auxilor.io/ecoskills/how-to-make-a-stat) or [effect](https://plugins.auxilor.io/ecoskills/how-to-make-an-effect).

**levels:** The amount of levels to give the stat or effect.

**start-level:** (Optional) The skill level to start giving the stat or effect (inclusive).

**end-level:** (Optional) The skill level to stop giving the stat or effect (inclusive).

**every:** (Optional) If the stat or effect should be given every x levels.

### Effects & Conditions

You can configure effects, conditions, filters, and mutators in this section to run when the skill is levelled up.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

## Internal Placeholders

| Placeholder       | Value                                                                      |
| ----------------- |----------------------------------------------------------------------------|
| `%level%`         | The player's skill level. Useful for creating scaling effects              |
| `%level_numeral%` | The player's skill level shown in Roman Numerals                           |
| `%level_x%`         | The player's skill level, +/- a value. eg. `%level_-1%` is current level-1 |
| `%level_x_numeral%` | The player's skill level, +/- a value, shown as Numerals                   |
