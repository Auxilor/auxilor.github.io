---
title: "Commands and Permissions"
sidebar_position: 1
---

## `/give and /enchant` (Give a player an enchantment)

Because of how it's made, EcoEnchants doesn't need to have it's own commands for these. Why reinvent the wheel? Instead, it supports Essentials and CMI's `/give` and `/enchant` commands (as well as working in things like kits) - you don't have to do things the 'EcoEnchants way', just do it exactly like you already would.

 - Vanilla example: `/give <playerSelector> enchanted_book{StoredEnchantments:[{id:<enchantment_name>,lvl:<lvl>}]} <count>`
   - If essentials is installed, begin with `/minecraft:give ...`
 - [Essentials example](https://wiki.ess3.net/wiki/Item_Meta#Examples): `/give <playerSelector> enchanted_book <count> <enchantment_name>:<lvl>`
 - [CMI example](https://github.com/Zrips/CMI/issues/3468#issuecomment-641297452): `/cmi give <playerSelector> enchanted_book e <enchantment_name>:<lvl> <count>`

## `/enchantinfo` (Get information (description, max level, conflicts, etc) about an enchant)
Permission: `ecoenchants.command.enchantinfo`

## `/ecoenchants gui` (View all enchantments that can be applied on any item)
Permission: `ecoenchants.command.gui`

## `/ecoenchants giverandombook` (Give a player a random book)
Permission: `ecoenchants.command.giverandombook`

General Usage: `/ecoenchants giverandombook <player> [type/rarity] [minimum level] [maximum level]`

For example, to give someone a random special book between level 2 and 3, you would do `/ecoenchants giverandombook %player% special 2 3`

## `/ecoenchants import` (Import an enchant from [lrcdb](https://lrcdb.auxilor.io/))
Permission: `ecoenchants.command.import`

General Usage: `/ecoenchants import <id>`

Find enchants on [lrcdb](https://lrcdb.auxilor.io/)

## `/ecoenchants export` (Export an enchant to [lrcdb](https://lrcdb.auxilor.io/))
Permission: `ecoenchants.command.export`

General Usage: `/ecoenchants export <id>`

## `/ecoenchants toggledescriptions` (Let players toggle enchantment descriptions)
Permission: `ecoenchants.command.toggledescriptions`

General Usage: `/ecoenchants toggledescriptions`

Let players decide whether they want to see enchantment descriptions or not.
This command only works when enchantment descriptions are enabled in the config.

## Enchantment Permissions

Want to make an enchantment only available through an enchanting table for certain players?

The permission to make an enchantment available from an enchanting table is this:

```yaml
ecoenchants.fromtable.<id>
```

All enchantments are available by default, with all users having this permission by default:

```yaml
ecoenchants.fromtable.*
```
