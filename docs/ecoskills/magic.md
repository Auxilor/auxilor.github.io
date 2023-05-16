---
title: "Magic"
sidebar_position: 5
---

Magics are an optional feature in EcoSkills that provide the ability to create naturally regnerating
amounts of things like Mana, which can then be used in other plugins, for example in EcoItems items,
or EcoEnchants enchantments.

## The Default Magic Types

| Name |
|------|
| Mana |

## Default configs

The default configs can be found here:

[GitHub](https://github.com/Auxilor/EcoSkills/blob/master/eco-core/core-plugin/src/main/resources/magic_types/)

## `_example.yml`

```yaml
# The ID of the magic type is the name of the .yml file,
# for example mana.yml has the ID of mana
# You can place magic types anywhere in this folder,
# including in subfolders if you want to organize your magic type configs
# _example.yml is not loaded.

# The name of the magic type, shown to players
name: "&#40ffe6🌊 Mana"

# The rate at which the magic type regenerates per second
regen-rate: "0.02 * %ecoskills_mana_limit%"

# The maximum amount of this type a player can have
limit: "100 + %ecoskills_wisdom%"

# If players should join with full magic (true) or empty magic (false)
join-on-full: true
```