---
title: "Commands and Permissions"
sidebar_position: 1
---

## `/give and /enchant` (Give a player an enchantment)

Because of how it's made, EcoEnchants doesn't need to have it's own commands for these. Why reinvent the wheel? Instead, it supports Essentials and CMI's `/give` and `/enchant` commands (as well as working in things like kits) - you don't have to do things the 'EcoEnchants way', just do it exactly like you already would.

## `/enchantinfo` (Get information (description, max level, conflicts, etc) about an enchant)
Permission: `ecoenchants.command.enchantinfo`

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
