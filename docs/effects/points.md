---
title: "The Points System"
sidebar_position: 8
---

Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For example, lets say you want the player to have to used an item a certain amount of times in order to use another one - you would be able to keep track of this with a point.

You can have as many different points as you want, the plugins will keep track of them automatically. Points are shared between plugins, too - so if you make a point in EcoItems, then you can use it in EcoPets, EcoJobs, etc.

A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is completely up to you.
## Point Types

| Point Type    | Placeholder                          | Description                                                                                                                                                                    |
| ------------- | ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Points        | `%libreforge_points_<point>%`        | A general point that can be used to keep track of something per-player. (e.g. times jumped, zombies killed, etc.)                                                              |
| Global Points | `%libreforge_global_points_<point>%` | A general point that keeps track of something globally/server-wide for all players. (e.g. zombies killed by all players.)                                                      |
| Item Points   | `%libreforge_item_points_<point>%`   | A point that is tied to a specific item and tracks data on the item. Useful for making tools with custom durability's or per-item stats (e.g zombies killed using this sword.) |
## Commands
## `/libreforge points set/give/get/take

Usage: `/libreforgepoints give <player> <point> <value>`