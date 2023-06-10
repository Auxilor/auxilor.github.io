# `give_global_points`
#### Triggered Effect

Add / subtract global points (check the points wiki page if you don't know what these are)

# Example Config
```yaml
- id: give_global_points
  args:
    type: item_stock # The point to add/subtract
    amount: 1 # The amount to add/subtract
  ...other config (eg triggers, filters, mutators, etc)
  ```