# `place_block`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Places a block at a location, optionally reverting it after a duration

# Effect Syntax
```yaml
- id: place_block
  args:
    block: stone # The block to place (eco block ID)
    duration: 60 # (Optional) Ticks before the original block is restored
  ...other config (eg triggers, filters, mutators, etc)
```