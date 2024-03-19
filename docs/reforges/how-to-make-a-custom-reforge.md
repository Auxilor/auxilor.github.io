---
title: "How to make a custom reforge"
sidebar_position: 3
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/Reforges/tree/master/eco-core/core-plugin/src/main/resources/reforges).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add reforges
Each regorge is its own config file, placed in the `/reforges/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the reforge is the file name. This is what you use in commands and in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).
ID's must be lowercase letters, numbers, and underscores only.

## Example Reforge Config

```yaml
name: "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>" # The display name for the reforge
description: # The lore to add to an item with this reforge:
- "&a+5% &fDamage"
- "&a+10% &fCrit Damage"
targets: # The targets that this reforge can be applied to
- melee

price: # (Optional) The price required to apply this reforge, overrides the default reforge price
  value: 100000
  type: coins # See here: https://plugins.auxilor.io/all-plugins/prices
  display: "&6$%value%"

# Options for the reforge stone
stone:
  enabled: true # If this reforge requires the use of a reforge stone
  name: "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>&f Reforge Stone" # The display name of the stone
  lore: # The lore of the stone
  - "&7Place on the right of the"
  - "&7reforge menu to apply the"
  - "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>&7 reforge!"
  item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMmM0YTY1YzY4OWIyZDM2NDA5MTAwYTYwYzJhYjhkM2QwYTY3Y2U5NGVlYTNjMWY3YWM5NzRmZDg5MzU2OGI1ZCJ9fX0=
  craftable: true # If the reforge stone should be craftable

  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - ""
    - ecoitems:blank_reforge_stone ? air
    - ""
  
    - iron_block
    - daylight_sensor
    - iron_block
  
    - ""
    - phantom_membrane
    - ""

# The effects of the reforge (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: damage_multiplier
    args:
      multiplier: 1.05
    triggers:
    - melee_attack
  - id: crit_multiplier
    args:
      multiplier: 1.1
    triggers:
    - melee_attack

# The conditions required to use the reforge
conditions: [ ]

# Effects to run when the reforge is applied to an item.
on-reforge-effects: [ ]
```

## Understanding all the sections

**name:** The name of the reforge, shown in lore and in the display name

**description:** The reforge description shown in-game. Set to `description: []` to remove all lines.

**targets:** The items this reforge can be applied to, from [targets.yml](https://github.com/Auxilor/Reforges/blob/master/eco-core/core-plugin/src/main/resources/target.yml).

**price:** The price to apply the reforge, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices)
### Stone

**enabled:** If a reforge stone is required for this reforge (true/false).

**name:** The item name in-game.

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**item:** The base stone item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**craftable:** If the stone should be craftable (true/false).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

### Effects & Conditions

The effects section is the core functionality of the EcoItem. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the item is held or used.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

