# `sell_items`
#### Triggered Effect

Sells dropped items / item from trigger

# Effect Syntax
```yaml
- id: sell_items
  args:
    multiplier: 0.5 # The price multiplier
    whitelist: [] # The only items allowed to be sold, if this is not present all items can be sold
  ...other config (eg triggers, filters, mutators, etc)
```