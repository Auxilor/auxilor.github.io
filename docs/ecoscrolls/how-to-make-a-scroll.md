---
title: How to make a Scroll
sidebar_position: 1
---

## Default configs
The default configs can be found [here](https://github.com/Auxilor/EcoScrolls/tree/master/eco-core/core-plugin/src/main/resources/scrolls).
You can find additional user-created configs on [lrcdb](https://lrcdb.auxilor.io/).

## How to add scrolls
Each scroll is its own config file, placed in the `/scrolls/` folder, and you can add or remove them as you please. There's an example config called `_example.yml` to help you out!

The ID of the Scroll is the file name. This is what you use in commands and placeholders.
ID's must be lowercase letters, numbers, and underscores only.

## Example Scroll Config

```yaml
# The ID of the scroll is the name of the .yml file,
# for example coins_on_kill.yml has the ID of coins_on_kill
# You can place scrolls anywhere in this folder,
# including in subfolders if you want to organize your scroll configs
# _example.yml is not loaded.

# The name of the scroll
name: "&6Example Scroll"

# The max level of the scroll
max-level: 1

# The amount of times the scroll can be used
max-uses: 1

# Options for the physical scroll item
item:
  item: paper glint

  # Name and lore can use %uses%, %max_uses%, and %uses_left% placeholders
  name: "&6&lExample Scroll"
  lore:
      - "&7This is an example scroll."
      - "&7It does nothing."

  # Options for crafting, read here: https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes
  craftable: false
  recipe: [ ]

# Options for inscribing items with the scroll
inscription:
  # The conditions required to inscribe the item
  # not-met-effects will run if someone tries to inscribe the item without meeting the conditions
  conditions: [ ]

  # The effects that will be run when the item is inscribed
  # If your scroll works by modifying the item (e.g. adding enchantments, changing durability),
  # then put those effects here.
  effects: [ ]

  # Read https://plugins.auxilor.io/all-plugins/prices
  # The price to inscribe the item
  price:
    value: 100
    type: coins
    display: "&e%value% coins"

  # The formula to multiply the price depending on the level.
  # The %level% placeholder is the *current* level of the scroll
  price-level-multiplier: "1 + %level% * 0.5"

  # If the scroll can be applied to items via drag-and-drop
  drag-and-drop: true

  # If the scroll can be applied to items via the inscription table
  inscription-table: true

# The items that the scroll can be applied to, see targets.yml
targets:
  - sword

# The conflicts that the scroll has with other scrolls
conflicts: [ ]

# The scroll(s) that must be applied to the item before this scroll can be applied
requirements:
  - scroll: my_requirement_scroll # The scroll to require
    level: 2 # The level required (optional)

# If inscribing this scroll should remove the required scrolls
remove-requirements: false

# The lore added to items when inscribed with the scroll
lore:
  - ""
  - "&7This item has been inscribed with"
  - "&6Example Scroll"

# Item placeholders for dynamic lore in plugins like EcoItems
# The placeholder is %ecoscrolls_scroll_<scroll>_<placeholder>%, e.g.
# %ecoscrolls_scoll_example_bonus%
placeholders:
  bonus: "%level% * 2"

# Read https://plugins.auxilor.io/effects/configuring-an-effect
# The effects for the scroll to give
effects:
  - id: send_message
    args:
      message: "&6You have used the Example Scroll!"
    triggers:
      - alt_click

# Read https://plugins.auxilor.io/effects/configuring-a-condition
# The conditions for the scroll to work
conditions: [ ]
```
