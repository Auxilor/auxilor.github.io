---
title: "How to make a custom job"
sidebar_position: 2
---

## Default config

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoJobs/blob/master/eco-core/core-plugin/src/main/resources/jobs/)

## How to add jobs
Jobs are each config files placed in the `/jobs/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Typical Job Config

```yaml
# The display name of the job
name: "&6Miner"

# The description of the job
description: "&8&oLevel up by mining blocks"

# If the job should be unlocked by default
unlocked-by-default: true

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
  - 1300
  - 1500
  - 1900
  - 2200
  - 2700
  - 3200
  - 3800
  - 4600
  - 5500
  - 6600
  - 7900
  - 9500
  - 11500
  - 14000
  - 17000
  - 19000
  - 24000
  - 29000
  - 34000
  - 41000
  - 50000
  - 60000
  - 70000
  - 85000
  - 100000
  - 120000
  - 150000
  - 180000
  - 210000
  - 250000
  - 300000
  - 360000
  - 440000
  - 580000
  - 750000

# An XP Gain method takes a trigger, a multiplier, conditions, and filters.
# The multiplier takes the value produced by the trigger and multiplies it
# by some value to calculate the experience that should be given
xp-gain-methods:
  - trigger: mine_block
    multiplier: 0.5
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
level-commands: [ ]

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
icon: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODU3MDVjZjg2NGRmMmMxODJlMzJjNDg2YjcxNDdjYmY3ODJhMGFhM2RmOGE2ZDYxNDUzOTM5MGJmODRmYjE1ZCJ9fX0=
```

## Understanding all the sections

**id:** The ID of the job. This is what you use in commands - ID's must be lowercase letters, numbers, and underscores only.

**name:** The name of the job, shown to the player.

**description:** The description of the job, helpful to show how it's levelled.

**unlocked-by-default:** If the job should be available to all players by default, or if they should have to unlock it.

**level-xp-requirements:** The XP requirements for each level

**xp-gain-methods:** The way the job can be levelled. Each ID is a trigger - triggers give values such as damage dealt (with attack triggers), distance moved (with the move trigger), et cetera. Other triggers with no obvious value give an output of 1.

**level-placeholders:** Custom placeholders for messages / lore

**effects-description:** Job specific effect descriptions

**rewards-description:** Job specific reward descriptions

**level-up-messages:** Job specific level up messages

**level-commands:** Commands to be executed on levelup 

**icon:** The GUI icon

### Effects + Conditions

Effects are the actual functionality of the job, and conditions are requirements that a player must meet for the job to activate for them - so you can make it so a job only works for a certain type of player, ie only players that have above a certain amount of playtime, or those that only have below a certain balance.

See this page for how to configure effects:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)
