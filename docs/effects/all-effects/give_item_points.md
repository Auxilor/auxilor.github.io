# `give_item_points`
#### Triggered Effect

Add / subtract item points

**Requires Item Points extension**

# Example Config
```yaml
- id: give_item_points
  args:
    type: point_name # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
```