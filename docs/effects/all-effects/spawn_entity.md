# `spawn_entity`

Spawns an [entity](https://plugins.auxilor.io/all-plugins/the-entity-lookup-system)

> [!danger] Triggered Effect

> [!example]
> ```yaml
> - id: spawn_entity
>   args:
>     entity: cave_spider speed:100 # The mob to spawn, takes a lookup string
>   ...other config (eg triggers, filters, mutators, etc)
> ```
