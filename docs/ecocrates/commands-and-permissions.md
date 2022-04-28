---
title: "Commands and Permissions"
sidebar_position: 1
---

## General Information
All crates commands can be either `/crates`, `/crate`, or `/ecocrates`

## `/crates set` (Set a block to be a crate)
Permission: `ecocrates.command.set`

General Usage: `/ecocrates set <crate>`

Sets the block you're looking at to be a crate

## `/crates give` (Gives a player a key)
Permission: `ecocrates.command.give`

General Usage: `/ecocrates give <player> <crate> [virtual/physical] [amount]`

For example, to give a player 5 virtual mythic keys, you would do `/ecocrates give <player> mythic virtual 5`

## `/crates giveall` (Give all online players a key)

Permission: `ecocrates.command.giveall`

General Usage: `/ecocrates giveall <crate> [virtual/physical] [amount]`

For example, to give everyone 2 virtual ancient keys, you would do `/ecocrates giveall ancient virtual 2`

## `/crate keys` (View your keys)
Permission: `ecocrates.command.keys`

General usage: `/crate keys`

Opens the Key GUI

## `/crates preview` (Open the preview for a crate)
Permission: `ecocrates.command.preview`

General usage: `/crates preview <crate>`

Opens the preview GUI for a given crate

## `/crates open` (Opens a crate)
Permission: `ecocrates.command.open`

General usage: `/crates open <crate>`

Opens a crate virtually

You can open a crate for other people with `/crates open <crate> [player]` If you have the permission `ecocrates.command.open.others`

## `/crates forceopen` (Force-opens a crate)
Permission: `ecocrates.command.forceopen`

General usage: `/crates forceopen <crate>`

Opens a virtual crate, without requiring a key

You can open a crate for other people with `/crates forceopen <crate> [player]` If you have the permission `ecocrates.command.forceopen.others`

## `/crates resetwins` (Resets the wins for a reward)
Permission: `ecocrates.command.resetwins`

General usage: `/crates resetwins <player/all>`

Resets the tracked wins for a player, mostly useful for debugging or redoing your crates, so the max-wins for a reward are then reset back to zero for that player.