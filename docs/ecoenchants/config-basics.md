---
title: "Config Basics"
sidebar_position: 4
---

## Config Layout

Each enchantment has it's own config file. They are stored in `/enchants/<type>/<permissionname>.yml` so for example Curse of Fragility would be stored in `/enchants/curse/fragilitycurse.yml`

The other config files are `lang.yml`, where localisation for messages, vanilla enchantments, and colors are stored, and `config.yml`, containing core config relating to rarity, enchanting tables, anvils, loot, display and more.

## Editing Rarity

Table probability is the chance, as a percentage, of getting the enchantment from an enchanting table, Minimum Level is the minimum xp level you have to be to get the enchantment, Villager probability is the chance of a villager having this trade as a percentage. Vanilla default for all enchantments is 2.7%, however you can choose this per-rarity. Loot probability is the chance of an item in a loot chest having this enchantment as a percentage.

You can add more rarities by following the pattern.

Rarity names are never shown to the player and are completely arbitrary. They are only specified for internal use, such as setting the rarity of an enchantment.

```yaml
common:
  table-probability: 30
  minimum-level: 1
  villager-probability: 10.5
  loot-probability: 12
uncommon:
  table-probability: 20
  minimum-level: 5
  villager-probability: 9
  loot-probability: 16
rare:
  table-probability: 20
  minimum-level: 15
  villager-probability: 7.5
  loot-probability: 18
epic:
  table-probability: 10
  minimum-level: 16
  villager-probability: 6
  loot-probability: 20
legendary:
  table-probability: 8
  minimum-level: 20
  villager-probability: 4.5
  loot-probability: 15
special:
  table-probability: 2
  minimum-level: 30
  villager-probability: 3
  loot-probability: 5
veryspecial:
  table-probability: 1
  minimum-level: 30
  villager-probability: 1.5
  loot-probability: 2
```

## Using color in lang.yml

Colors are denoted using &{code}, such as &a. Other formatting features, such as bold, underline, etc are also supported.

EcoEnchants supports any and all RGB / Gradient / Formatting codes. MiniMessage is preferred (read about it [here](https://docs.adventure.kyori.net/minimessage/)), but any hex code or gradient format that you're used to will work fine.