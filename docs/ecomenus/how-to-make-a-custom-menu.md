---
title: How to make a custom menu
sidebar_position: 2
---
---

## Default Configs

The default configs can be found [here](https://github.com/Auxilor/EcoMenus/tree/master/eco-core/core-plugin/src/main/resources/menus).

## Config Layout

Each menu has its own config file, placed in the `/menus/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the menu is the file name. This is what you use in permissions and effects.
ID's must be lowercase letters, numbers, and underscores only.

## Example Menu Config

```yaml
# The title of the GUI
title: "Example GUI"

# (Optional) The command to open the GUI, if not set, there will be no command.
command: examplemenu

# Read https://plugins.auxilor.io/effects/configuring-a-condition
# The conditions required to open the GUI
conditions: [ ]

# The messages to send when the conditions are not met
cannot-open-messages:
  - "&cYou cannot open this menu!"

# Read https://plugins.auxilor.io/effects/configuring-an-effect
# Effects to run when the GUI is opened
open-effects: [ ]

# Effects to run when the GUI is closed
close-effects: [ ]

# The size of the GUI, between 1 and 6
rows: 6

# Options for the page arrows
# If on the first page, the backwards arrow will not be shown,
# and if on the last page, the forwards arrow will not be shown.
forwards-arrow:
  item: arrow name:"&fNext Page"
  enabled: true
  location:
    row: 6
    column: 8

backwards-arrow:
  item: arrow name:"&fPrevious Page"
  enabled: true
  location:
    row: 6
    column: 2

pages:
  - page: 1
    mask:
      # The way the mask works is by having a list of materials
      # And then a pattern to use those materials.

      # The pattern is the rows in the GUI
      # Each line must be 9 long, and the amount of rows should be the amount of rows in the GUI
      # A zero represents nothing
      # A 1 represents the first material
      # A 2 represents the second material
      # And so on, you can add up to 9.

      items:
        - gray_stained_glass_pane
        - black_stained_glass_pane
      pattern:
        - "211101112"
        - "211111112"
        - "210000012"
        - "210010012"
        - "211111112"
        - "211101112"
  - page: 2
    mask:
      items:
        - gray_stained_glass_pane
        - red_stained_glass_pane
      pattern:
        - "211101112"
        - "211111112"
        - "210000012"
        - "210010012"
        - "211111112"
        - "211101112"

slots:
  - item: barrier name:"&cClose"
    lore: [ ]
    location:
      row: 6
      column: 5
      page: 1 # If you don't specify a page, it will be on all pages

      # (Optional) You can specify the layer of the slot.
      # The layer can be any of: lower, middle, upper, or top (defaults to middle)
      # This is useful if you want to have a slot on top of another slot, and
      # have the upper slot show if some conditions are met.
      layer: middle

    # Read https://plugins.auxilor.io/effects/configuring-a-condition
    # The conditions required to click the item
    conditions: [ ]

    # If the item should be shown if the conditions are not met
    show-if-not-met: false

    # Read https://plugins.auxilor.io/effects/configuring-an-effect
    # The effects ran when the item is clicked
    left-click:
      - id: send_message
        args:
          message: "&cYou clicked the close button!"
      - id: close_inventory

  - item: player_head head:%player% name:"&f%player%"
    location:
      row: 1
      column: 5
      page: 1

    shift-right-click:
      - id: open_menu
        args:
          menu: other_example_menu

      - id: run_command
        args:
          command: "eco give %player% 100"
```

## Understanding all the sections

**title:** The title of the GUI.

**command:** The command used to open the GUI. Set to `command: []` for no command.

**conditions:** Conditions to be met to open the GUI. See [Effects & Conditions](https://plugins.auxilor.io/ecomenus/how-to-make-a-custom-menu#effects-&-conditons) for more info.

**cannot-open-messages:** Messages to send when conditions are not met.

**open/close effects:** Effects to be run when the menu is opened or closed. See [Effects & Conditions](https://plugins.auxilor.io/ecomenus/how-to-make-a-custom-menu#effects-&-conditons) for more info.

**rows:** The amount of rows in the GUI.

**forwards/backwards-arrow:** The item and location of the navigation arrows. You can disable this by setting **enabled: false**.
##### Pages

To configure a pattern and mask, read here for more info: [Pages](https://plugins.auxilor.io/all-plugins/pages)
##### Slots

The items to be displayed in your menu. See [How to make a slot item](https://plugins.auxilor.io/ecomenus/how-to-make-a-slot-item) for more info on creating slots.

### Effects & Conditions

The effects section is the core functionality of the action. You can configure effects, conditions, filters, mutators and triggers in this section to run globally or individually.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.