---
title: "How to make a custom Talisman"
sidebar_position: 2
---

## Default config
The default configs can be found here:

[GitHub](https://github.com/Auxilor/Talismans/blob/master/eco-core/core-plugin/src/main/resources/talismans/)

## How to add talismans
Talismans are each config files placed in the `/talismans/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

### Example Talisman Config

```yaml
- id: archery_2
  name: "&eArchery Talisman II"
  description:
    - "&8Deal 20% more damage with bows"
  higherLevelOf: archery_1
  item: "player_head texture:eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzgzODVhNWE0Njk4MjFiOGIzM2U0N2E1YjVjNDJhZWE1OTY2MzQ2NTQ2OTM4OGExYTRkNGU1MjNlNWE4ZGRkMiJ9fX0="
  craftable: true
  recipe:
    - talismans:archery_1
    - talismans:archery_1
    - talismans:archery_1

    - talismans:archery_1
    - ecoitems:talisman_core_2 ? heart_of_the_sea
    - talismans:archery_1

    - talismans:archery_1
    - talismans:archery_1
    - talismans:archery_1
  effects:
    - id: "damage_multiplier"
      args:
        multiplier: 1.2
      triggers:
        - bow_attack
  conditions: []
```

### Understanding all the sections

**id**: The id of the talisman

**name**: The display name of the talisman

**description**: The description of the talisman

**higherLevelOf**: If the talisman is a higher level of another talisman, specify it here - used if you set only the highest level talisman to activate

**item**: The item of the talisman. Allows for extensive options, click here for more

**craftable**: If the talisman should be craftable

**recipe**: The crafting recipe for the talisman.

**conditions / effects**: The core of the talisman is dictated by conditions and effects. Learn more here:

[Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect)
