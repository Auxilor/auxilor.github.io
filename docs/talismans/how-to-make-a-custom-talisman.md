---
title: "How to make a custom Talisman"
sidebar_position: 2
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/Talismans/tree/master/eco-core/core-plugin/src/main/resources/talismans).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add talismans
Each talisman is its own config file, placed in the `/talismans/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Talisman is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

### Example Talisman Config

```yaml
name: "&aArchery Talisman I"
description: # The item lore
  - "&8Deal 10% more damage with bows"
higherLevelOf: [] # If the Talisman is higher level of another Talisman - Useful for only having the highest level Talisman active
item: "player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDBmOGRmYTVlZmM3NTYzMGNlMGRmNDBhNDliOGY1OWJjMjIyMTRkZTk3ZTNmYjQ0YjNjNTZlOGE5YzhhNTZiNiJ9fX0=" # The item in-game: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
craftable: true # If the item can be crafted
recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
  - bow
  - crossbow
  - bow
  - crossbow
  - ecoitems:talisman_core_1 ? ender_eye
  - crossbow
  - bow
  - crossbow
  - bow

# The effects of the item (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: "damage_multiplier"
    args:
      multiplier: 1.1
    triggers:
      - bow_attack

# The conditions required for the effects to activate
conditions: []
```

### Understanding all the sections

**name**: The item name in-game.

**description**: The item lore shown in-game. Set to `description: []` to remove all lore lines.

**higherLevelOf**: If the talisman is a higher level of another talisman, specify it here - used if you set only the highest level talisman to activate

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**craftable:** If the talisman should be craftable (true/false).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

### Effects & Conditions

The effects section is the core functionality of the EcoItem. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the enchantment is active.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

