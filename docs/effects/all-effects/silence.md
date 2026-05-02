# `silence`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Silences an entity so it cannot make sounds for a duration

# Effect Syntax
```yaml
- id: silence
  args:
    ticks: 100 # The duration in ticks to silence the entity
  ...other config (eg triggers, filters, mutators, etc)
```