---
title: "How to make a shop"
sidebar_position: 2
---
## Shops
Creating shops is easy if you follow the the basic rules: A shop requires [[how-to-make-a-category|categories]], and categories require [[how-to-make-an-item|items]]. 

## Default config
The default configs can be found [here](https://github.com/Auxilor/EcoShop/blob/main/eco-core/core-plugin/src/main/resources/shops).

## How to add shops
Each shop is its own config file, placed in the `/shops/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the shop is the file name. This is what you use in commands, effects and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Shop Config

```yaml
title: Demo Shop # The GUI title.
command: demoshop # The command to open the shop.

forwards-arrow: # The arrow for switching between pages. If on the last page, this will not show up.
  item: arrow name:"&fNext Page"
  row: 6
  column: 6

backwards-arrow: # The arrow for switching between pages. If on the first page, this will not show up.
  item: arrow name:"&fPrevious Page"
  row: 6
  column: 4

buy-broadcasts: # Options for buy broadcasts
  enabled: true # If purchases in this shop should be broadcast to the server, good for /buy menus.
  message: "&b&lCrystal Shop&r &8»&r %player%&r&f has bought &r%item%&r&ffrom the &bCrystal Shop ❖&f!" # Use %player%, %item%, and %amount%
  sound: # Broadcast sound, remove this section if you don't want a sound.
    sound: ui_toast_challenge_complete
    pitch: 1.5
    volume: 2

click-sound: # A sound to be played when clicking an icon in this shop, remove this section if you don't want a sound.
  sound: block_stone_button_click_on # The sound https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html
  pitch: 1 # The pitch (0.5 - 2)
  volume: 1

buy-sound: # A sound to be played when buying something in this shop, remove this section if you don't want a sound.
  sound: entity_player_levelup
  pitch: 2
  volume: 1

sell-sound: # A sound to be played when selling something in this shop, remove this section if you don't want a sound.
  sound: block_amethyst_block_place
  pitch: 1.5
  volume: 1

# Shops can work in two ways.

# You can either have a shop contain a list of categories, or you can make a shop be one
# category that you're instantly sent to (for single page shops, e.g. a boss spawn egg shop)

# If you want a single-page shop, use direct-category to link it straight to a category
# direct-category: example_category

# If you want a regular shop that contains multiple categories, use these options here
rows: 3
pages: # All the pages in the preview GUI. You can add as many pages as you want.
  - page: 1
    mask: # Filler items for decoration
      items: # Add as many items as you want
        - gray_stained_glass_pane # Item 1
        - black_stained_glass_pane # Item 2
      pattern:
        - "222222222"
        - "211111112"
        - "211000112"
        - "211000112"
        - "211111112"
        - "222222222"
    categories: # Where to put categories in the GUI
      - id: example # The category ID
        row: 3 # The row
        column: 3 # The column
      - id: example_2
        row: 4
        column: 6

    # Custom GUI slots; see here for a how-to: https://plugins.auxilor.io/all-plugins/custom-gui-slots
    custom-slots: [ ]
```

## Understanding all the sections

**title:** The name shown at the top of the GUI.

**forwards/backwards-arrow:** The item and location of the navigation arrows.

#### Buy Broadcasts

**enabled:** If a broadcast should be sent when a player buys from this shop.

**message:** The broadcast message to be sent

**sound:** (Optional) The sound to play when an item is bought.

#### Sounds (Optional)

**click-sound:** The sound to play when buttons in this shop are pressed.

**buy-sound:** The sound to play when an item is bought from this shop.

**sell-sound:** The sound to play when an item is sold from this shop.

*You can find all the sounds here: [Sounds](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)*

### Configuring Categories

There are two methods to add [[how-to-make-a-category|categories]], first is a direct and second is a list. 

#### Direct Category

**direct-category:** The ID of the category, this will open the category directly instead of the shop GUI - for single page shops.

#### List of Categories

**rows:** How many rows are in the shop GUI.
##### Pages

To configure a pattern and mask, read here for more info: 
##### Categories

**id:** The ID of the category (eg. `example.yml` has an ID of `example`)

**row/column:** The location of this category in the shop