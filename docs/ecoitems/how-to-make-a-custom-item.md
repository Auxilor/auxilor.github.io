---
title: "How to make a custom item"
sidebar_position: 2
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoItems/blob/master/eco-core/core-plugin/src/main/resources/items/)

## How to add items
Items are each config files placed in the `/items/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## How to add recipes
Recipes work the same - they are each config files placed in the `/recipes/` folder, and you can add or remove them as you please. There's also an example config called `_example.yml` to help you out!

## Example Item Config

```yaml
# The ID of the item is the name of the .yml file,
# for example hardened_netherite_sword.yml has the ID of hardened_netherite_sword
# You can place items anywhere in this folder,
# including in subfolders if you want to organize your item configs
# _example.yml is not loaded.

item:
  item: iron_sword hide_attributes # The item in-game: https://plugins.auxilor.io/all-plugins/the-item-lookup-system
  display-name: "<g:#f953c6>Mithril Sword</g:#b91d73>" # The display name of the item
  lore: # The item lore
    - "&7Damage: &c12❤"
    - "&7Attack Speed: &c1.5"
    - ""
    - "<g:#f953c6>MITHRIL BONUS</g:#b91d73>"
    - "&8» &#f953c6Deal 50% more damage in the nether"
  craftable: true # If the item can be crafted
  recipe: # The recipe, read here for more: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
    - ""
    - ecoitems:mithril 2
    - ""
    - ""
    - ecoitems:mithril 2
    - ""
    - ""
    - stick
    - ""
  recipe-give-amount: 1 # Optional, set the amount of items to give in the recipe

  # The actual item durability isn't set (because it can't be changed), but instead
  # this scales how quickly the item wears to act as if it had this durability.
  # For example, let's say the actual durability is 350, but you set this to 700,
  # it will wear at half the normal rate.

  effective-durability: 1024 # Optional, set the durability

# The slot the item has to be in to activate its effects.
# Can be mainhand, offhand, hands, helmet, chestplate, leggings, boots, or any.
# Use to choose weather this is a weapon, tool, armor piece, charm, etc.
# If you don't specify this, it will default to mainhand.
slot: mainhand

base-damage: 12 # (Optional) The item base damage
base-attack-speed: 1.5 # (Optional) The item base attack speed

# The effects of the item (i.e. the functionality)
# See here: https://plugins.auxilor.io/effects/configuring-an-effect
effects:
  - id: damage_multiplier
    args:
      multiplier: 1.5
    triggers:
      - melee_attack

# The conditions required for the effects to activate
conditions:
  - id: in_world
    args:
    world: world_the_nether
```
