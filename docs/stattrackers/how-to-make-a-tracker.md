---
title: "How to make a Stat Tracker"
sidebar_position: 2
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/StatTrackers/blob/master/eco-core/core-plugin/src/main/resources/stats/)

## How to add stats
Stat Trackers are each config files placed in the `/stats/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Example Stat Config

```yaml
# The ID of the stat is the name of the .yml file,
# for example damage_dealt.yml has the ID of damage_dealt
# You can place stat anywhere in this folder,
# including in subfolders if you want to organize your stat configs
# _example.yml is not loaded.

# The lore added to items with this tracker
display: "&bDamage Dealt: %value%"

# Which items the tracker can be applied to, groups are in targets.yml
applicable-to:
  - sword
  - bow
  - trident
  - axe

# A counter takes a trigger, a multiplier, conditions, and filters.
# The multiplier takes the value produced by the trigger and multiplies it
# by some value to calculate the amount to add to the stat.
counters:
  - trigger: melee_attack
  - trigger: bow_attack
  - trigger: trident_attack

# Options for the physical tracker item
tracker:
  # The item, read here for options: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  item: compass

  # The display name of the tracker
  name: "&eTracker - Damage Dealt"

  # The lore of the tracker
  lore:
    - "&8Drop this onto an item with /stattrackers"
    - "&8to display the amount of damage dealt"

  # If the tracker should be craftable
  craftable: true

  # The tracker recipe, read here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
  recipe:
    - iron_sword
    - iron_sword
    - iron_sword

    - iron_sword
    - compass
    - iron_sword

    - iron_sword
    - iron_sword
    - iron_sword
```
