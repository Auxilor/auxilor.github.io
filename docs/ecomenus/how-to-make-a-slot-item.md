---
title: How to make a custom menu
sidebar_position: 2
---
---

## Example Slot Item Config

```yaml
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
```

## Understanding all the sections

**item:** The item that is displayed in your menu, read here for more info: [Item Lookup System](https://plugins.auxilor.io/all-plugins/the-item-lookup-system).

**lore:** The item lore shown in-game. Set to `lore: []` to remove all lore lines.

**conditions:** Conditions to be met to click the slot. See [Effects & Conditions](https://plugins.auxilor.io/ecomenus/how-to-make-a-slot-item#effects-&-conditons) for more info.

**show-if-not-met:** If the item/layer should be shown if conditions are not met (true/false)
#### Location:

**row/column/page:** The location of this item in the menu.

**layer:** The priority of the item. The higher the layer, the higher the priority (`lower`, `middle`, `upper`, or `top`).

#### Clicks
The **effects** run when the item is clicked. See [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect).
`left-click`, `right-click`, `shift-left-click` & `shift-right-click`.

```yaml
    left-click:
      - id: send_message
        args:
          message: "&cYou clicked the close button!"
      - id: close_inventory
```

### Effects & Conditions

The effects section is the core functionality of the action. You can configure effects, conditions, filters, mutators and triggers in this section to run globally or individually.

Check out [Configuring an Effect](https://plugins.auxilor.io/effects/configuring-an-effect) to understand how to configure this section correctly.

For more advanced users or setups, you can configure chains in this section to string together different effects under one trigger. Check out [Configuring an Effect Chain](https://plugins.auxilor.io/effects/configuring-a-chain) for more info.