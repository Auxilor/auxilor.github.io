# `give_item`
#### Triggered Effect

Gives a player an item

# Example Config
```yaml
- id: give_item
  args:
    item: "diamond_sword razor:5" # The item to give
    slot: hand # (Optional) The slot to give in, can be any numeric slot, hand, or 'any' (Defaults to any)
  ...other config (eg triggers, filters, mutators, etc)
```