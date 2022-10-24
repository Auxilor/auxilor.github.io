---
title: Prices
sidebar_position: 6
---

## What are Prices?
Lots of servers have lots of different types of economies. Maybe you have a standard vault economy, maybe you have an item-based economy, maybe you're using [points](https://plugins.auxilor.io/effects/points), or something else entirely.

To simplify this, there's a unified way to handle all of this: the price system.

## Types

`$`, `coins`: Standard economy, this is what you'll use if you have an economy plugin installed

`xp`, `exp`, `experience`: Experience points (not levels)

`l`, `levels`, `xplevels`, `explevels`: Experience levels

[points](https://plugins.auxilor.io/effects/points) work as types, such as `souls`

And for item-based economies, you can pass in an [item lookup string](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) as the type to take items.


## Config Examples

```yaml
price:
  value: 100 * %player_y%
  type: crystals
  display: "&b%value% Crystals ❖"
```

```yaml
price:
  value: 16
  type: ecoitems:shiny_diamond
  display: "&a16 &fShiny Diamonds"
```

```yaml
price:
  value: 5000
  type: xp
  display: "&e5000 XP"
```
