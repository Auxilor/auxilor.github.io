---
title: How to make a Tier
sidebar_position: 3
---

## Creating a Tier
Each tier is its own config file, placed in the `/tiers/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Tier is the file name. This is what you use in commands and the `defaultTier` section of the set configs.
ID's must be lowercase letters, numbers, and underscores only.

## Example Tier Config

```yaml
display: "&c&lNETHERITE" 
requiresTiers: 
  - diamond
crystal:
  item: end_crystal 
  name: "&cNetherite Upgrade Crystal" 
  lore: 
    - "&8Drop this onto an armor piece"
    - "&8to set its tier to:"
    - "&c&lNETHERITE"
    - ''
    - "&8&oRequires the armor to already have Diamond tier"
  craftable: true 
  recipe: 
    - air
    - netherite_ingot
    - air
    - netherite_ingot
    - ecoarmor:upgrade_crystal_diamond
    - netherite_ingot
    - air
    - netherite_ingot
    - air
  giveAmount: 1 
properties:
  helmet:
    armor: 3 
    toughness: 3 
    knockbackResistance: 1 
    speedPercentage: 0 
    attackSpeedPercentage: 0 
    attackDamagePercentage: 0 
    attackKnockbackPercentage: 0 
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
### The Info Section

```yaml
display: "&c&lNETHERITE" # The display in-game
requiresTiers: # If this tier requires a prior tier to be applied
  - diamond # Tier ID
```

To explain the requiredTiers, here is an example progression: <br/>
The "Netherite" tier can only be applied to armor pieces that have the "Diamond" tier.

The default tier tree looks like this:
```yaml
                                            /-> exotic
default --> iron --> diamond --> netherite --> manyullyn
         \-> cobalt --> osmium

ancient --> mythic
```

### The Crystal Section

This is the section for the upgrade crystal, which is used to apply the tier to the armor piece, which is the physical item in-game used to upgrade the stats of armor pieces.

```yaml
crystal:
  # The crystal item, read more here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  item: end_crystal
  name: "&cNetherite Upgrade Crystal" # The name shown in-game.
  lore: # The lore shown in-game. Set to `lore: []` to remove lore.
    - "&8Drop this onto an armor piece"
    - "&8to set its tier to:"
    - "&c&lNETHERITE"
    - ''
    - "&8&oRequires the armor to already have Diamond tier"
  craftable: true # If the armor piece is craftable
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system/recipes
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
```
For more information on recipes, check out the [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system/recipes) documentation.

### The Armor Properties Section

The below is just the helmet attributes, this is replicated for the other armor pieces, including the Elytra. <br/>
You can find default attribute values on the [Minecraft Wiki](https://minecraft.wiki/w/Damage#Dealing_damage), where you can learn more about how they work.

```yaml
properties:
  helmet:
    armor: 3 # The armor attribute
    toughness: 3 # the toughness attribute
    knockbackResistance: 1 # The knockback resistance attribute
    speedPercentage: 0 # The movement speed attribute
    attackSpeedPercentage: 0 # The attack speed attribute
    attackDamagePercentage: 0 # The damage attribute
    attackKnockbackPercentage: 0 # The knockback attribute
```

<hr/>

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoArmor/tree/master/eco-core/core-plugin/src/main/resources/tiers).