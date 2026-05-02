# `sort_inventory`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Sorts a section of the player's inventory alphabetically by item type

# Effect Syntax
```yaml
- id: sort_inventory
  args:
    type: main # The section to sort: all, hotbar, or main
  ...other config (eg triggers, filters, mutators, etc)
```