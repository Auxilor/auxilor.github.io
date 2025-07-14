# `give_item_points`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Add / subtract item points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

# Effect Syntax
```yaml
- id: give_item_points
  args:
    type: point_name # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```