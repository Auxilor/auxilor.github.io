# `drop_item_slot`
:::dangerTriggered Effect
:::

Drops items from the player's inventory

# Effect Syntax
```yaml
- id: drop_item_slot
  args:
    slot: hand # The slot to drop, can be any numeric slot, hand, or 'any' (Defaults to any)
    amount: 1 # (Optional) The amount of items to drop, defaults to full stack
  ...other config (eg triggers, filters, mutators, etc)
```