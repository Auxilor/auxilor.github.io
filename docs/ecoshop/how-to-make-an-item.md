---
title: How to make an Item
sidebar_position: 3
---

## Items
Items are everything that can be bought or sold in the shop. They can be real items or commands, single-purchase, limited purchase, buy only, sell only, both, they can be bought with 2 different currency types - the point is, there's a lot of options to wrap your head around.

These items go into your category config, read here for more into: [categories](https://plugins.auxilor.io/ecoshop/how-to-make-a-category).

## How to add items

### Simple buy-sell item

Let's start with a really simple shop item - if you're making a standard buy-sell shop, this is what most of your items will look like:

```yaml
- id: cooked_mutton
  item: cooked_mutton
  buy:
    type: coins
    value: 20
    display: $%value%
    amount: 32
  sell:
    type: coins
    value: 10
    display: $%value%
  gui:
    column: 4
    row: 1
    page: 1
```

### Understanding all the sections

**id:** This is the internal ID of the item. Players don't see this, but it's important
to use a unique ID for every item in all of your shops. This is used in commands, placeholders and referencing the item

**item:** This is the actual item we're selling, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 
#### Buy (Optional)

**type/value/display:** This is standard configuration of prices, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices). Prices are configured per-item.

**amount:** (Optional) The amount of items to be bought at once. Defaults to 1.
#### Sell

**type/value/display:** This is standard configuration of prices, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices). Prices are configured per-item.
#### GUI

**row/column/page:** The location of this item in the shop


## Buy Effect Items

Instead of just using commands, EcoShop also has full access to the
[effects system](https://plugins.auxilor.io/effects/configuring-an-effect), so you can run effects when a player buys an item, or even just put effects themselves in the shop.

Like commands, these are unsellable.

```yaml
- id: my_effect_item
  buy-effects:
    - id: run_command
      args:
        command: "say %player% just bought this item!"
  buy:
    value: 65
    type: crystals
    display: "&b%value% Crystals ❖"
    global-limit: 5
  gui:
    display:
      item: nether_star
      lore:
        - "&fBuy me to do something cool!"
    column: 6 # The column.
    row: 3 # The row.
    page: 2 # The page.
    show-quick-buy-sell: false
```

### Understanding all the sections

**id:** This is the internal ID of the item. Players don't see this, but it's important
to use a unique ID for every item in all of your shops. This is used in commands, placeholders and referencing the item

**buy-effects:** These are the effects that are ran when the player buys the item. Read here for more info: [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect). **Only Triggered Effects**.
#### Buy

**type/value/display:** This is standard configuration of prices, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices). Prices are configured per-item.

**limit:** (Optional) The max amount of times a player can buy this item.
#### GUI

**display.item:** This is the item shown in the GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

**row/column/page:** The location of this item in the shop

## Alt-Buy

EcoShop supports buying items with multiple currencies using the `alt-buy` options. All the options that work with `buy` also apply to `alt-buy`. These are configured the same way, using the [price](https://plugins.auxilor.io/all-plugins/prices) system.

```yaml
    alt-buy:
      value: 65
      type: crystals
      display: "&b%value%❖"
```

## Optional Arguments

### Buy

#### `require`

A mathematical expression that must be met to buy this item.

```yaml
buy:
  require: "%player_xp% >= 300"
```

#### `conditions`

Any conditions that must be met to buy the item. Read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

```yaml
buy:
  conditions:
	- id: has_permission
	  args:
		permission: group.iron
```

#### `limit`

The max times a player can buy this item.

```yaml
buy:
  limit: 1
```

#### `global-limit`

The max times all players can buy this item.

```yaml
buy:
  global-limit: 1
```

#### `max-at-once`

The max amount of this item a player can buy at once. (Removes the multi-buy GUI).

```yaml
buy:
  max-at-once: 1
```

#### `amount`

The amount of items to be bought at once.

```yaml
buy:
  amount: 32
```

#### `buy-message`

A message to be sent to the player when this item is bought.

```yaml
buy:
. buy-message:
    - "&6Thanks for buying this specific item"
```

### Sell

#### `require`

A mathematical expression that must be met to buy this item.

```yaml
buy:
  require: "%player_xp% >= 300"
```
#### `conditions`

Any conditions that must be met to sell the item. Read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).

```yaml
sell:
  conditions:
	- id: has_permission
	  args:
		permission: group.iron
```

#### `sell-message`

A message to be sent to the player when this item is sold.

```yaml
sell:
. sell-message:
    - "&6Thanks for buying this specific item"
```

#### `sell-command`

Commands to be run when the player sells this item.

```yaml
sell:
. sell-command:
    - "lp user parent set top.seller"
```

### GUI
#### `show-quick-buy-sell`

By default, quick buy/sell lore is shown, disable it using `show-quick-buy-sell`

```yaml
sell:
. show-quick-buy-sell: false
```

## Internal Placeholders

| Placeholder      | Value                                                       |
| ---------------- | ----------------------------------------------------------- |
| `%amount%`       | The amount of items the player bought                       |
| `%value%`        | The buy/sell value, to use in price display                 |
| `%value_commas%` | The comma separated buy/sell value, to use in price display |
| `%playerlimit%`  | The per-player purchase limit for the item                  |
| `%playerbuys%`   | The amount of times the player has bought this item         |
| `%globallimit%`  | The global purchase limit for the item                      |
| `%globalbuys%`   | The amount of times the item has been bought globally       |
