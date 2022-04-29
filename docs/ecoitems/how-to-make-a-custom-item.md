---
title: "How to make a custom item"
sidebar_position: 2
---

## Default config

The default items.yml can be found here: 

[GitHib](https://github.com/Auxilor/EcoItems/blob/master/eco-core/core-plugin/src/main/resources/items.yml)

## Breakdown of items.yml

items.yml is where the configs for all items are. It may initially seem daunting however it is very easy to configure and make your own items.

Simply, items.yml looks like this:

```yaml
weapons:
  - <weapon 1>
  - <weapon 2>
fuels:
  - <fuel 1>
  - <fuel 2>
recipes:
  - <recipe 1>
  - <recipe 2>
```

It's 3arrays of weapon, fuel, and recipe configs - and you can add and remove configs as you please.

## Typical Item Config

```yaml
- id: reaper_scythe
  baseDamage: 12
  baseAttackSpeed: 2.0
  effects:
    - id: bleed
      args:
        damage: 2
        amount: 5
        interval: 10
        chance: 25
      triggers:
        - melee_attack
  conditions:
    - id: above_health_percent
      args:
        percent: 98
    - id: has_fuel
      args:
        fuel: reaper_soul
  fuels:
    - reaper_soul
  item:
    item: netherite_sword hide_attributes
    effectiveDurability: 3182
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
```

## Understanding all the sections

**id:** The id of the weapon

**baseAttackSpeed:** The attack speed of the weapon: swords in vanilla minecraft have 1.6 attack speed

**baseDamage:** The base damage of the weapon: a netherite sword deals 8 attack damage by default

**conditions / effects:** The core of the weapon is dictated by conditions and effects. Learn more here:

[Configuring an Effect](https://plugins.auxilor.io/all-plugins/configuring-an-effect)

A list of all effects, conditions, and more can be found here:

[All Effects](https://plugins.auxilor.io/all-plugins/configuring-an-effect/all-effects)

## Item Config

Item config is the config for the weapon's item as shown in game.

**item:** The actual item type. Allows for extensive options, [click here](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) for more

**effectiveDurability:** The durability of the item: durability is hardcoded so this functions like unbreaking and changes the rate at which durability decreases.

**displayName:** The display name of the item

**lore:** The lore of the item

**craftable:** If the weapon should be craftable

**recipe:** The crafting recipe for the item.

** custom-model-data:** To add a custom model data just add the setting  custom-model-data: under the material config. For example if we want to change the look of a diamond with the Custom Model Data of 2, we will check that the material in the config is set to diamond and add custom-model-data:2 under the material config. The Custom Model Data Resource Pack should already be added to the server. 

## Fuels

Fuels are consumables that are required in order to use some weapons. A reaper scythe, for example, has reaper souls as its fuel. A typical fuel config looks like this:

```yaml
  - id: reaper_soul
    item:
      item: player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDc3NGU1ZWYzZDhiY2RlOWVhMjFjMzRiODQ4MjdkMzQ1MzFlNjhmMTExNTEwZjMzODMwNTVlY2FhNzRiZWJjYyJ9fX0=
      displayName: "<g:#870000>Reaper Soul</g:#7a2828>"
      lore:
        - "&7Fuel for the <g:#870000>Reaper Scythe</g:#7a2828>"
        - "&7Consumed while using the weapon"
      craftable: true
      recipe:
        - ""
        - gold_ingot
        - ""
        - ""
        - iron_ingot
        - ""
        - soul_soil
        - soul_sand
        - soul_soil
      recipeGiveAmount: 4
```

**id:** The ID of the fuel

The item config is the same as for weapons, with the extra recipeGiveAmount option, which specifies how many of the fuel are given from crafting.

You can make a weapon require a fuel with the has_fuel condition:

```yaml
- id: has_fuel
  args:
    fuel: reaper_soul
```

And set the weapon to consume a fuel on each use by adding the fuel to the fuels list in the weapon config:

```yaml
fuels:
    - reaper_soul    
```

If you add multiple fuels, EcoWeapons will first try to consume the one at the top of the list, then the second, then the third, etc
