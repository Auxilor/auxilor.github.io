# `multiply_item_points`
#### Triggered Effect

Multiply item points (check the [points](https://plugins.auxilor.io/effects/points) wiki page if you don't know what these are)

# Example Config
```yaml
- id: multiply_item_points
  args:
    type: point_name # The point to multiply
    multiplier: 2.5 # The multiplier
  ...other config (eg triggers, filters, mutators, etc)
```