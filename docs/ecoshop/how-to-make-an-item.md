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

> [!example]
> ```yaml
> - id: cooked_mutton
>   item: cooked_mutton
>   buy:
>     type: coins
>     value: 20
>     display: $%value%
>     amount: 32
>   sell:
>     type: coins
>     value: 10
>     display: $%value%
>   gui:
>     column: 4
>     row: 1
>     page: 1
> ```

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

### Command Items

Sometimes you want to run a command when a player buys an item, such as giving permissions/ranks/items from other plugins not currently supported in the [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

Of course, you can't sell a command, so they're buy-only.

> [!example]
> ```yaml
> - id: iron_rank
>   command:
>     - lp user %player% parent set iron
>   buy:
>     value: "%ecomc_iron_price%"
>     type: crystals
>     display: "&b%value% Crystals ❖"
> 	limit: 1
>   gui:
>     display:
>       item: diamond_chestplate name:"&aIron Rank"
>       lore:
>         - "&fBuy &7&lIRON&r&f rank to get"
>         - "&fthe following benefits:"
>         - " &8»&f &eExample Perk"
>       bottom-lore: # You can also add lore to be put under other lore (e.g. price, quick buy/sell info, etc.)
>         - ""
>         - "&e&oLeft click to buy with money,"
>         - "&e&oRight click to buy with &bCrystals ❖&e&o!"
>     column: 5 # The column.
>     row: 3 # The row.
>     page: 2 # The page.
> ```

### Understanding all the sections

**id:** This is the internal ID of the item. Players don't see this, but it's important
to use a unique ID for every item in all of your shops. This is used in commands, placeholders and referencing the item

**command:** This is the command to be run when a player buys this item. You can use `%player%` and `%amount%` as placeholders.
#### Buy

**type/value/display:** This is standard configuration of prices, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices). Prices are configured per-item.

**limit:** (Optional) The max amount of times a player can buy this item.
#### GUI

**display.item:** This is the item shown in the GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

**display.lore:** This is the lore shown on the item.

**display.bottom-lore:** Lore shown under other lore, such as displaying prices.

**row/column/page:** The location of this item in the shop

### Effect Items

Instead of just using commands, EcoShop also has full access to the
[effects system](https://plugins.auxilor.io/effects/configuring-an-effect), so you can run effects when a player buys an item, or even just put effects themselves in the shop.

Like commands, these are unsellable.

> [!example]
> ```yaml
> - id: my_effect_item
>   effects: [ ]
>   buy:
>     value: 65
>     type: crystals
>     display: "&b%value% Crystals ❖"
>     global-limit: 5
>   gui:
>     display:
>       item: nether_star
>       lore:
>         - "&fBuy me to do something cool!"
>     column: 6 # The column.
>     row: 3 # The row.
>     page: 2 # The page.
>     show-quick-buy-sell: false
> ```

### Understanding all the sections

**id:** This is the internal ID of the item. Players don't see this, but it's important
to use a unique ID for every item in all of your shops. This is used in commands, placeholders and referencing the item

**effects:** These are the effects that are ran when the player buys the item. Read here for more info: [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect). **Only Triggered Effects**.
#### Buy

**type/value/display:** This is standard configuration of prices, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices). Prices are configured per-item.

**limit:** (Optional) The max amount of times a player can buy this item.
#### GUI

**display.item:** This is the item shown in the GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). 

**row/column/page:** The location of this item in the shop

## Alt-Buy

EcoShop supports buying items with multiple currencies using the `alt-buy` options. All the options that work with `buy` also apply to `alt-buy`. These are configured the same way, using the [price](https://plugins.auxilor.io/all-plugins/prices) system.

> [!example]
> ```yaml
>     alt-buy:
>       value: 65
>       type: crystals
>       display: "&b%value%❖"
> ```

## Optional Arguments

### Buy

> [!info] `require`
> A mathematical expression that must be met to buy this item.
> ```yaml
> buy:
>   require: "%player_xp% >= 300"
> ```

> [!info] `conditions`
> Any conditions that must be met to buy the item. Read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).
> ```yaml
> buy:
>   conditions:
> 	- id: has_permission
> 	  args:
> 		permission: group.iron
> ```

> [!info] `limit`
> The max times a player can buy this item.
> ```yaml
> buy:
>   limit: 1
> ```

> [!info] `global-limit`
> The max times all players can buy this item.
> ```yaml
> buy:
>   global-limit: 1
> ```

> [!info] `max-at-once`
> The max amount of this item a player can buy at once. (Removes the multi-buy GUI).
> ```yaml
> buy:
>   max-at-once: 1
> ```

> [!info] `amount`
> The amount of items to be bought at once.
> ```yaml
> buy:
>   amount: 32
> ```

> [!info] `buy-message`
> A message to be sent to the player when this item is bought.
> ```yaml
> buy:
> . buy-message:
>     - "&6Thanks for buying this specific item"
> ```

### Sell

> [!info] `require`
> A mathematical expression that must be met to sell this item.
> ```yaml
> buy:
>   require: "%player_xp% >= 300"
> ```

> [!info] `conditions`
> Any conditions that must be met to sell the item. Read here for more info: [Configuring a Condition](https://plugins.auxilor.io/effects/configuring-a-condition).
> ```yaml
> buy:
>   conditions:
> 	- id: has_permission
> 	  args:
> 		permission: group.iron
> ```

> [!info] `sell-message`
> A message to be sent to the player when this item is sold.
> ```yaml
> sell:
> . sell-message:
>     - "&6Thanks for selling this specific item"
> ```

> [!info] `sell-command`
> Commands to be run when the player sells this item.
> ```yaml
> sell:
> . sell-command:
>     - "lp user parent set top.seller"
> ```
### GUI

> [!info] `show-quick-buy-sell`
> By default, quick buy/sell lore is shown, disable it using `show-quick-buy-sell`
> ```yaml
> gui:
>   show-quick-buy-sell: false
> ```

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
