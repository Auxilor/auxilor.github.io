---
title: "Commands and Permissions"
sidebar_position: 7
---

## `/skills, /stats` (Open the main menu)

Permission: `ecoskills.command.skills`

## `/skills top` (View the leaderboard)

Permission: `ecoskills.command.top`

## `/ecoskills give` (Give a player xp or stat levels)

Permission: `ecoskills.command.give`

General Usage: `/ecoskills give <player> <skill / stat> <xp / levels>`

For example, to give a player 30 strength, you would do `/ecoskills give <player> strength 30`

## `/ecoskills reset (Reset a player)`

Permission: `ecoskills.command.reset`

General Usage: `/ecoskills reset <player>`

## `/ecoskills recount (Recount a players stat / effect levels)`

Permission: `ecoskills.command.recount`

General Usage: `/ecoskills recount <player>`

### XP multiplier permission

Permission: `ecoskills.xpmultiplier.<%increase>`

General Usage: `ecoskills.xpmultiplier.200` would give 200% more skill XP (3x) to anyone with the permission. The backend math is `1 + (<%increase> / 100)` so 

Permission: `ecoskills.xpmultiplier.50percent
Permission: `ecoskills.xpmultiplier.double`
Permission: `ecoskills.xpmultiplier.triple`
Permission: `ecoskills.xpmultiplier.quadruple`

General Usage: `ecoskills.xpmultiplier.50percent` would give 50% more skill XP (1.5x)