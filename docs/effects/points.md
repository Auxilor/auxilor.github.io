---
title: "The Points System"
sidebar_position: 7
---

Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For example, lets say you want the player to have to used an item a certain amount of times in order to use another one - you would be able to keep track of this with a point.

You can have as many different points as you want, the plugins will keep track of them automatically. Points are shared between plugins, too - so if you make a point in EcoItems, then you can use it in EcoPets, EcoJobs, etc.

A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is completely up to you.

## Placeholders
You can get the value of a point with the following placeholder:

`%<plugin>_points_<point>%`

You can use any plugin with the effects system, so for example `%ecobosses_points_souls%` is the same as `%ecoitems_points_souls%`
