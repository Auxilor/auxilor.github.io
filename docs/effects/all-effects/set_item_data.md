# `set_item_data`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
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