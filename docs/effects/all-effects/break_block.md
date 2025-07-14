# `break_block`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Breaks a block instantly

# Effect Syntax
```yaml
- id: break_block
  args:
    prevent_trigger: true # Optional, if the mine_block trigger should not be called from this
  ...other config (eg triggers, filters, mutators, etc)
```
