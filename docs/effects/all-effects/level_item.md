# `level_item`
:::dangerTriggered Effect
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