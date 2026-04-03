---
title: How to make a Category
sidebar_position: 2
---

## Categories

Categories are how shops are organised. Items are sold / bought in categories, they're the actual 'shop' part. In the [How to make a Shop](https://plugins.auxilor.io/ecoshop/how-to-make-a-shop) section, you will have seen how shops can either be a portal to a bunch of categories, or alternatively just directly link to a category.

## How to add shops
Each category is its own config file, placed in the `/categories/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the category is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

One category can be in as many shops as you want! EcoShop is smart, it knows what shop you opened the category from, so any sounds / broadcasts from the shop you came from will work even if 2 shops share the same category.

## Example Category Config

```yaml
item: diamond_sword name:"&fExample Category" # The item shown in the shop.
lore: [ ] # The lore of the item shown in the shop.
permission: ecoshop.category.permission1 # (Optional) The permission required to access/use the category.

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

# Your items go here! Read here for more info on creating your shop items: https://plugins.auxilor.io/ecoshop/how-to-make-an-item
items: []
```

## Understanding all the sections

### The Category Info Section

```yaml
item: diamond_sword name:"&fExample Category" # The item shown in the shop.
lore: # The lore of the item shown in the shop.
  - "&aBuy all the best gear here!"
permission: ecoshop.category.permission1 # (Optional) The permission required to access/use the category.
```

### The GUI Section
Check out the [GUI Options](https://plugins.auxilor.io/all-plugins/pages) for more info on how to configure the GUI.
```yaml
gui:
  rows: 6 # The amount of rows to have (1-6).
  title: "Demo Category" # The title of the GUI.

  # Navigation options, hidden if on the first/last page.
  forwards-arrow:
    item: arrow name:"&fNext Page" # The item for the forwards arrow - see Item Lookup System
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
```

### The Items Section

```yaml
items:
  - id: shop_item_id
    ...rest of item config
```

This section is where you put any items that you are buying and/or selling in this category.

Read here for more info on creating your shop items: [How to make an Item](how-to-make-an-item).

<hr/>

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/categories).