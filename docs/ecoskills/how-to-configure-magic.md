---
title: How to configure Magic
sidebar_position: 5
---

## Magic
Magic is an optional feature in EcoSkills that provide the ability to create naturally regenerating
amounts of things like Mana, which can then be used in other plugins, for example in EcoItems or EcoEnchants.

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoSkills/tree/master/eco-core/core-plugin/src/main/resources/skills).

## How to add magic types
Each magic type is its own config file, placed in the `/magic_types/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Magic is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Magic Config

```yaml
name: "&#40ffe6🌊 Mana" # The name of the magic type, shown to players

# The rate at which the magic type regenerates per second
regen-rate: "0.02 * %ecoskills_mana_limit%"

# The maximum amount of this type a player can have
limit: "100 + %ecoskills_wisdom%"

# If players should join with full magic (true) or empty magic (false)
join-on-full: true
```

## Understanding all the sections

**name:** The name of the magic in-game.

**regen-rate:** The rate that the magic regenerates per second.

**limit:** The maximum amount of magic the player can have.

**join-on-full:** If the player's magic should be full when they join the server (true/false).

## Using Magic in Effects
You can use your magic in other plugins by utilizing the [[prices|price]] system.

### Optional Effect Arguments
You can use optional effect arguments to use magic in your effects: 
###### `<magic>_cost`

The magic cost (e.g. mana) required to use or activate this effect.

```yaml
args:
  mana_cost: 10
```

###### `price`

The price required to use or activate this effect.

This supports all known prices: supports money, items, points, second currencies, etc.
Read more about the system here: https://plugins.auxilor.io/all-plugins/prices

Looks like this in config:

```yaml
args:
  price:
    value: 100 * %v%
    type: mana
    display: "&#40ffe6%value% 🌊 Mana"
```