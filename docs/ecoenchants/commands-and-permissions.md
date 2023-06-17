---
title: "Commands and Permissions"
sidebar_position: 1
---

## `/give` (Give a player an item)

Because of how it's made, EcoEnchants doesn't need to have it's own commands for this. Why reinvent the wheel? Instead,
it supports Essentials and CMI's `/give` command (as well as working in things like kits) - you don't
have to do things the 'EcoEnchants way', just do it exactly like you already would.

## `/enchant` (Give a player an enchant)

There is however an `/enchant` command because of bugs with some server implementations.

Permission: `ecoenchants.command.enchant`

Usage as a player: `/enchant <enchant> <level>`

Usage as console: `/enchant <player> <enchant> <level>`

## `/enchantinfo` (Get information (description, max level, conflicts, etc) about an enchant)

Permission: `ecoenchants.command.enchantinfo`

## `/ecoenchants gui` (View all enchantments that can be applied on any item)

Permission: `ecoenchants.command.gui`

## `/ecoenchants giverandombook` (Give a player a random book)

Permission: `ecoenchants.command.giverandombook`

General Usage: `/ecoenchants giverandombook <player> [type/rarity] [minimum level] [maximum level]`

For example, to give someone a random special book between level 2 and 3, you would
do `/ecoenchants giverandombook %player% special 2 3`

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
