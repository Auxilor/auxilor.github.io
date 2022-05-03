---
title: "How to make a custom enchant"
sidebar_position: 8
---

## Breakdown of customenchants.yml

customenchants.yml is where the configs for all of your own custom enchants are. It may initially seem daunting however it is very easy to configure and make your own enchants.

Simply, customenchants.yml looks like this:

```yaml
enchants:
  - <enchant 1>
  - <enchant 2>
```

It's an array of enchant configs - and you can add and remove configs as you please.

## Typical Enchantment Config

```yaml
- id: escape
  type: normal
  name: "Escape"
  description: Gain a short burst of speed after taking damage

  obtaining:
    table: true
    villager: true
    loot: true
    rarity: epic

  general-config:
    flags: [ ]
    targets:
      - boots
    grindstoneable: true
    disabled-in-worlds: [ ]
    requirements:
      list: [ ]
      not-met-lore: [ ]
    conflicts: [ ]

  levels:
    - effects:
        - id: potion_effect
          args:
            effect: speed
            level: 1
            duration: 30
            apply_to_player: true
          triggers:
            - take_damage
      conditions: [ ]
    - effects:
        - id: potion_effect
          args:
            effect: speed
            level: 2
            duration: 30
            apply_to_player: true
          triggers:
            - take_damage
      conditions: [ ]
```

## Understanding all the sections

**id**: The id of the enchant (lowercase only!)

**type**: The type of the enchant (normal, special, etc)

The rest is the same as any other enchantment, explained in previous pages

## Configuring Levels

Each level has its own effects/conditions, and you can configure them the same way as other plugins of mine: read the guide on how to understand the effect system here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)
