---
title: "The Points System"
sidebar_position: 7
---

Points are similar to currencies, however they exist purely as a way to keep track of something in a player. For example, lets say you want the player to have to used an item a certain amount of times in order to use another one - you would be able to keep track of this with a point.

You can have as many different points as you want, the plugins will keep track of them automatically. If you want to share points between plugins, prefix the name of the point with `g_`, so for example, a souls system that you share between EcoItems, EcoEnchants, etc, would have the name `g_souls`

A point can hold any numeric value, including negatives and decimals, but of course how you decide to use them is completely up to you.

## Placeholders
The points system allows the value of any points you track to be read as a placeholder in the following format:

`%<EcoPlugin, any of them>_points_<Point Name>%`

So for the g_souls example, the valid placeholders would be

`%ecoitems_points_g_souls%` or `%ecoenchants_points_g_souls%`

## Example Placeholder Use
```yaml
      - id: send_message # Using the send_message effect
        args:
          message: "&fSoul Count: %ecoitems_points_g_souls%"
          action_bar: false # Send as chat, not actionbar
```