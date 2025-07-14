# `set_item_points`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Set item points (check the points wiki page if you don't know what these are)

# Effect Syntax
```yaml
- id: set_item_points
  args:
    type: blocks_broken # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```