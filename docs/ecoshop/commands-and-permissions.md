---
title: "Commands and Permissions"
sidebar_position: 1
---

## `/ecoshop reload` (Reload the plugin)

Permission: `ecoshop.command.reload`

## `/ecoshop resetbuys` (Resets how many times a player has bought an item)

Permission: `ecoshop.command.resetbuys`

General Usage: `/ecoshop resetbuys <player> <id>`

## `/sell` (Opens the Sell GUI)

Permission: `ecoshop.command.sell`

## `/sell hand/all/handall` (Sells items directly)

Permissions: `ecoshop.command.sell.hand`, `ecoshop.command.sell.all`, `ecoshop.command.sell.handall`

# Other Commands and Permissions

Shops each have their own command that you specify in config,
and they have the `ecoshop.open.<id>` permission, for example `/shop` would
have `ecoshop.open.shop` as its permission.

If you want to make buying/selling an item require a permission,
the permission nodes are `ecoshop.buy.<id>` and `ecoshop.sell.<id>`.
By default, all players have this permission.
