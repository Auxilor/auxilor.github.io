# `multiply_points`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Multiply points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

# Effect Syntax
```yaml
- id: multiply_points
  args:
    type: g_souls # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```