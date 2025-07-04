---
title: How to make a Job
sidebar_position: 1
---

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoJobs/tree/master/eco-core/core-plugin/src/main/resources/jobs).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add jobs
Each job is its own config file, placed in the `/jobs/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Job is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Job Config

```yaml
name: "&6Miner" # The display name of the job
description: "&8&oLevel up by mining blocks" # The description of the job
unlocked-by-default: true # If the job should be unlocked by default
reset-on-quit: false # If job progress should be reset when quitting

# The price to join this job (set to 0 to disable)
# Read here for more: https://plugins.auxilor.io/all-plugins/prices
join-price:
  value: 0
  type: coins
  display: "&a$%value%"

# Lore shown when clicking on the job icon to join it
# Reference with %join_lore%
join-lore: []

# A list of effects to run when the player joins the job.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
join-effects:
  - id: broadcast
    args:
      message: "&8» &a%player% &8joined the &6Miner &8job!"

# The price to leave this job (set to 0 to disable)
# Read here for more: https://plugins.auxilor.io/all-plugins/prices
leave-price:
  value: 20000
  type: coins
  display: "&a$%value%"
  
# A list of effects to run when the player leaves the job.
# Read https://plugins.auxilor.io/effects/configuring-an-effect
leave-effects:
  - id: send_message
    args:
      message: "&8» &8You left the &6Miner &8job!"

# Lore shown on the confirm leave button
# Reference with %leave_lore%
leave-lore:
  - " &8» This will cost %leave_price%"

# There are two ways to specify level XP requirements:  
# 1. A formula to calculate for infinite levels  
# 2. A list of XP requirements for each level  
  
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

# An XP gain method takes a trigger, a multiplier, conditions, and filters.
# The 'multiplier' takes the value produced by the trigger and multiplies it
# Alternatively, you can use 'value' to count a specific number and not a multiplier
xp-gain-methods:
  - trigger: mine_block
    multiplier: 0.5 # You can also use "value" here (see above comment)
    conditions: [ ]
    filters:
      items:
        - "*wooden_pickaxe"
        - "*stone_pickaxe"
        - "*iron_pickaxe"
        - "*golden_pickaxe"
        - "*diamond_pickaxe"
        - "*netherite_pickaxe"

# Custom placeholders to be used in descriptions,
# Don't add % to the IDs, this is done automatically
# The value takes a %level% placeholder and is a mathematical expression
level-placeholders:
  - id: "money"
    value: "%level% * 0.4"
  - id: "blocks"
    value: "ceil(10 - %level% / 10)"

# The text shown with the %effects% placeholder
# The number dictates the minimum level for this text to show for
# Adding new levels will override this text on those levels or above
effects-description:
  1:
    - "&8» &8Earn &a$%money%&8 for each &a%blocks%&8 blocks mined"

# Same as above, but for %rewards%
rewards-description:
  1:
    - "&8» &8Earn &a$%money%&8 for each &a%blocks%&8 blocks mined"

# Same as above, but for %level_up_messages%
level-up-messages:
  1:
    - "&8» &8Earn &a$%money%&8 for each &a%blocks%&8 blocks mined"

# Effects to run when the job levels up  
# %level% is the level the job leveled up to.  
# If you want to restrict this to certain levels, you can use  
# require: %level% = 20, or require: %level% < 50, etc.  
# If you want a reward to run every x levels, you can use  
# every: 1, or every: 12, etc  
level-up-effects:  
  - id: give_item  
    args:  
      items:  
        - diamond  
      every: 5 # Gives the reward every 5 levels  
      require: "%level% = 5" # Requires level 5 before receiving rewards

# The effects for the job, has %level% as a placeholder
effects:
  - id: give_money
    args:
      every: "ceil(10 - %level% / 10)"
      amount: "0.4 * %level%"
    filters:
      items:
        - "*wooden_pickaxe"
        - "*stone_pickaxe"
        - "*iron_pickaxe"
        - "*golden_pickaxe"
        - "*diamond_pickaxe"
        - "*netherite_pickaxe"
    triggers:
      - mine_block

# The conditions for the job, also has %level% as a placeholder
conditions: [ ]

# The icon in GUIs
icon: player_head texture:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODU3MDVjZjg2NGRmMmMxODJlMzJjNDg2YjcxNDdjYmY3ODJhMGFhM2RmOGE2ZDYxNDUzOTM5MGJmODRmYjE1ZCJ9fX0="
```

## Understanding all the sections

**name:** The name of the job in-game.

**description:** The description of the job.

**join/leave-price:** The cost of joining or leaving the job.

**join/leave-lore:** The lore shown to the player when they join or leave a job.

**level-xp-requirements:** A list of XP requirements for each level.
```yaml
xp-requirements:
  - 50
  - 125
  - 200
```

**xp-formula:** A formula to calculate XP requirements for each level.

**max-level:** The maximum level for the job (Optional).

**xp-gain-methods:** The trigger, multiplier/value, conditions and filters that will award job XP.

**level-placeholders:** Custom placeholders to be used in descriptions.

**effects-description:** Job specific effect descriptions.

**rewards-description:** Job specific reward descriptions.

**level-up-messages:** Job specific level up messages.

**level-commands:** Commands to be executed when levelling the job.

**icon:** The item to show in /jobs, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

### Effects & Conditions

You can configure effects, conditions, filters, and mutators in this section to run when the job is levelled up.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

## Internal Placeholders

| Placeholder       | Value                                                       |
| ----------------- | ----------------------------------------------------------- |
| `%level%`         | The player's job level. Useful for creating scaling effects |
| `%level_numeral%` | The player's job level shown in Roman Numerals              |
