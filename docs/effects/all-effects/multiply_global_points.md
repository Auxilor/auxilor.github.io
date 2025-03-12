# `multiply_global_points`
#### Triggered Effect

Multiply global points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

# Example Config
```yaml
- id: multiply_global_points
  args:
    type: item_stock # The point to multiply
    multiplier: 2 # The amount to multiply it by
  ...other config (eg triggers, filters, mutators, etc)
```