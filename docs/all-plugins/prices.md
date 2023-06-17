---
title: Prices
sidebar_position: 6
---

## What are Prices?

Lots of servers have lots of different types of economies. Maybe you have a standard vault economy, maybe you have an
item-based economy, maybe you're using [points](https://plugins.auxilor.io/effects/points), or something else entirely.

To simplify this, there's a unified way to handle all of this: the price system.

## Types

`$`, `coins`: Standard economy, this is what you'll use if you have an economy plugin installed

`xp`, `exp`, `experience`: Experience points (not levels)

`l`, `levels`, `xplevels`, `explevels`: Experience levels

`p_points`, `player_points`: PlayerPoints points (third-party plugin)

[points](https://plugins.auxilor.io/effects/points) work as types, such as `souls`

[Magic Types](https://plugins.auxilor.io/ecoskills/magic) work as types, such as `magic`

You can also use custom currencies from plugins like EcoBits and UltraEconomy.

And for item-based economies, you can pass in
an [item lookup string](https://plugins.auxilor.io/all-plugins/the-item-lookup-system) as the type to take items.

## Display Names

You can specify display names for each price individually, however this might be quite
cumbersome, especially if you use prices in lots of places.

So, instead of configuring your price like this:

```yaml
price:
    value: 100 * %player_y%
    type: crystals # EcoBits currency
    display: "&b%value% Crystals ❖"
```

You can add the following to `/plugins/eco/lang.yml`:

```yaml
price-display:
    - type: crystals
      display: "&b%value% Crystals ❖"
```

This will override any per-price formatting, which should make your life much easier to achieve consistency
between different prices.

## Config Examples

```yaml
price:
    value: 100 * %player_y%
    type: crystals # EcoBits currency
```

```yaml
price:
    value: 16
    type: ecoitems:shiny_diamond
    display: "%value% &fShiny Diamonds" # Uses local display
```

```yaml
price:
    value: 5000
    type: xp
```

```yaml
price:
    value: 10
    type: mana # EcoSkills magic
```
