---
title: "How to make a Stat Tracker"
sidebar_position: 1
---

## Default configs
The default configs can be found [here](https://github.com/Auxilor/StatTrackers/tree/master/eco-core/core-plugin/src/main/resources/stats).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add stat trackers
Each stat tracker is its own config file, placed in the `/stats/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Stat Tracker is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Tracker Config

```yaml
# The lore added to items with this tracker
display: "&bExample Tracker: %value%"

# The items that the tracker can be applied to, see targets.yml
applicable-to:
  - trident

# A counter takes a trigger, a multiplier, conditions, and filters.
# The 'multiplier' takes the value produced by the trigger and multiplies it
# Alternatively, you can use 'value' to count a specific number and not a multiplier
counters:
  - trigger: trident_attack # See list of triggers: https://plugins.auxilor.io/effects/all-triggers
    multiplier: 1 # You can also use "value" here (see above comment)
	conditions: # (Optional) Example of using conditions in counters
	  - id: in_water

# Options for the physical tracker item
tracker:
  item: compass # The item in-game: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "&eTracker - Damage Dealt" # The display name of the tracker
  lore: # The item lore
    - "&8Drop this onto an item with /stattrackers"
    - "&8to display the amount of damage dealt with Tridents"
    - "&8whilst in water"
  craftable: true # If the tracker can be crafted
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
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

### Understanding all the sections

**display**: The lore added once the tracker is applied

**applicable-to:** The items that the tracker can be applied to, see [targets.yml](https://github.com/Auxilor/StatTrackers/blob/master/eco-core/core-plugin/src/main/resources/targets.yml)

**counters:** The trigger, multiplier/value, conditions and filters to be tracked

### Tracker Item

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The item name in-game.

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)