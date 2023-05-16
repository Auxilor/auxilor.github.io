---
title: "Stats"
sidebar_position: 2
---

Stats are the base values that lie at the core of EcoSkills. Think of them like attributes in vanilla, but they're
shown to the player.

## The Default Stats

| Stat         | Description                                         |
|--------------|-----------------------------------------------------|
| Defense      | Reduces Incoming Damage                             |
| Strength     | Increases Outgoing Damage                           |
| Crit Chance  | Increases the chance to deal a crit                 |
| Crit Damage  | Increases crit damage                               |
| Speed        | Increases movement speed                            |
| Wisdom       | Increases experience gained (and max mana if using) |
| Health       | Increases max health                                |
| Ferocity     | Chance to hit twice                                 |
| Attack Speed | Increases your attack speed                         |

## Default configs

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoSkills/blob/master/eco-core/core-plugin/src/main/resources/stats/)

## `_example.yml`

```yaml
# The ID of the stat is the name of the .yml file,
# for example saturation.yml has the ID of saturation
# You can place stats anywhere in this folder,
# including in subfolders if you want to organize your stat configs
# _example.yml is not loaded.

name: "&#f5aa42🍖 Saturation" # The name of the stat, shown to players
placeholder: "%level% / 3" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
description: "&8Lose &a%placeholder%%&8 less hunger" # The description to be shown in lore and messages

# Options for the stat in the GUI
gui:
    enabled: false # (Optional) If the stat should show up in the GUI

    position:
        row: 5
    column: 5

        icon: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDMzZGRiOTJjYjZiM2E3OTI4MGI4YmRjZWQ4OTc2YWVhYjEzYTRiZmZlYWVmMmQ0NmQ4MjhiZDkxZGVlMGYzZSJ9fX0=

# The effects of the stat (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
# Use %level% as a placeholder for the stat level
effects:
    - id: hunger_multiplier
      args:
          multiplier: "1 - (%level% / 300)"

# The conditions required for the effects to activate,
# you can use %level% as a placeholder here too
conditions: [ ]
```
