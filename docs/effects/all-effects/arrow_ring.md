# `arrow_ring`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Spawns a ring of arrows around a location

# Effect Syntax
```yaml
- id: arrow_ring
  args:
    amount: 12 # The amount of arrows to spawn
    height: 3 # The height at which to spawn the arrows
    radius: 1.5 # The radius of the ring
    arrow_damage: 10 # The amount of damage for the arrows to deal
    fire_ticks: 30 # The fire ticks for the arrows to have
  ...other config (eg triggers, filters, mutators, etc)
```