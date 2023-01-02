---
title: "How to make a custom item"
sidebar_position: 2
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoBosses/blob/master/eco-core/core-plugin/src/main/resources/bosses/)

## How to add items
Items are each config files placed in the `/items/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

## How to add recipes
Recipes work the same - they are each config files placed in the `/recipes/` folder, and you can add or remove them as you please. There's also an example config called `_example.yml` to help you out!

## Typical Item Config

```yaml
item:
  item: netherite_sword hide_attributes
  displayName: "<g:#870000>Reaper Scythe</g:#7a2828>"
  lore:
    - "&7Damage: &c12❤"
    - "&7Attack Speed: &c2.0"
    - ""
    - "<g:#870000>&lREAPER SCYTHE BONUS</g:#7a2828>"
    - "&8» &#87000025% chance to bleed enemies"
    - ""
    - "&4❣ &cMust be on full health for bonus"
    - "&4❣ &cConsumes <g:#870000>Reaper Souls</g:#7a2828>"
  craftable: true
  recipe:
    - nether_star
    - netherite_sword
    - nether_star
    - netherite_sword
    - golden_hoe
    - netherite_sword
    - nether_star
    - netherite_sword
    - nether_star

baseDamage: 12
baseAttackSpeed: 2.0

effects:
  - effects:
      - id: bleed
        args:
          damage: 2
          amount: 5
          interval: 10
          chance: 25
      - id: remove_item
        args:
          item: ecoitems:reaper_soul
    triggers:
      - melee_attack

conditions:
  - id: above_health_percent
    args:
      percent: 98
  - id: has_item
    args:
      item: ecoitems:reaper_soul
```

## Understanding all the sections

**id:** The id of the weapon

**baseAttackSpeed:** The attack speed of the weapon: swords in vanilla minecraft have 1.6 attack speed

**baseDamage:** The base damage of the weapon: a netherite sword deals 8 attack damage by default

**conditions / effects:** The core of the weapon is dictated by conditions and effects. Learn more here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)

## Item Config

Item config is the config for the weapon's item as shown in game.

**item:** The actual item type. Allows for extensive options, [click here](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) for more

**effectiveDurability:** The durability of the item: durability is hardcoded so this functions like unbreaking and changes the rate at which durability decreases.

**displayName:** The display name of the item

**lore:** The lore of the item

**craftable:** If the weapon should be craftable

**craftingPermission:** Required permission to craft the item

**recipe:** The crafting recipe for the item.

**custom-model-data:** To add a custom model data just add the setting  custom-model-data: under the material config. For example if we want to change the look of a diamond with the Custom Model Data of 2, we will check that the material in the config is set to diamond and add custom-model-data:2 under the material config. The Custom Model Data Resource Pack should already be added to the server. 

## Footnote for this item

This item has a consumable that's required in order to use it. Here, the player needs to have reaper souls to use it.

Here, using the `has_item` condition and the `remove_item` effect, using the reaper scythe will consume reaper souls from your inventory and not activate effects if you don't have any.
