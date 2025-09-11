# `create_explosion`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Creates an explosion

# Effect Syntax
```yaml
- id: create_explosion
  args:
    power: 1 # The power of the explosion
    amount: 1 # The amount of explosions
    create_fire: true # If the explosion should create fire
    break_blocks: true # If the explosion should break blocks
    player_as_damager: false # If the player should be the source of the explosion
    
  ...other config (eg triggers, filters, mutators, etc)
```
