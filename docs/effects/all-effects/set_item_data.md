# `set_item_data`
:::dangerTriggered Effect
:::

Set item data

# Effect Syntax
```yaml
- id: set_item_data
  args:
    key: owner # The key to set
    value: "%player_uuid%" # The value to set it to
  ...other config (eg triggers, filters, mutators, etc)
```