---
title: "Commands and Permissions"
sidebar_position: 1
---

## `/give and /enchant (Give a player an enchantment)`

Because of how it's made, EcoEnchants doesn't need to have it's own commands for these. Why reinvent the wheel? Instead, it supports Essentials and CMI's `/give` and `/enchant` commands (as well as working in things like kits) - you don't have to do things the 'EcoEnchants way', just do it exactly like you already would.

## `/ecoenchants giverandombook (Give a player a random book)`
Permission: `ecoenchants.command.giverandombook`

Usage: `/ecoenchants giverandombook <player> [rarity / type]`

## `/enchantinfo (Get information (description, max level, conflicts, etc) about an enchant)`
Permission: `ecoenchants.command.enchantinfo`

## `/ecoenchants giverandombook (Give a player a random book)`
Permission: `ecoenchants.command.randomenchant`

Usage: `/ecoenchants randomenchant [player] [rarity / type]`

If you have a hard cap set up in config.yml, players will not be able to bypass it with this command. This can be changed with the permission `ecoenchants.command.randomenchant.bypasshardcap`

## Enchantment Permissions

Want to make an enchantment only available through an enchanting table for certain players? This might seem a bit confusing at first, but it's extremely simple.

All enchantments have a name used by permissions and config files. This is just the enchantment key with underscores removed, eg: `Curse of Hunger` has the key `hunger_curse`, and the permission `hungercurse`. Similarly, `Water Artifact` has the key `water_artifact` and the permission `waterartifact`. 

### So how do I actually do this?

The permission to make an enchantment available from an enchanting table is this:

```yaml
ecoenchants.fromtable.<permission name>
```

All enchantments are available by default, with all users having this permission by default:

```yaml
ecoenchants.fromtable.*
```

## Perks

Want to give certain ranks an advantage? There are 4 permissions that can reduce spell cooldown times.

Reduce cooldown by 25% - `ecoenchants.cooldowntime.75`

Reduce cooldown by half - `ecoenchants.cooldowntime.half`

Reduce cooldown 3x - `ecoenchants.cooldowntime.third`

Reduce cooldown 4x - `ecoenchants.cooldowntime.quarter`

You can specify any numerical value as well, which will be treated as a percentage multiplier applied to the cooldown - for example `ecoenchants.cooldowntime.10` would multiply the cooldown by 10%, in other words, make cooldowns 10 times shorter.