# `set_global_points`
#### Triggered Effect

Set global points (check the points wiki page if you don't know what these are)

# Example Config
```yaml
- id: set_global_points
  args:
    type: global_stock # The point to set
    amount: 0 # The amount to set it to
  ...other config (eg triggers, filters, mutators, etc)
```