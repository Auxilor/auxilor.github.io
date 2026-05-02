# `clear_inventory`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Clears a section of the player's inventory

# Effect Syntax
```yaml
- id: clear_inventory
  args:
    type: all # The section to clear: all, hotbar, main, or armor
  ...other config (eg triggers, filters, mutators, etc)
```