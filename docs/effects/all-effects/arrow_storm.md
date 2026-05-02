# `arrow_storm`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Rains arrows down onto a location

# Effect Syntax
```yaml
- id: arrow_storm
  args:
    amount: 10 # The number of arrows to spawn
    height: 10 # The height above the target location to spawn arrows
    spread: 3 # The horizontal spread radius of the arrow spawn positions
    damage: 2.0 # (Optional) The damage each arrow deals
  ...other config (eg triggers, filters, mutators, etc)
```