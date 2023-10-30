---
title: "How to make a custom reforge"
sidebar_position: 3
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/Reforges/blob/master/eco-core/core-plugin/src/main/resources/reforges/)

## How to add reforges
Reforges are each config files placed in the `/reforges/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## Typical Reforge Config

```yaml
# The ID of the reforge is the name of the .yml file,
# for example acute.yml has the ID of acute
# You can place reforges anywhere in this folder,
# including in subfolders if you want to organize your reforge configs
# _example.yml is not loaded.

name: "<gradient:#AAFFA9>Dynamic</gradient:#11FFBD>" # The display name for the reforge
description: # The lore to add to an item with this reforge:
- "&a+5% &fDamage"
- "&a+10% &fCrit Damage"
targets: # The targets that this reforge can be applied to
- melee

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

price: # (Optional) The price required to apply this reforge, overrides the default reforge price
  value: 100000
  type: coins # See here: https://plugins.auxilor.io/all-plugins/prices
  display: "&6$%value%"

recipe: # The recipe for the stone to have
  - air
  - ecoitems:blank_reforge_stone ? air
  - air
  - iron_block
  - daylight_sensor
  - iron_block
  - air
  - phantom_membrane
  - air

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

**id:** The ID of the reforge. Only used internally, but it makes sense to have it be the same as the name

**name:** The name of the reforge, shown in lore and in the display name

**description:** The description appended in lore

**targets:** The items that this reforge can be applied to - you can create your own targets in target.yml, or [have a look at the default target.yml here](https://github.com/Auxilor/Reforges/blob/master/eco-core/core-plugin/src/main/resources/target.yml)

**stone:** Contains options about the reforge stone

**stone.enabled:** If a reforge stone is required for this reforge

**stone.name:** The name of the reforge stone item

**.lore: The lore** of the reforge stone item

**stone.texture:** The player head texture in base64

**stone.craftable:** If the stone should be craftable

**stone.recipe:** The stone's crafting recipe

**stone.price:** The custom application price for a stone to have (set to -1 to disable)

## Effects

Effects are the actual functionality of the reforge.

See this page for how to configure effects:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

## Conditions

Conditions are requirements that must be met in order for the reforge to activate its effects. In config, conditions look like this:

[Configuring a Condition](https://plugins.auxilor.io/effects/all-conditions)
