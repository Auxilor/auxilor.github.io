# `blink`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Teleports the player forward in the direction they are looking, stopping at solid blocks

# Effect Syntax
```yaml
- id: blink
  args:
    distance: 10 # The maximum number of blocks to teleport forward
  ...other config (eg triggers, filters, mutators, etc)
```