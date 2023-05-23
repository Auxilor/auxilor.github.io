---
title: "The Points System"
sidebar_position: 7
---

Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For
example, lets say you want the player to have to used an item a certain amount of times in order to use another one -
you would be able to keep track of this with a point.

You can have as many different points as you want, the plugins will keep track of them automatically. Points are shared
between plugins, too - so if you make a point in EcoItems, then you can use it in EcoPets, EcoJobs, etc.

A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is
completely up to you.

## Placeholders

You can get the value of a point with the following placeholder:

`%libreforge_points_<point>%`

## Global Points

There are also global points, which belong to the server rather than to the player.

You can get the value of these with `%libreforge_global_points_<point>%`

## Item Points

Item Points exist too - instead of belonging to the player or the server, they belong to items.

You can get the value of these with `%libreforge_item_points_<point>%`
    