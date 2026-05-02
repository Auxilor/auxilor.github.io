# `vortex`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Pulls nearby entities toward a location over a duration, then damages them

# Effect Syntax
```yaml
- id: vortex
  args:
    radius: 6 # The radius in blocks to pull entities from
    duration: 40 # The duration in ticks to pull entities
    damage: 5.0 # The damage dealt to all affected entities at the end
    pull_strength: 0.3 # (Optional) The strength of the pull each tick, defaults to 0.3
  ...other config (eg triggers, filters, mutators, etc)
```