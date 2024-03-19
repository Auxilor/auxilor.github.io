---
title: "Commands and Permissions"
sidebar_position: 4
---

## `/ecojobs unlock` (Unlock a job)

Permission: `ecojobs.command.unlock`

Usage: `/ecojobs unlock <player> <job>`

## `/ecojobs reset` (Reset a job)

Permission: `ecojobs.command.reset`

Usage: `/ecojobs reset <player> <job>`

## `/ecojobs givexp` (Give xp to a job)

Permission: `ecojobs.command.givexp`

Usage: `/ecojobs givexp <player> <job> <amount>`

## `/jobs` (Open the jobs menu)

Permission: `ecojobs.command.jobs`

## `/jobs join` (Join a job)

Permission: `ecojobs.command.join`

Usage: `/jobs join <job>`

## `/jobs leave` (Leave a job)

Permission: `ecojobs.command.leave`

Usage: `/jobs leave`

## `/ecojobs import` (Import a job from [lrcdb](https://lrcdb.auxilor.io/))

Permission: `ecojobs.command.import`

General Usage: `/ecojobs import <id>`

Find jobs on [lrcdb](https://lrcdb.auxilor.io/)

## `/ecojobs export` (Export a job to [lrcdb](https://lrcdb.auxilor.io/))

Permission: `ecojobs.command.export`

General Usage: `/ecojobs export <id>`

## `ecojobs.limit.<limit>`

Sets the limit for the max amount of jobs the player can join at once

### XP multiplier permission

Permission: `ecojobs.xpmultiplier.<%increase>`

General Usage: `ecojobs.xpmultiplier.200` would give 200% more skill XP (3x) to anyone with the permission. The backend math is `1 + (<%increase> / 100)` so 

Permission: `ecojobs.xpmultiplier.50percent
Permission: `ecojobs.xpmultiplier.double`
Permission: `ecojobs.xpmultiplier.triple`
Permission: `ecojobs.xpmultiplier.quadruple`

General Usage: `ecojobs.xpmultiplier.50percent` would give 50% more skill XP (1.5x)