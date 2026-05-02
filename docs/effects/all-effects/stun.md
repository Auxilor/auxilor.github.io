# `stun`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Prevents an entity from moving by zeroing its velocity each tick for a duration

# Effect Syntax
```yaml
- id: stun
  args:
    ticks: 60 # The duration in ticks to stun the entity
  ...other config (eg triggers, filters, mutators, etc)
```