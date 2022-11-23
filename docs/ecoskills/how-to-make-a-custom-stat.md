---
title: "How to make a custom stat"
sidebar_position: 6
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoSkills/blob/master/eco-core/core-plugin/src/main/resources/customstats/)

## How to add custom stats
Custom stats are each config files placed in the `/customstats/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

### Example Custom Stat Config

```yaml
name: "&#f5aa42🍖 Saturation" # The name of the stat, shown to players
placeholder: "%level% / 3" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
description: "&8Lose &a%placeholder%%&8 less hunger" # The description to be shown in lore and messages

# Options for the stat in the GUI
stats-gui:
  enabled: false # If the stat should show up in the GUI
  position:
    row: 5
    column: 5
  item:
    item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDMzZGRiOTJjYjZiM2E3OTI4MGI4YmRjZWQ4OTc2YWVhYjEzYTRiZmZlYWVmMmQ0NmQ4MjhiZDkxZGVlMGYzZSJ9fX0=
    name: "%stat%"
    lore:
      - "&fLevel: &a%level%"
      - "&8&o%description%"

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

## Understanding all the sections

**id**: The id of the effect (lowercase only!)

**placeholder**: The formula to calculate the placeholder shown in the description; you can use mathematical operations, e.g. `%level% / 50`

**description**: The description shown in lore and mesasges, you can use %placeholder% to have the value

**stats-gui**: The options to show the stat in the stats GUI, `enabled` defines whether or not it is in the gui, and the rest should be self-explanatory

Each stat has its own effects/conditions, and you can configure them the same way as other plugins of mine: read the guide on how to understand the effect system here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)
