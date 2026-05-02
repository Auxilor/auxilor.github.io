# `chain_lightning`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Strikes chain lightning that jumps between nearby entities

# Effect Syntax
```yaml
- id: chain_lightning
  args:
    jumps: 3 # The number of times the lightning jumps
    range: 6 # The range in blocks to look for the next target
    damage: 3.0 # The damage dealt to each entity hit
  ...other config (eg triggers, filters, mutators, etc)
```