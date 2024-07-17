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
name: "&6Example Scroll" # The name of the scroll
lore: # The lore added to items when inscribed with the scroll
  - ""
  - "&7This item has been inscribed with"
  - "&6Example Scroll"

targets: # The items that the scroll can be applied to, see targets.yml
  - sword
conflicts: [ ] # The conflicts that the scroll has with other scrolls

# The scroll(s) that must be applied to the item before this scroll can be applied
requirements:
  - scroll: my_requirement_scroll # The ID of scroll to require
    level: 2 # The level required (optional)
remove-requirements: false # If inscribing this scroll should remove the required scrolls

max-level: 1 # The max level of the scroll
max-uses: 1 # The amount of times the scroll can be used

# Item placeholders for dynamic lore in plugins like EcoItems
# The placeholder is %ecoscrolls_scroll_<scroll>:<placeholder>%, e.g.
# %ecoscrolls_scroll_example:bonus%
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

# Options for the physical scroll item
item:
  item: paper glint
  # Name and lore can use %uses%, %max_uses%, and %uses_left% placeholders
  name: "&6&lExample Scroll"
  lore:
    - "&7This is an example scroll."
    - "&7It does nothing."
  craftable: false
  recipe: [ ]

# Options for inscribing items with the scroll
inscription:
  inscription-table: true # If the scroll can be applied to items via the inscription table
  drag-and-drop: true # If the scroll can be applied to items via drag-and-drop

  # Read https://plugins.auxilor.io/all-plugins/prices
  # The price to inscribe the item
  price:
    value: 100
    type: coins
    display: "&e%value% coins"

  # The formula to multiply the price depending on the level.
  # The %level% placeholder is the *current* level of the scroll
  price-level-multiplier: "1 + %level% * 0.5"

  # The conditions required to inscribe the item
  # not-met-effects will run if someone tries to inscribe the item without meeting the conditions
  conditions: [ ]

  # The effects that will be run when the item is inscribed
  # If your scroll works by modifying the item (e.g. adding enchantments, changing durability),
  # then put those effects here.
  effects: [ ]
```

## Understanding all the sections

**name:** The name of the scroll, shown in item lore and Inscriber.

**lore:** The lore to be added to items inscribed with the scroll.

**targets:** The items this scroll can be applied to, from [targets.yml](https://github.com/Auxilor/EcoScrolls/blob/master/eco-core/core-plugin/src/main/resources/targets.yml).

**conflicts:** Any conflicting scrolls. If one is present, the other cannot be.

**requirements:** The scroll(s) that must be applied before this scroll can be applied.
```yaml
requirements:
  - scroll: my_requirement_scroll # The ID of scroll to require
    level: 2 # The level required (optional)
```

**remove-requirements:** If the required scroll should be removed after inscribing (true/false).

**max-level:** The maximum level for the scroll.

**max-uses:** The amount of times the scroll can be applied.

**placeholders:** Dynamic custom placeholders to show in the lore of other items (`%ecoscrolls_scroll_<scroll>_<placeholder>%`).

**effects:** Effects for the scroll to give. See [Effects & Conditions](https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions)

**conditions:** Conditions for the scroll to work. See [Effects & Conditions](https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions)

### Effects & Conditions

The effects section is the core functionality of the EcoScroll. You can configure effects, conditions, filters, mutators and triggers in this section to run whilst the inscribed item is held or used.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.

### Scroll Item

**item:** The base item, read here for more: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**name:** The item name in-game.

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**craftable:** If the item should be craftable (true/false).

**crafting-permission:** (Optional) The permission required to craft the recipe.

**recipe:** The recipe, read here for more info: [Crafting Recipes](https://plugins.auxilor.io/all-plugins/the-item-lookup-system#crafting-recipes)

### Inscription

**inscription-table:** If the scroll can be applied in the inscription table (true/false).

**drag-and-drop:** If the scroll cab be applied by drag-and-drop (true/false).

**price:** The price to apply the scroll, read here for more info: [Prices](https://plugins.auxilor.io/all-plugins/prices)

**price-level-multiplier:** The formula to multiply the price depending on level. Set to 1 for no multiplier.

**conditions:** Conditions required to inscribe the item. See [Effects & Conditions](https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions)

**effects:** Effects that are run when an item is inscribed. See [Effects & Conditions](https://plugins.auxilor.io/ecoscrolls/how-to-make-a-custom-scrollt#effects--conditions). **Only Triggered Effects**.
## Internal Placeholders

| Placeholder   | Value                                            |
| ------------- | ------------------------------------------------ |
| `%uses%`      | The amount of times the scroll has been used     |
| `%max_uses%`  | The maximum amount of times a scroll can be used |
| `%uses_left%` | The amount of uses left on the scroll            |

