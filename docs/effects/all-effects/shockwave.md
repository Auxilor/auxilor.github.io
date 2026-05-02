# `shockwave`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Emits an expanding shockwave that knocks back and damages nearby entities

# Effect Syntax
```yaml
- id: shockwave
  args:
    radius: 5 # The final radius of the shockwave in blocks
    pulses: 5 # The number of expansion pulses
    damage: 3.0 # The damage dealt to each entity hit
    knockback: 1.5 # The knockback force applied to hit entities
  ...other config (eg triggers, filters, mutators, etc)
```