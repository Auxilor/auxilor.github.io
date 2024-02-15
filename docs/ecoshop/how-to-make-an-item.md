---
title: "How to make an item"
sidebar_position: 4
---

## What are items?

Items are everything that can be bought or sold in the shop. They can be real items or
commands, single-purchase, limited purchase, buy only, sell only, both, they can be bought
with 2 different currency types - the point is, there's a lot of options to wrap your head around.

## How do I make one?

### Simple buy-sell item

Let's start with a really simple shop item - if you're making a standard buy-sell shop, this
is what most of your items will look like:

```yaml
id: cooked_mutton
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

Let's break down each section:

`id`: This is the internal ID of the item. Players don't see this, but it's important
to use a unique ID for every item in all of your shops.

`item`: This is the actual item we're selling. It supports custom items, enchantments,
custom names, amounts, reforges, et cetera - read
more [here](https://plugins.auxilor.io/all-plugins/the-item-lookup-system)

`buy`: If you want to make your item purchasable, this is where you specify the buy price.
Read more about prices [here](https://plugins.auxilor.io/all-plugins/prices), they're important
to understand when making items.

`buy.amount`: This is an optional feature where you specify the default amount of items
to buy with quick-buy, and the default amount of items when opening the buy amount selection
menu. You still specify the value of only one item - this is just to give a default purchase
quantity.

`sell`: This works the same as buy, except now it's the sell price.

`gui`: These are options for how the item will show in the category. Row is top to bottom,
column is left to right, and pages are self-explanatory.

### Command Items

Sometimes you want to run a command when a player buys an item rather than (or as well as)
giving the player a real item. It's really common now in servers to have multiple currency
setups and move things like ranks to be done from in-game shops, so let's see how you can
do that with EcoShop.

Of course, you can't sell a command, so they're buy-only.

```yaml
id: iron_rank

command: # I Changed the commands: to command: because it doesn't work with an "s"
  - lp user %player% parent set iron

buy:
  value: "%ecomc_iron_price%"
  type: crystals
  display: "&b%value% Crystals ❖"

  require: "%actions_iron_buy_is_met%"

  limit: 1

alt-buy:
  value: "%ecomc_iron_crystal_price%"
  type: crystals
  display: "&b%value% Crystals ❖"

  conditions: [ ]

gui:
  display:
    item: diamond_chestplate
    lore:
      - "&fBuy &7&lIRON&r&f rank to get"
      - "&fthe following benefits:"
      - " &8»&f &eExample Perk"
    bottom-lore:
      - "&e&oLeft click to buy with money,"
      - "&e&oRight click to buy with &bCrystals ❖&e&o!"
  column: 5 # The column.
  row: 3 # The row.
  page: 2 # The page.

  show-quick-buy-sell: false
```

`commands`: These are the commands to run when the player buys the item. You can use `%player%` and
`%amount%` as placeholders.

`buy.value`: You can use placeholders in values! Any PlaceholderAPI placeholder is allowed. And it
gets a lot better than that - you can do **math** with this too. For example, `%player_y% * 100 - cos(%player_x%)`
would be totally allowed too. That's obviously a pretty weird price, but it's possible.

`buy.require`: This is a mathematical expression that has to be met in order to be allowed to
buy this item. For example, you could do `%player_xp% >= 300`

`buy.conditions`: Conditions that have to be met in order to buy this item, read
[here](https://plugins.auxilor.io/effects/configuring-a-condition) for more information!

`buy.limit`: The maximum amount of times a player can buy this item.

`alt-buy`: This is a secondary buying option that you can right-click the item to use. Let's say
you have a dual currency system, you can make left-click cost money and right-click cost crystals,
or you can make left-click cost gold ingots and right-click cost emeralds.

`gui.display`: This is the item that's shown to players in the shop. Commands don't have any
item to automatically show, so you have to specify one. You can also specify a custom display item
if you're selling items, but it's not necessary. You can optionally specify lore and bottom lore too,
where bottom lore is shown under things like the buy price, quick buy options, etc.

`gui.show-quick-buy-sell`: By default, quick buy / quick sell lore is shown on items. If you don't
want that for this item, you can disable it here.

### Effect Items

Instead of just using commands, EcoShop also has full access to the
[effects system](https://plugins.auxilor.io/effects/configuring-an-effect), so you can run
effects when a player buys an item, or even just put effects themselves in the shop.

Like commands, these are unsellable.

```yaml
id: my_effect_item

effects: [ ]

buy:
  value: 65
  type: crystals
  display: "&b%value% Crystals ❖"

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

`effects`: These are the effects that are ran when the player buys the item. Read
[here](https://plugins.auxilor.io/effects/configuring-an-effect) to learn more!

### Extra Options

There's some extra options that aren't shown in the above examples. If you want to explore all
the possible options, they're showcased in the [example category](https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/categories/_example.yml)
