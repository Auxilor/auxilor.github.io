# `spawn_mobs`
#### Triggered Effect

Spawns mobs to help you

# Example Config
```yaml
- id: spawn_mobs
  args:
    amount: 4 # The amount of mobs to spawn
    ticks_to_live: 120 # The amount of ticks the mobs should live for
    health: 5 # The mob health
    range: 10 # The range around the location for mobs to spawn
    entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```