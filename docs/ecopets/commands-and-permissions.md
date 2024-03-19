---
title: "Commands and Permissions"
sidebar_position: 4
---

## `/ecopets give` (Give a pet)
Permission: `ecopets.command.give`

Usage: `/ecopets give <player> <pet>`

## `/ecopets giveegg` (Give a pet egg)
Permission: `ecopets.command.give`

Usage: `/ecopets giveegg <player> <pet>`

## `/ecopets reset` (Reset a pet)
Permission: `ecopets.command.reset`

Usage: `/ecopets reset <player> <pet>`

## `/ecopets givexp` (Give xp to a pet)
Permission: `ecopets.command.givexp`

Usage: `/ecopets givexp <player> <pet> <amount>`

## `/pets` (Open the pets menu)
Permission: `ecopets.command.pets`

## `/pets activate` (Activate a pet)
Permission: `ecopets.command.activate`

Usage: `/pets activate <pet>`

## `/pets deactivate` (Deactivate a pet)
Permission: `ecopets.command.deactivate`

Usage: `/pets deactivate`

## `/ecopets import` (Import a pet from [lrcdb](https://lrcdb.auxilor.io/))
Permission: `ecopets.command.import`

General Usage: `/ecopets import <id>`

Find pets on [lrcdb](https://lrcdb.auxilor.io/)

## `/ecopets export` (Export a pet to [lrcdb](https://lrcdb.auxilor.io/))
Permission: `ecopets.command.export`

General Usage: `/ecopets export <id>`

### XP multiplier permission

Permission: `ecopets.xpmultiplier.<%increase>`

General Usage: `ecopets.xpmultiplier.200` would give 200% more skill XP (3x) to anyone with the permission. The backend math is `1 + (<%increase> / 100)` so 

Permission: `ecopets.xpmultiplier.50percent
Permission: `ecopets.xpmultiplier.double`
Permission: `ecopets.xpmultiplier.triple`
Permission: `ecopets.xpmultiplier.quadruple`

General Usage: `ecopets.xpmultiplier.50percent` would give 50% more skill XP (1.5x)