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

# The price to leave this job (set to 0 to disable)
# Read here for more: https://plugins.auxilor.io/all-plugins/prices
leave-price:
  value: 20000
  type: coins
  display: "&a$%value%"

# Lore shown on the confirm leave button
# Reference with %leave_lore%
leave-lore:
  - " &8» This will cost %leave_price%"

# The xp requirements for each job level - add new levels by adding more to this list
level-xp-requirements:
  - 100
  - 120
  - 150
  - 180
  - 210
  - 250
  - 300
  - 360
  - 430
  - 520
  - 620
  - 740
  - 890
  - 1000

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

# Commands to be sent on levelup, can be formatted two ways:
# level:command (e.g. 10:eco give %player% 1000), which would execute that command for level 10
# command (e.g. eco give %player% 5000), which would execute that command for all levels
level-commands:
	- 1:eco give %player% 1000 # Runs the command at level 1
	- eco give %player% 1000 # Runs the command at every level up

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
