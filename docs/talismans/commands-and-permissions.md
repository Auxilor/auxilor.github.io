---
title: "Commands and Permissions"
sidebar_position: 3
---

## `/talismans give (Give a Talisman)`
Permission: `talismans.command.give`

Usage: `/talismans give <player> <talisman> <level>`

## `/talismans bag (Open the talisman bag)`
Permission: `talismans.command.bag`

Usage: `/talismans bag <player>`

## `/talismans import` (Import a talisman from [lrcdb](https://lrcdb.auxilor.io/))
Permission: `talismans.command.import`

General Usage: `/talismans import <id>`

Find talismans on [lrcdb](https://lrcdb.auxilor.io/)

## `/talismans export` (Export a talisman to [lrcdb](https://lrcdb.auxilor.io/))
Permission: `talismans.command.export`

General Usage: `/talismans export <id>`

### Crafting Permissions
All talismans have an ID used by permissions and config files.
This is the key, and looks like `archery_1`, `strength_2`, `alchemy_3`

The permission to allow crafting looks like this: `talismans.fromtable.<key>`

For example, the permission to craft Extraction Talisman III would look like this: `talismans.fromtable.extraction_3`

All talismans are allowed to be crafted by default, with the permission `talismans.fromtable.*`

### Limit the amount of talismans for a player

If you only want a player to have x amount of talismans in use at once, then do `talismans.limit.<amount>`, eg `talismans.limit.5` would allow 5 talismans to work at once.

The player can still have as many talismans in their inventory as they want, but they won't work after a certain number have been read.

### Set the talisman bag size for a player

You can set the player's bag size with do `talismans.bagsize.<size>`, eg `talismans.bagsize.8` would allow 8 talismans in the talisman bag.
By default, players have a bag size of 54 (the limit)
