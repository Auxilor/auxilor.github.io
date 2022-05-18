---
title: "How to make a custom stat"
sidebar_position: 6
---

## Breakdown of customstats.yml

customstats.yml is where the configs for all of your own custom stats are. It may initially seem daunting however it is very easy to configure and make your own stats.

Simply, customstats.yml looks like this:

```yaml
stats:
  - <stat 1>
  - <stat 2>
```

It's an array of stat configs - and you can add and remove configs as you please.

## Typical Custom Stat Config

```yaml
- id: saturation # The ID of the stat, to be used in skills
  name: "&#f5aa42🍖 Saturation" # The name of the stat, shown to players
  placeholder: "%level% / 3" # The placeholder to be shown in the description, you can use expressions - eg %level% * 2
  description: "&8Lose &a%placeholder%%&8 less hunger" # The description to be shown in lore and messages

  stats-gui:
    enabled: false
    position:
      row: 5
      column: 5
    item:
      item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDMzZGRiOTJjYjZiM2E3OTI4MGI4YmRjZWQ4OTc2YWVhYjEzYTRiZmZlYWVmMmQ0NmQ4MjhiZDkxZGVlMGYzZSJ9fX0=
      name: "%stat%"
      lore:
        - "&fLevel: &a%level%"
        - "&8&o%description%"

  effects:
    - id: hunger_multiplier
      args:
        multiplier: "1 - (%level% / 300)"

  conditions: [ ]
```

## Understanding all the sections

**id**: The id of the effect (lowercase only!)

**placeholder**: The formula to calculate the placeholder shown in the description; you can use mathematical operations, e.g. `%level% / 50`

**description**: The description shown in lore and mesasges, you can use %placeholder% to have the value

**stats-gui**: The options to show the stat in the stats GUI, `enabled` defines whether or not it is in the gui, and the rest should be self-explanatory

Each stat has its own effects/conditions, and you can configure them the same way as other plugins of mine: read the guide on how to understand the effect system here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)
