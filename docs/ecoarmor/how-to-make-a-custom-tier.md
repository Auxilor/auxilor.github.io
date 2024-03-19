---
title: "How to make a custom tier"
sidebar_position: 5
---

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoArmor/tree/master/eco-core/core-plugin/src/main/resources/tiers).

## How to add tiers
Each tier is its own config file, placed in the `/tiers/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Tier is the file name. This is what you use in commands and the `defaultTier` section of the set configs.
ID's must be lowercase letters, numbers, and underscores only.

## Example Armor Set Config

```yaml
display: "&c&lNETHERITE" # The display in-game
requiresTiers: # If this tier requires a prior tier
  - diamond # Tier ID
  - iron
crystal:
  item: end_crystal # The crystal item, read more here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  name: "&cNetherite Upgrade Crystal" # The name shown in-game.
  lore: # The lore shown in-game. Set to `lore: []` to remove lore.
    - "&8Drop this onto an armor piece"
    - "&8to set its tier to:"
    - "&c&lNETHERITE"
    - ''
    - "&8&oRequires the armor to already have Diamond tier"
  craftable: true # If the armor piece is craftable
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - air
    - netherite_ingot
    - air
    - netherite_ingot
    - ecoarmor:upgrade_crystal_diamond
    - netherite_ingot
    - air
    - netherite_ingot
    - air
  giveAmount: 1 # Optional, set the amount of items to give in the recipe
properties:
  helmet:
    armor: 3 # The armor attribute
    toughness: 3 # the toughness attribute
    knockbackResistance: 1 # The knockback resistance attribute
    speedPercentage: 0 # The movement speed attribute
    attackSpeedPercentage: 0 # The attack speed attribute
    attackDamagePercentage: 0 # The damage attribute
    attackKnockbackPercentage: 0 # The knockback attribute
  chestplate:
    armor: 8
    toughness: 3
    knockbackResistance: 1
    speedPercentage: 0
    attackSpeedPercentage: 0
    attackDamagePercentage: 0
    attackKnockbackPercentage: 0
  elytra:
    armor: 3
    toughness: 0
    knockbackResistance: 1
    speedPercentage: 0
    attackSpeedPercentage: 0
    attackDamagePercentage: 0
    attackKnockbackPercentage: 0
  leggings:
    armor: 6
    toughness: 3
    knockbackResistance: 1
    speedPercentage: 0
    attackSpeedPercentage: 0
    attackDamagePercentage: 0
    attackKnockbackPercentage: 0
  boots:
    armor: 3
    toughness: 3
    knockbackResistance: 1
    speedPercentage: 0
    attackSpeedPercentage: 0
    attackDamagePercentage: 0
    attackKnockbackPercentage: 0
```

## Understanding all the sections
### Tier Config
**display** How the tier will show up on armor pieces

**requiresTiers** A list of tiers that the item must be in order to apply the crystal.

To explain this, here is an example progression:
```yaml
display: "&c&lNETHERITE" # The display in-game
requiresTiers: # If this tier requires a prior tier
  - diamond # Tier ID
  - iron 
```
The "Netherite" Tier can only be applied to armor pieces that have the "Diamond" or "Iron" tier.

### Crystal

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The item name in-game.

**lore:** the item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

**giveAmount:** The amount of items to give when crafted.

### Properties

**properties:** are the actual attributes given to an armor piece with that tier. You can find default attributes on the [Minecraft Wiki](https://minecraft.wiki/w/Damage#Dealing_damage)








