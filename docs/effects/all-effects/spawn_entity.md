# `spawn_entity`
:::dangerTriggered Effect
This effect requires a [Trigger](https://plugins.auxilor.io/effects/all-triggers) to activate.
:::

Spawns an [entity](https://plugins.auxilor.io/all-plugins/the-entity-lookup-system)

# Effect Syntax
```yaml
- id: spawn_entity
  args:
    entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
  ...other config (eg triggers, filters, mutators, etc)
```
