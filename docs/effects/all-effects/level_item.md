# `level_item`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Gain item XP for a certain level

# Effect Syntax
```yaml
- id: level_item
  args:
    id: mining_progress # The level ID
    xp: "%v% * 2" # The amount of xp to gain
  ...other config (eg triggers, filters, mutators, etc)
```