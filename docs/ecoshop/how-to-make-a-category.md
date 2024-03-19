---
title: "How to make a category"
sidebar_position: 2
---

## Categories

Categories are how shops are organised. Items are sold / bought in categories, they're the actual 'shop' part. In the [How to make a Shop](https://plugins.auxilor.io/ecoshop/how-to-make-a-shop) section, you will have seen how shops can either be a portal to a bunch of categories, or alternatively just directly link to a category.

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/categories).

## How to add shops
Each category is its own config file, placed in the `/categories/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the category is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

One category can be in as many shops as you want! EcoShop is smart, it knows what shop you opened the category from, so any sounds / broadcasts from the shop you came from will work even if 2 shops share the same category.

## Example Category Config

```yaml
item: diamond_sword name:"&fExample Category" # The item shown in the shop.  
lore: [ ] # The lore of the item shown in the shop.  
# permission: ecoshop.category.permission1 # (Optional) The permission required to access/use the category.  
  
# Options for the category GUI.  
gui:  
  rows: 6 # The amount of rows to have (1-6).  
  title: "Demo Category" # The title of the GUI.  
  
  # Navigation options, hidden if on the first/last page.  
  forwards-arrow:  
    item: arrow name:"&fNext Page"  
    row: 6  
    column: 6  
  backwards-arrow:  
    item: arrow name:"&fPrevious Page"  
    row: 6  
    column: 4  
  
  # Add as many pages as you want by appending to this list  
  pages:  
    - page: 1  
      mask:  
        items: # The background material  
          - gray_stained_glass_pane  
          - black_stained_glass_pane  
        pattern: # 0 for empty, 1 for the first item, 2 for the second item, etc  
          - "222222222"  
          - "211111112"  
          - "211111112"  
          - "211111112"  
          - "211111112"  
          - "222222222"  
  
      # Custom GUI slots; see here for a how-to: https://plugins.auxilor.io/all-plugins/custom-gui-slots  
      custom-slots: [ ]  
  
# The items for your players to buy or sell, read here for more info: https://plugins.auxilor.io/ecoshop/how-to-make-an-item  
items:  
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
      row: 3  
      page: 1  
  
  - id: iron_rank  
    command:  
      - lp user %player% parent set iron  
    buy:  
      value: "%ecomc_iron_price%"  
      type: crystals  
      display: "&b%value% Crystals ❖"  
      limit: 1 # (Optional) The max amount of times each player can buy this item, defaults to infinite.  
      ## Placeholders: %playerlimit% (Displays player purchase limit) %playerbuys% (Displays amount bought by player).
    gui:  
      display:  
        item: diamond_chestplate name:"&aIron Rank"  
        lore:  
          - "&fBuy &7&lIRON&r&f rank to get"  
          - "&fthe following benefits:"  
          - " &8»&f &eExample Perk"  
        bottom-lore: # You can also add lore to be put under other lore (e.g. price, quick buy/sell info, etc.)  
          - ""  
          - "&e&oLeft click to buy with money,"  
          - "&e&oRight click to buy with &bCrystals ❖&e&o!"  
      column: 5 # The column.  
      row: 3 # The row.  
      page: 1 # The page.  
  
  - id: my_effect_item  
    effects: [ ]  
    buy:  
      value: 65  
      type: crystals  
      display: "&b%value% Crystals ❖"  
      global-limit: 5 # (Optional) The max amount of this item that can be bought by all players, defaults to infinite.  
      ## Placeholders: %globallimit% (Displays global purchase limit) %globalbuys% (Displays amount bought globally).    
    gui:  
      display:  
        item: nether_star  
        lore:  
          - "&fBuy me to do something cool!"  
      column: 6 # The column.  
      row: 3 # The row.  
      page: 1 # The page.  
      show-quick-buy-sell: false
```

## Understanding all the sections

### Basic Options

**item:** The item that is displayed in your shop GUI, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system). Use `name:<name>` to set a custom name for the category.

**lore:** The lore/description to be shown in your shop GUI.

**permission:** (Optional) The permission required to open this category.

### GUI

**rows:** The amount of rows the category GUI will have (1-6).

**title:** The name shown at the top of the GUI.

**forwards/backwards-arrow:** The item and location of the navigation arrows.

##### Pages

To configure a pattern and mask, read here for more info: [Pages](https://plugins.auxilor.io/all-plugins/pages)

**custom-slots:** Any non-shop items for the GUI (eg. info items), read here for more info: [Custom GUI Slots](https://plugins.auxilor.io/all-plugins/custom-gui-slots).

### Items

This section is where you put any items that you are buying and/or selling in this category.

Read here for more info on creating your shop items: [How to make an Item](how-to-make-an-item).